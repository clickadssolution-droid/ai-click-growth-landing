import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { OPPORTUNITY_AREAS } from "@/lib/constants";

const ICON_PATHS: Record<string, string> = {
  Publicidad: "M3 11l18-7-7 18-2.5-7.5L3 11z",
  Funnels: "M4 4h16l-6 8v6l-4 2v-8L4 4z",
  Web: "M4 5h16v14H4V5zM4 9h16M8 5v0",
  Ecommerce: "M6 6h15l-1.5 8.5H8L6 6zm0 0L5 3H2m6 18a1 1 0 100-2 1 1 0 000 2zm9 0a1 1 0 100-2 1 1 0 000 2z",
  Automatización: "M12 2v4m0 12v4m10-10h-4M6 12H2m15.5-6.5l-2.8 2.8M9.3 9.3L6.5 6.5m11 11l-2.8-2.8M9.3 14.7l-2.8 2.8",
  IA: "M12 3l1.8 4.6L18 9l-4.2 1.4L12 15l-1.8-4.6L6 9l4.2-1.4L12 3zM19 15l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8.8-2z",
};

/**
 * Sección "Áreas de oportunidad" — cualitativa, sin cifras inventadas (brief sección 7).
 * Arquitectura preparada para sustituir por KPIs reales cuando existan (ver DESIGN-BRIEF.md).
 */
export function OpportunityAreas() {
  return (
    <section id="areas-de-oportunidad" className="bg-white py-10 sm:py-14 lg:py-16">
      <Container>
        <SectionHeading
          eyebrow="Panorama inicial"
          title="Una auditoría analiza múltiples palancas de tu negocio, no solo una"
          lead="Estas son las áreas que revisamos para identificar dónde están tus mayores oportunidades de crecimiento."
        />

        <ul className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3" role="list">
          {OPPORTUNITY_AREAS.map((item, i) => (
            <Reveal key={item.area} as="li" delayMs={i * 60}>
              <div className="flex h-full flex-col gap-3 rounded-[var(--radius-lg)] border border-border-light bg-ivory-50 p-5 sm:p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] bg-blue-50 text-blue-600">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d={ICON_PATHS[item.area]}
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <p className="font-body text-xs font-semibold uppercase tracking-[0.06em] text-text-muted-light">
                    {item.area}
                  </p>
                  <p className="mt-1 font-display text-lg font-semibold text-navy-900">{item.focus}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
