import { AuditCtaButton } from "@/components/ui/AuditCtaButton";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HeroGrowthVisual } from "@/components/sections/HeroGrowthVisual";
import { TrustChips } from "@/components/sections/TrustChips";
import { CTA_COPY, HERO_CONTENT } from "@/lib/constants";

/**
 * Headline (V1.4 punto 8): wrap natural, SIN saltos de línea forzados — con el
 * tamaño más chico de V1.4 (58-68px vs 64-78px en V1.3), forzar los mismos 4
 * cortes cortos hacía que el bloque se sintiera una columna angosta. El wrap
 * natural en una columna más ancha (ver `max-w` del copy) reparte mejor las
 * palabras por línea y se siente más editorial/balanceado con el gráfico.
 * Solo "frenando el crecimiento" se resalta en naranja (V1.4 punto 9).
 */
function HeroHeadline() {
  const { headline, headlineHighlight } = HERO_CONTENT;
  const index = headline.indexOf(headlineHighlight);
  if (index === -1) return <>{headline}</>;

  const before = headline.slice(0, index);
  const after = headline.slice(index + headlineHighlight.length);

  return (
    <>
      {before}
      <span className="text-orange-500">{headlineHighlight}</span>
      {after}
    </>
  );
}

interface HeroProps {
  hasIsotype?: boolean;
}

/**
 * Hero — bloque navy de apertura (brief secciones 1 y 9; V1.1 punto 3 / V1.3 punto 9:
 * composición compacta para que copy + CTAs + gráfico completo quepan en el primer
 * viewport, incluso con el headline editorial más grande de V1.3).
 */
export function Hero({ hasIsotype = false }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-navy-900 pb-12 pt-6 sm:pb-14 sm:pt-8 lg:pb-14 lg:pt-10"
    >
      {/* Fondo ambiental: blobs muy lentos, ver DESIGN-BRIEF.md sección 8 */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="blob-a absolute -left-24 top-0 h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-[110px]" />
        <div className="blob-b absolute -right-20 bottom-0 h-[380px] w-[380px] rounded-full bg-orange-500/10 blur-[110px]" />
      </div>

      <Container className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-8">
        <div className="max-w-[560px] lg:max-w-[640px]">
          {/* Pre-headline: discreto a propósito (V1.3 punto 5) */}
          <span className="mb-3 inline-flex items-center gap-2 rounded-[var(--radius-pill)] border border-white/15 bg-white/5 px-4 py-2 font-body text-xs font-semibold uppercase tracking-[0.06em] text-text-muted-dark">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
            </span>
            {HERO_CONTENT.preHeadline}
          </span>

          {/*
            Headline (V1.4 puntos 5-7): mobile 40-46px, tablet 48-58px,
            desktop clamp 58-68px (tope real ~68px, nunca toca 70px).
            Tracking -0.02em (tablet) / -0.03em (desktop); sin tracking extra
            en mobile para no comprimir acentos/ñ. Line-height 1.02 en mobile/
            tablet (más aire para acentos), 0.98 en desktop.
          */}
          <h1 className="font-display text-[clamp(2.5rem,1.9rem+2.5vw,2.875rem)] font-extrabold leading-[1.02] text-white sm:text-[clamp(3rem,2.2rem+3vw,3.625rem)] sm:tracking-[-0.02em] lg:text-[clamp(3.625rem,2.6rem+1.6vw,4.25rem)] lg:leading-[0.98] lg:tracking-[-0.03em]">
            <HeroHeadline />
          </h1>

          {/* Subheadline: corta, ancho acotado, gris azulado suave (V1.3 punto 4) */}
          <p className="mt-4 max-w-[600px] text-[17px] leading-relaxed text-text-muted-dark sm:text-lg lg:text-xl">
            {HERO_CONTENT.subheadline}
          </p>

          <p className="mt-2 text-xs italic leading-relaxed text-text-muted-dark/80 sm:text-sm">
            {HERO_CONTENT.objection}
          </p>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <AuditCtaButton
              origin="hero"
              variant="primary"
              className="lg:[animation:cta-float_3.2s_ease-in-out_infinite] lg:hover:[animation-play-state:paused]"
            >
              {CTA_COPY.heroPrimary}
            </AuditCtaButton>
            <Button variant="secondary-dark" href="#que-analizamos">
              {CTA_COPY.heroSecondary}
            </Button>
          </div>

          <TrustChips />
        </div>

        <HeroGrowthVisual hasIsotype={hasIsotype} />
      </Container>
    </section>
  );
}
