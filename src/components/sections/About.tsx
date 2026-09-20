import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ABOUT_CONTENT } from "@/lib/constants";

/**
 * Quiénes somos — sección breve, no un About corporativo extenso (brief).
 * Preparada para incorporar fotografías y perfiles reales del equipo más adelante.
 */
export function About() {
  return (
    <section id="quienes-somos" className="bg-white py-10 sm:py-14 lg:py-16">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <span className="mb-3 inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.08em] text-blue-700">
            <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
            {ABOUT_CONTENT.eyebrow}
          </span>
          <h2 className="font-display text-[clamp(1.875rem,1.6rem+1.2vw,2.75rem)] font-bold leading-[1.15] text-navy-900">
            {ABOUT_CONTENT.headline}
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-text-muted-light">
            {ABOUT_CONTENT.body}
          </p>

          <ul className="mt-6 flex flex-wrap gap-2" role="list">
            {ABOUT_CONTENT.pillars.map((pillar) => (
              <li
                key={pillar}
                className="rounded-[var(--radius-pill)] border border-border-light bg-ivory-50 px-4 py-1.5 font-body text-sm font-medium text-navy-900"
              >
                {pillar}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Placeholder de equipo — reemplazar por fotografías/perfiles reales */}
        <Reveal delayMs={80}>
          <div className="grid grid-cols-3 gap-3 sm:gap-4" aria-hidden="true">
            {[1, 2, 3].map((slot) => (
              <div
                key={slot}
                className="flex aspect-square flex-col items-center justify-center gap-2 rounded-[var(--radius-lg)] border-2 border-dashed border-border-light bg-ivory-50 text-center"
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-blue-600/60">
                  <path
                    d="M12 12a4 4 0 100-8 4 4 0 000 8zm-7 8a7 7 0 0114 0"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="px-2 text-[11px] font-medium leading-tight text-text-muted-light">
                  Perfil próximamente
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
