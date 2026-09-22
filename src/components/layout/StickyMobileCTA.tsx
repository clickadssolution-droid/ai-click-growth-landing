"use client";

import { useEffect, useState } from "react";
import { AuditCtaButton } from "@/components/ui/AuditCtaButton";
import { CTA_COPY } from "@/lib/constants";

/**
 * CTA sticky discreto en mobile, aparece tras superar el Hero (brief sección 15/"CTAs").
 * Se retira cuando el Footer entra en viewport para no tapar su última fila, y
 * vuelve al salir de él. Siempre montado (fixed, sin layout shift): se oculta con
 * translate + opacity + `invisible`, que además lo saca del orden de tabulación y
 * del árbol de accesibilidad. prefers-reduced-motion anula la transición (globals.css).
 * Dismissible; solo visible por debajo del breakpoint `lg`.
 */
export function StickyMobileCTA() {
  const [isPastHero, setIsPastHero] = useState(false);
  const [isFooterInView, setIsFooterInView] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const heroEl = document.getElementById("hero");
    const footerEl = document.querySelector("footer");
    if (typeof IntersectionObserver === "undefined") return;

    const observers: IntersectionObserver[] = [];

    if (heroEl) {
      const heroObserver = new IntersectionObserver(
        ([entry]) => {
          setIsPastHero(!entry.isIntersecting);
        },
        { rootMargin: "-80% 0px 0px 0px" },
      );
      heroObserver.observe(heroEl);
      observers.push(heroObserver);
    }

    if (footerEl) {
      const footerObserver = new IntersectionObserver(([entry]) => {
        setIsFooterInView(entry.isIntersecting);
      });
      footerObserver.observe(footerEl);
      observers.push(footerObserver);
    }

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  if (isDismissed) return null;

  const isVisible = isPastHero && !isFooterInView;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-30 border-t border-border-light bg-white/95 px-4 py-3 shadow-[0_-8px_24px_rgba(15,23,42,0.10)] backdrop-blur-sm transition-[transform,opacity,visibility] duration-300 ease-[var(--ease-out-standard)] lg:hidden ${
        isVisible ? "visible translate-y-0 opacity-100" : "invisible translate-y-full opacity-0"
      }`}
      role="region"
      aria-label="Solicitar auditoría"
    >
      <div className="flex items-center gap-3">
        <AuditCtaButton origin="sticky-mobile" variant="primary" className="flex-1 py-3 text-sm">
          {CTA_COPY.stickyMobile}
        </AuditCtaButton>
        <button
          type="button"
          aria-label="Ocultar este aviso"
          onClick={() => setIsDismissed(true)}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-navy-900/60"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
