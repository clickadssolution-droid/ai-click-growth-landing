import { AuditCtaButton } from "@/components/ui/AuditCtaButton";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AUDIT_SCOPE_ITEMS, CTA_COPY } from "@/lib/constants";

/** "Qué analizamos" — alcance de la Auditoría Growth 360° (brief sección "QUÉ ANALIZAMOS"). */
export function AuditScope() {
  return (
    <section id="que-analizamos" className="bg-ivory-50 py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <SectionHeading
            eyebrow="Auditoría Growth 360°"
            title="Qué analizamos"
            lead="Un diagnóstico completo de tu negocio: publicidad, captación, funnel, web, ecommerce, seguimiento comercial y automatización con IA."
          />

          <Reveal>
            <ul className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2" role="list">
              {AUDIT_SCOPE_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-blue-600"
                  >
                    <path
                      d="M5 12.5l4.5 4.5L19 7"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="font-body text-[15px] text-navy-900">{item}</span>
                </li>
              ))}
            </ul>

            <AuditCtaButton origin="audit-section" variant="primary" className="mt-8">
              {CTA_COPY.auditSection}
            </AuditCtaButton>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
