import { AuditCtaButton } from "@/components/ui/AuditCtaButton";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CTA_COPY, FINAL_CTA_CONTENT, TRUST_CHIPS } from "@/lib/constants";

/**
 * CTA final — segundo bloque navy de alto impacto (brief sección "CTA FINAL").
 * V1.5: sección compactada (padding y gaps internos reducidos siguiendo la
 * jerarquía headline→subheadline→CTA→microcopy), anchos máximos acotados para
 * headline/subheadline, y glow del botón atenuado para no competir con el
 * headline. Sin promesas de tiempo de respuesta en la microcopy.
 */
export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-navy-900 pb-11 pt-11 sm:pb-[60px] sm:pt-[60px] lg:pb-16 lg:pt-[72px]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="blob-a absolute left-1/3 top-1/2 h-[380px] w-[380px] -translate-y-1/2 rounded-full bg-blue-600/15 blur-[120px]" />
      </div>

      <Container className="relative flex flex-col items-center text-center">
        <Reveal className="flex flex-col items-center">
          <h2 className="max-w-[960px] font-display text-[clamp(1.875rem,1.6rem+1.2vw,2.75rem)] font-bold leading-[1.15] text-white">
            {FINAL_CTA_CONTENT.headline}
          </h2>
          <p className="mt-4 max-w-[720px] text-lg leading-relaxed text-text-muted-dark">
            {FINAL_CTA_CONTENT.subtext}
          </p>

          <div className="mt-7 flex justify-center">
            <AuditCtaButton
              origin="final"
              variant="primary"
              className="!shadow-[0_6px_16px_-8px_rgba(255,176,33,0.35)] hover:!shadow-[0_10px_22px_-8px_rgba(255,176,33,0.45)]"
            >
              {CTA_COPY.finalCta}
            </AuditCtaButton>
          </div>

          <p className="mt-3 text-xs text-text-muted-dark/70">{TRUST_CHIPS.join(" · ")}</p>
        </Reveal>
      </Container>
    </section>
  );
}
