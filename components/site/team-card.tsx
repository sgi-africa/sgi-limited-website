import Image from "next/image";

import { cn } from "@/lib/utils";

type TeamCardProps = {
  name: string;
  role: string;
  shortRole: string;
  bio: string;
  image: string;
  className?: string;
};

export function TeamCard({
  name,
  role,
  shortRole,
  bio,
  image,
  className,
}: TeamCardProps) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card transition-all hover:border-accent/40",
        className
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-12 -top-12 size-40 rounded-full bg-[radial-gradient(circle,rgba(0,212,255,0.18),transparent_70%)] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
      />
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-muted/20">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-card to-transparent"
        />
      </div>
      <div className="relative flex flex-1 flex-col gap-4 p-6">
        <div className="flex flex-col">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
            {shortRole}
          </span>
          <span className="font-heading text-base font-semibold tracking-tight text-foreground">
            {name}
          </span>
        </div>
        <div className="space-y-1.5">
          <h3 className="font-heading text-sm font-medium text-foreground">
            {role}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">{bio}</p>
        </div>
      </div>
    </article>
  );
}
