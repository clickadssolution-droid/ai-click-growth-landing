import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { FounderCard } from "@/components/about/FounderCard";
import { ABOUT_CONTENT, FOUNDERS } from "@/lib/constants";

/**
 * Quiénes somos — sección breve, no un About corporativo extenso (brief).
 * Presentación fotográfica de fundadores/directores vía FOUNDERS + FounderCard.
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

        {FOUNDERS.map((founder) => (
          <FounderCard key={founder.name} founder={founder} />
        ))}
      </Container>
    </section>
  );
}
