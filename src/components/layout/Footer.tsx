"use client";

import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { BrandMark } from "@/components/ui/BrandMark";
import {
  FOOTER_BRAND_CONTENT,
  FOOTER_COMPANY_LINKS,
  FOOTER_LEGAL_LINKS,
  FOOTER_SOCIAL_LINKS,
  SERVICES,
  SITE,
} from "@/lib/constants";
import { resolveSectionHref } from "@/lib/nav";

const SOCIAL_ICON_PATHS: Record<string, string> = {
  Instagram: "M7 3h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4z M12 16a4 4 0 100-8 4 4 0 000 8z M17 6.2v.01",
  LinkedIn: "M6.5 9.5v7M6.5 6.3v.01M10.5 16.5v-4.2a2 2 0 014 0v4.2M10.5 16.5v-6.5",
  Facebook: "M14 8.5h2.2V5.5H14c-1.9 0-3.2 1.3-3.2 3.2v1.8H9v3h1.8v6h3v-6h2.1l.4-3h-2.5V9c0-.3.1-.5.7-.5z",
};

function SocialIcon({ label }: { label: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={SOCIAL_ICON_PATHS[label]}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface FooterColumnProps {
  title: string;
  links: readonly { label: string; href: string }[];
  ariaLabel: string;
}

function FooterColumn({ title, links, ariaLabel }: FooterColumnProps) {
  return (
    <div>
      <h3 className="font-body text-xs font-semibold uppercase tracking-[0.08em] text-text-muted-dark/80">
        {title}
      </h3>
      <ul className="mt-4 flex flex-col gap-3" aria-label={ariaLabel}>
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="font-body text-base text-text-muted-dark transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface FooterProps {
  hasLogoWhite?: boolean;
}

/**
 * Footer — bloque de cierre, un tono más oscuro que el CTA final para separarlos
 * visualmente (brief V1.5 sección 5). Grilla de 4 columnas (Marca, Servicios,
 * Compañía, Legal) que colapsa a 2 en tablet y 1 en mobile (sección 11).
 * Organización inspirada libremente en agencias B2B premium (no se copia MAE
 * literalmente — solo la idea de "footer como sitemap").
 */
export function Footer({ hasLogoWhite = false }: FooterProps) {
  const year = new Date().getFullYear();
  const pathname = usePathname();
  const serviceLinks = SERVICES.map((service) => ({
    label: service.title,
    href: resolveSectionHref(pathname, "#servicios"),
  }));
  const companyLinks = FOOTER_COMPANY_LINKS.map((link) => ({
    ...link,
    href: resolveSectionHref(pathname, link.href),
  }));

  return (
    <footer className="border-t border-blue-600/20 bg-navy-950 pt-16 pb-7 lg:pt-20">
      <Container>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-4 lg:gap-16">
          {/* Columna 1 — Marca */}
          <div className="sm:col-span-2 lg:col-span-1">
            <BrandMark tone="dark" hasLogoWhite={hasLogoWhite} className="w-28 lg:w-32" />
            <p className="mt-4 max-w-sm text-base leading-relaxed text-text-muted-dark">
              {FOOTER_BRAND_CONTENT.tagline}
            </p>

            <div className="mt-4 flex items-center gap-3">
              {FOOTER_SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-text-muted-dark transition-colors duration-200 hover:border-white/30 hover:text-white"
                >
                  <SocialIcon label={social.label} />
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Servicios" links={serviceLinks} ariaLabel="Servicios" />
          <FooterColumn title="Compañía" links={companyLinks} ariaLabel="Navegación de footer" />
          <FooterColumn title="Legal" links={FOOTER_LEGAL_LINKS} ariaLabel="Legal" />
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border-dark pt-6 text-xs text-text-muted-dark sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {SITE.name}. Todos los derechos reservados.
          </p>
          <nav aria-label="Enlaces legales" className="flex items-center gap-2">
            {FOOTER_LEGAL_LINKS.map((link, i) => (
              <span key={link.label} className="flex items-center gap-2">
                {i > 0 ? <span aria-hidden="true">·</span> : null}
                <a href={link.href} className="transition-colors duration-200 hover:text-white">
                  {link.label}
                </a>
              </span>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
