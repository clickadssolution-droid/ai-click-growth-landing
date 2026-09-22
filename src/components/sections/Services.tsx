import { AuditCtaButton } from "@/components/ui/AuditCtaButton";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTA_COPY, SERVICES } from "@/lib/constants";

/**
 * Servicios — jerarquía editorial con numeración y variación visual, NO una
 * cuadrícula uniforme de 6 cards idénticas (brief sección "SERVICIOS").
 * Grid ordenado por filas (01–02–03 / 04–05–06): el masonry por columnas hacía
 * que la lectura siguiera 01, 03, 05 en la primera fila.
 */
export function Services() {
  return (
    <section id="servicios" className="border-t border-border-light/70 bg-ivory-50 py-12 sm:py-16 lg:py-20">
      <Container>
        <SectionHeading
          eyebrow="Servicios"
          title="Seis capacidades. Un solo sistema de crecimiento."
          lead="No vendemos tácticas sueltas — cada servicio se conecta con el resto para mover el mismo número: tu crecimiento."
        />

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.number} delayMs={i * 60}>
              <article
                className={`h-full rounded-[var(--radius-lg)] border p-6 sm:p-7 ${
                  service.featured
                    ? "border-orange-500/40 bg-white shadow-[0_16px_36px_-16px_rgba(0,28,61,0.18)]"
                    : "border-border-light bg-white"
                }`}
              >
                <div
                  className={`mb-5 h-1 w-10 rounded-full ${
                    service.featured ? "bg-orange-500" : "bg-blue-600"
                  }`}
                  aria-hidden="true"
                />
                <span
                  className={`font-metric font-semibold tabular-nums ${
                    service.featured ? "text-3xl text-navy-900" : "text-2xl text-blue-600"
                  }`}
                >
                  {service.number}
                </span>
                <h3
                  className={`mt-3 font-display font-bold text-navy-900 ${
                    service.featured ? "text-2xl" : "text-xl"
                  }`}
                >
                  {service.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-text-muted-light">
                  {service.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <AuditCtaButton origin="services" variant="primary">
            {CTA_COPY.auditSection}
          </AuditCtaButton>
        </div>
      </Container>
    </section>
  );
}
