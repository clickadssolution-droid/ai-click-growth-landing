"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { BrandMark } from "@/components/ui/BrandMark";
import { AuditCtaButton } from "@/components/ui/AuditCtaButton";
import { CTA_COPY, NAV_LINKS } from "@/lib/constants";

interface HeaderProps {
  hasLogoColor?: boolean;
}

/**
 * Header sticky con marca, navegación mínima y CTA (brief: "HEADER").
 * V1.7: última pasada de compactación (~10-15% adicional sobre V1.6) — logo
 * 74-84 mobile / 78-88 tablet / 82-92 desktop de ancho, padding vertical
 * 6-8 mobile / 8-10 tablet / 8-10 desktop, CTA con padding vertical 10-12px /
 * horizontal 22-28px. Gap de nav sin cambios (ya estaba equilibrado).
 */
export function Header({ hasLogoColor = false }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border-light/80 bg-white/[0.88] supports-[backdrop-filter]:backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-6 py-1.5 sm:px-8 sm:py-2 lg:py-2.5">
        <a href="#top" className="shrink-0" aria-label="AI Click Solution — inicio">
          <BrandMark
            tone="light"
            hasLogoColor={hasLogoColor}
            priority
            className="w-[78px] sm:w-[83px] lg:w-[87px]"
          />
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Navegación principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm font-medium text-navy-900/80 transition-colors hover:text-blue-700"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <AuditCtaButton origin="header" variant="primary" className="px-6 py-2.5 text-sm">
            {CTA_COPY.headerCta}
          </AuditCtaButton>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-md text-navy-900 lg:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="sr-only">Menú</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {isMenuOpen ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen ? (
        <div id="mobile-nav" className="border-t border-border-light bg-white lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-md px-2 py-3 font-body text-base font-medium text-navy-900 hover:bg-ivory-50"
              >
                {link.label}
              </a>
            ))}
            <AuditCtaButton origin="header" variant="primary" className="mt-3 w-full">
              {CTA_COPY.headerCta}
            </AuditCtaButton>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
