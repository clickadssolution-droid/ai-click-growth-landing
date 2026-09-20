import { AuditCtaButton } from "@/components/ui/AuditCtaButton";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { APPLIED_EXPERIENCE_CONTENT, BUSINESS_SCENARIOS, CTA_COPY } from "@/lib/constants";

/** Íconos simples, uno por escenario — sin relación con los nodos del Growth Ecosystem. */
const SCENARIO_ICON_PATHS: Record<string, string> = {
  "pocos-prospectos": "M11 11a6 6 0 100-12 6 6 0 000 12zM21 21l-4.3-4.3",
  "leads-sin-cierre": "M4 4h16l-6 8v6l-4 2v-8L4 4z",
  "web-no-convierte": "M4 5h16v14H4V5zM4 9h16M8 16l3-3 2 2 3-4",
  "procesos-manuales":
    "M12 2v4m0 12v4m10-10h-4M6 12H2m15.5-6.5l-2.8 2.8M9.3 9.3L6.5 6.5m11 11l-2.8-2.8M9.3 14.7l-2.8 2.8",
  "ecommerce-estancado":
    "M6 6h15l-1.5 8.5H8L6 6zm0 0L5 3H2m6 18a1 1 0 100-2 1 1 0 000 2zm9 0a1 1 0 100-2 1 1 0 000 2z",
  "crecimiento-sin-direccion": "M12 21a9 9 0 100-18 9 9 0 000 18zM12 8l-2 6 6-2-4-4z",
};

/**
 * Experiencia Aplicada — escenarios de negocio, NO un catálogo de servicios ni
 * un segundo mapa orbital (evita redundancia con Growth Ecosystem, que ya cubre
 * las 6 capacidades conectadas del sistema). Bloques editoriales compactos con
 * scroll-reveal escalonado, hover sutil y acentos azul/naranja alternados.
 */
export function AppliedExperience() {
  return (
    <section id="experiencia-aplicada" className="bg-ivory-50 py-12 sm:py-16 lg:py-20">
      <Container>
        <SectionHeading
          eyebrow={APPLIED_EXPERIENCE_CONTENT.eyebrow}
          title={APPLIED_EXPERIENCE_CONTENT.headline}
          lead={APPLIED_EXPERIENCE_CONTENT.subheadline}
          align="center"
          className="mx-auto max-w-2xl"
        />

        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" role="list">
          {BUSINESS_SCENARIOS.map((scenario, i) => {
            const isBlue = i % 2 === 0;
            return (
              <Reveal key={scenario.id} as="li" delayMs={i * 60}>
                <div className="group flex h-full flex-col gap-3 rounded-[var(--radius-lg)] border border-border-light bg-white p-5 transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_16px_32px_-16px_rgba(0,28,61,0.18)]">
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] ${
                      isBlue ? "bg-blue-50 text-blue-600" : "bg-orange-500/10 text-orange-600"
                    }`}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d={SCENARIO_ICON_PATHS[scenario.id]}
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <h3 className="font-display text-base font-bold text-navy-900">{scenario.title}</h3>
                  <p className="text-sm leading-relaxed text-text-muted-light">{scenario.description}</p>
                </div>
              </Reveal>
            );
          })}
        </ul>

        <Reveal className="mt-10 flex flex-col items-center gap-5 text-center" delayMs={120}>
          <p className="max-w-xl font-display text-lg font-bold text-navy-900 sm:text-xl">
            {APPLIED_EXPERIENCE_CONTENT.hook}
          </p>
          <AuditCtaButton origin="applied-experience" variant="primary">
            {CTA_COPY.appliedExperience}
          </AuditCtaButton>
        </Reveal>
      </Container>
    </section>
  );
}
