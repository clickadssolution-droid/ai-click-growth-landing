import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQ_ITEMS } from "@/lib/constants";

/** FAQ — respuestas breves, sin claims no verificados (brief sección "FAQ"). */
export function FAQ() {
  return (
    <section id="faq" className="bg-ivory-50 py-10 sm:py-14 lg:py-16">
      <Container className="max-w-3xl">
        <SectionHeading eyebrow="Preguntas frecuentes" title="Resolvemos tus dudas" align="center" className="mx-auto" />

        <div className="mt-8 flex flex-col gap-3">
          {FAQ_ITEMS.map((item, i) => (
            <Reveal key={item.question} delayMs={i * 40}>
              <details className="group rounded-[var(--radius-lg)] border border-border-light bg-white open:border-blue-600/40">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-display text-[15px] font-semibold text-navy-900 sm:px-6 sm:py-5">
                  {item.question}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    className="shrink-0 text-blue-600 transition-transform duration-200 group-open:rotate-180"
                  >
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </summary>
                <p className="px-5 pb-5 text-sm leading-relaxed text-text-muted-light sm:px-6">{item.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
