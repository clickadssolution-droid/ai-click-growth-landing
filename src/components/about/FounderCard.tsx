"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { Founder } from "@/lib/constants";

interface FounderCardProps {
  founder: Founder;
}

/**
 * Presentación fotográfica premium de un fundador/director. Recibe todo su
 * contenido vía `founder` (ver FOUNDERS en lib/constants.ts) para que sumar
 * otro socio en el futuro sea extender ese array — este componente no cambia.
 *
 * Entrada propia (no usa <Reveal/>, que anima solo opacity+translateY): aquí
 * se pide además una escala sutil (.985 → 1), así que se reutiliza el mismo
 * hook `useScrollReveal` con sus propias clases. `prefers-reduced-motion` ya
 * se resuelve de forma global en globals.css (colapsa cualquier transition).
 */
export function FounderCard({ founder }: FounderCardProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`mx-auto w-full max-w-[460px] transition-[opacity,transform] duration-500 ease-[var(--ease-out-standard)] lg:mx-0 ${
        isVisible ? "scale-100 translate-y-0 opacity-100" : "translate-y-4 scale-[0.985] opacity-0"
      }`}
    >
      <div className="aspect-[4/5] overflow-hidden rounded-[var(--radius-lg)] shadow-[0_20px_50px_-24px_rgba(0,28,61,0.28)] transition-[transform,box-shadow] duration-300 ease-[var(--ease-out-standard)] lg:hover:-translate-y-1 lg:hover:shadow-[0_28px_56px_-20px_rgba(0,28,61,0.34)]">
        <div className="relative h-full w-full">
          <Image
            src={founder.photo.src}
            alt={founder.photo.alt}
            fill
            sizes="(min-width: 1024px) 460px, (min-width: 640px) 60vw, 90vw"
            style={{ objectPosition: "50% 18%" }}
            className="object-cover"
          />
        </div>
      </div>

      <div className="mt-5">
        <p className="font-display text-xl font-bold text-navy-900">{founder.name}</p>
        <p className="mt-1 font-body text-sm font-medium text-blue-700">
          {founder.role} · {founder.company}
        </p>
        <span className="mt-3 inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.08em] text-blue-700">
          <span className="h-1.5 w-1.5 rounded-full bg-orange-500" aria-hidden="true" />
          {founder.tagline}
        </span>
        <p className="mt-3 max-w-sm font-body text-sm leading-relaxed text-text-muted-light">
          {founder.bio}
        </p>
      </div>
    </div>
  );
}
