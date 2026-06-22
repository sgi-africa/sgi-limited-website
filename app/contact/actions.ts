"use server";

import nodemailer from "nodemailer";

import { siteConfig } from "@/components/site/nav-config";

import type { ContactState } from "./types";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Zoho Mail SMTP — same servers you use in Outlook, Apple Mail, etc. */
const ZOHO_SMTP = {
  host: "smtp.zoho.com",
  port: 587,
  secure: false,
} as const;

function getZohoTransporter() {
  const user =
    process.env.ZOHO_EMAIL?.trim() ?? siteConfig.email;
  const pass = process.env.ZOHO_APP_PASSWORD?.trim();
  if (!pass) return null;

  return nodemailer.createTransport({
    ...ZOHO_SMTP,
    auth: { user, pass },
  });
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const fieldErrors: ContactState["fieldErrors"] = {};
  if (name.length < 2) fieldErrors.name = "Please enter your full name.";
  if (!EMAIL_RE.test(email)) fieldErrors.email = "Please enter a valid email.";
  if (message.length < 10)
    fieldErrors.message = "Tell us a little more (at least 10 characters).";

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Please fix the highlighted fields and try again.",
      fieldErrors,
      values: { name, email, message },
    };
  }

  const transporter = getZohoTransporter();
  if (!transporter) {
    console.error("[contact] ZOHO_APP_PASSWORD is not set.");
    return {
      status: "error",
      message:
        "We couldn't send your message right now. Please email us directly or try again later.",
      values: { name, email, message },
    };
  }

  const from = process.env.ZOHO_EMAIL?.trim() ?? siteConfig.email;

  const subject = `[${siteConfig.shortName} Contact] ${name}`;
  const text = [
    `New message from the ${siteConfig.name} website contact form.`,
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    "",
    "Message:",
    message,
  ].join("\n");

  try {
    await transporter.sendMail({
      from,
      to: siteConfig.email,
      replyTo: email,
      subject,
      text,
    });
  } catch (e) {
    console.error("[contact] send failed:", e);
    return {
      status: "error",
      message:
        "We couldn't send your message. Please try again in a moment or email us directly.",
      values: { name, email, message },
    };
  }

  return {
    status: "success",
    message: `Thanks, ${name.split(" ")[0]} - we received your message and will reply within one business day.`,
    values: { name: "", email: "", message: "" },
  };
}
