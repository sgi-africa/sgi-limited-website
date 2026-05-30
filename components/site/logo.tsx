import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
  href?: string | null;
  size?: "sm" | "md" | "lg";
  priority?: boolean;
};

const sizeMap = {
  sm: { mark: "size-8", pixels: 32, text: "text-base" },
  md: { mark: "size-10", pixels: 40, text: "text-lg" },
  lg: { mark: "size-12", pixels: 48, text: "text-2xl" },
} as const;

export function LogoMark({
  className,
  size = "md",
  priority = false,
}: {
  className?: string;
  size?: LogoProps["size"];
  priority?: boolean;
}) {
  const { mark, pixels } = sizeMap[size ?? "md"];
  return (
    <span
      aria-hidden="true"
      className={cn("relative inline-flex shrink-0 overflow-hidden rounded-lg", mark, className)}
    >
      <Image
        src="/Logo.jpeg"
        alt=""
        width={pixels}
        height={pixels}
        priority={priority}
        className="size-full object-cover"
      />
    </span>
  );
}

export function Logo({
  className,
  showWordmark = true,
  href = "/",
  size = "md",
  priority = false,
}: LogoProps) {
  const { text } = sizeMap[size];

  const content = (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark size={size} priority={priority} />
      {showWordmark ? (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              "font-heading font-semibold tracking-tight text-foreground",
              text
            )}
          >
            SGI
          </span>
          <span className="hidden text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground sm:inline">
            Software Gateway Integrations
          </span>
        </span>
      ) : null}
    </span>
  );

  if (!href) return content;

  return (
    <Link
      href={href}
      aria-label="Software Gateway Integrations Limited — Home"
      className="group/logo inline-flex items-center rounded-xl outline-none transition focus-visible:ring-2 focus-visible:ring-ring/60"
    >
      {content}
    </Link>
  );
}
