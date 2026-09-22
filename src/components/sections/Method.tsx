import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { METHOD_STEPS } from "@/lib/constants";

/**
 * Método — "De diagnóstico a crecimiento" (brief sección "MÉTODO").
 * V1.1 punto 6: tintes muy suaves derivados únicamente de la identidad AI Click
 * (azul/navy en las etapas de análisis, naranja en las de acción), para reforzar
 * el recorrido como un proceso conectado y progresivo — sin arcoíris.
 */
const STEP_STYLES = [
  { card: "bg-blue-600/[0.06]", badge: "border-blue-600/30 bg-blue-50 text-blue-700" },
  { card: "bg-navy-900/[0.04]", badge: "border-blue-600/30 bg-blue-50 text-blue-700" },
  { card: "bg-blue-600/[0.06]", badge: "border-blue-600/30 bg-blue-50 text-blue-700" },
  { card: "bg-orange-500/[0.07]", badge: "border-orange-500/40 bg-orange-500/15 text-navy-900" },
  { card: "bg-orange-500/[0.1]", badge: "border-orange-500/40 bg-orange-500/15 text-navy-900" },
] as const;

export function Method() {
  return (
    <section id="metodo" className="bg-white py-12 sm:py-16 lg:py-20">
      <Container>
        <SectionHeading eyebrow="Cómo trabajamos" title="De diagnóstico a crecimiento" />

        <ol className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
          {METHOD_STEPS.map((step, i) => {
            const style = STEP_STYLES[i];
            return (
              <Reveal key={step.number} delayMs={i * 70} as="li">
                <div
                  className={`relative flex h-full flex-col gap-4 rounded-[var(--radius-lg)] border border-border-light p-5 transition-transform duration-200 lg:hover:-translate-y-1 lg:hover:shadow-[0_16px_32px_-16px_rgba(0,28,61,0.2)] ${style.card}`}
                >
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-full border font-metric text-sm font-semibold ${style.badge}`}
                  >
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-navy-900">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-muted-light">{step.description}</p>
                  </div>
                  {i < METHOD_STEPS.length - 1 ? (
                    <span
                      className="absolute right-[-14px] top-1/2 hidden h-px w-7 -translate-y-1/2 bg-blue-600/25 lg:block"
                      aria-hidden="true"
                    />
                  ) : null}
                </div>
              </Reveal>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
