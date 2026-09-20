import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}

/** Encabezado de sección reutilizable: eyebrow + H2 + lead opcional. */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  tone = "light",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isDark = tone === "dark";

  return (
    <Reveal className={`max-w-3xl ${isCenter ? "mx-auto text-center" : ""} ${className}`}>
      {eyebrow ? (
        <span
          className={`mb-3 inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.08em] ${
            isDark ? "text-orange-500" : "text-blue-700"
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={`font-display text-[clamp(1.875rem,1.6rem+1.2vw,2.75rem)] font-bold leading-[1.15] ${
          isDark ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            isDark ? "text-text-muted-dark" : "text-text-muted-light"
          }`}
        >
          {lead}
        </p>
      ) : null}
    </Reveal>
  );
}
