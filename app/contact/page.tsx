import type { Metadata } from "next";
import {
  ArrowUpRightIcon,
  ClockIcon,
  GlobeIcon,
  MailIcon,
  MapPinIcon,
  MessageCircleIcon,
} from "lucide-react";

import { FadeIn } from "@/components/site/fade-in";
import { GradientBlob } from "@/components/site/gradient-blob";
import { Section } from "@/components/site/section";
import { Button } from "@/components/ui/button";
import { siteConfig, SITE_URL } from "@/components/site/nav-config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Software Gateway Integrations Limited (SGI). Email us about your organisation and what you're trying to transform — we'll reply within one business day.",
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    url: `${SITE_URL}/contact`,
    title: "Contact · Software Gateway Integrations Limited",
    description:
      "Get in touch with Software Gateway Integrations Limited (SGI). Email us about your organisation and what you're trying to transform — we'll reply within one business day.",
  },
  twitter: {
    title: "Contact · Software Gateway Integrations Limited",
    description:
      "Get in touch with Software Gateway Integrations Limited (SGI). Email us about your organisation and what you're trying to transform — we'll reply within one business day.",
  },
};

const contactDetails = [
  {
    icon: MailIcon,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: MapPinIcon,
    label: "Office address",
    lines: [...siteConfig.officeAddressLines],
  },
  {
    icon: GlobeIcon,
    label: "Operating",
    value: "Globally",
  },
  {
    icon: ClockIcon,
    label: "Response time",
    value: "Within 1 business day",
  },
] as const;

const mailtoHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent("Project enquiry — SGI")}&body=${encodeURIComponent("Hi SGI team,\n\nI'm reaching out about:\n\n")}`;

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <Section as="section" size="lg" className="overflow-hidden pt-16 pb-10">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-grid-faint opacity-40 mask-[radial-gradient(ellipse_at_top,black_30%,transparent_70%)]"
        />
        <GradientBlob
          variant="cyan"
          size="xl"
          className="left-1/2 top-[-30%] -translate-x-1/2 opacity-40"
        />

        <div className="relative max-w-4xl">
          <FadeIn>
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-accent">
              <MessageCircleIcon className="size-3" />
              Contact
            </span>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="mt-5 font-heading text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Let&rsquo;s build{" "}
              <span className="text-brand-gradient">impactful technology</span>{" "}
              together.
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Tell us about your organisation and what you&rsquo;re trying to
              transform. Email us directly and we&rsquo;ll get back to you within
              one business day with a clear, honest next step.
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* CONTACT INFO */}
      <Section size="md" className="pb-28">
        <FadeIn className="mx-auto max-w-2xl">
          <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/70 p-8 sm:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-32 -top-32 size-72 rounded-full bg-[radial-gradient(circle,rgba(0,212,255,0.25),transparent_70%)] blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -left-24 -bottom-24 size-72 rounded-full bg-[radial-gradient(circle,rgba(10,37,64,0.6),transparent_70%)] blur-3xl"
            />

            <div className="relative space-y-8">
              <div className="space-y-3 text-center">
                <span className="inline-flex w-fit items-center rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-accent">
                  Get in touch
                </span>
                <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  Email us directly
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  We read every message and reply within one business day.
                  Include your organisation, goal, and timeline so we can help
                  faster.
                </p>
              </div>

              <div className="flex flex-col items-center gap-4 rounded-2xl border border-border/40 bg-background/30 p-6 text-center">
                <span className="inline-flex size-14 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10 text-accent">
                  <MailIcon className="size-6" />
                </span>
                <div className="space-y-1">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    Email
                  </p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="font-heading text-xl font-semibold text-foreground transition-colors hover:text-accent sm:text-2xl"
                  >
                    {siteConfig.email}
                  </a>
                </div>
                <Button
                  asChild
                  size="lg"
                  className="h-12 bg-brand-gradient px-8 text-base font-semibold text-white"
                >
                  <a href={mailtoHref}>
                    Send an email
                    <ArrowUpRightIcon className="ml-1.5 size-4" />
                  </a>
                </Button>
              </div>

              <ul className="grid gap-4 sm:grid-cols-2">
                {contactDetails.slice(1).map((detail) => (
                  <li
                    key={detail.label}
                    className="flex items-start gap-3 rounded-xl border border-border/40 bg-background/30 p-4"
                  >
                    <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 text-accent">
                      <detail.icon className="size-4" />
                    </span>
                    <div className="space-y-0.5">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                        {detail.label}
                      </p>
                      {"lines" in detail ? (
                        <div className="space-y-1">
                          {detail.lines.map((line) => (
                            <p
                              key={line}
                              className="text-sm font-medium leading-snug text-foreground"
                            >
                              {line}
                            </p>
                          ))}
                        </div>
                      ) : "value" in detail ? (
                        <p className="text-sm font-medium text-foreground">
                          {detail.value}
                        </p>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
