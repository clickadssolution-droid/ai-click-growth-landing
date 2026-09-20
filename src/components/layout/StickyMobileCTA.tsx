"use client";

import { useEffect, useState } from "react";
import { AuditCtaButton } from "@/components/ui/AuditCtaButton";
import { CTA_COPY } from "@/lib/constants";

/**
 * CTA sticky discreto en mobile, aparece tras superar el Hero (brief sección 15/"CTAs").
 * Dismissible; solo visible por debajo del breakpoint `lg`.
 */
export function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const heroEl = document.getElementById("hero");
    if (!heroEl || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      { rootMargin: "-80% 0px 0px 0px" },
    );

    observer.observe(heroEl);
    return () => observer.disconnect();
  }, []);

  if (isDismissed || !isVisible) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-30 border-t border-border-light bg-white/95 px-4 py-3 shadow-[0_-8px_24px_rgba(15,23,42,0.10)] backdrop-blur-sm lg:hidden"
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
