"use client";

import { useState } from "react";
import { BrandCore } from "@/components/ui/BrandCore";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GROWTH_ECOSYSTEM_PILLARS } from "@/lib/constants";
import { getOrbitPositions } from "@/lib/orbit";

const SIZE = 520;
const RADIUS = 200;
const CENTER = SIZE / 2;
const DESCRIPTION_ID = "growth-ecosystem-description";

interface GrowthEcosystemProps {
  hasIsotype?: boolean;
}

/**
 * Growth Ecosystem (brief sección 10): núcleo + 6 pilares.
 * Desktop: estructura orbital en SVG/CSS, rotación extremadamente lenta, pausa en
 * hover/focus, nodo activo resalta conexión y muestra descripción, accesible por teclado.
 * Mobile: lista/acordeón visual conectado (sin reducir el orbital hasta ilegibilidad).
 * V1.2 punto 5: título + gráfico + microcopy compactados en un bloque cohesionado,
 * sin min-height ni márgenes que dejen espacio muerto alrededor del orbital.
 */
export function GrowthEcosystem({ hasIsotype = false }: GrowthEcosystemProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const positions = getOrbitPositions(GROWTH_ECOSYSTEM_PILLARS.length);
  const active = GROWTH_ECOSYSTEM_PILLARS.find((p) => p.id === activeId) ?? null;

  return (
    <section id="growth-ecosystem" className="bg-white py-12 sm:py-16 lg:py-20">
      <Container>
        <SectionHeading
          eyebrow="Growth Ecosystem"
          align="center"
          title={
            <>
              AI CLICK <span className="text-blue-700">GROWTH SYSTEM</span>
            </>
          }
          lead="Seis capacidades trabajando alrededor de un mismo sistema de crecimiento."
          className="mx-auto"
        />

        {/* Desktop: gráfico orbital */}
        <div className="orbit-group relative mx-auto mt-8 hidden w-full max-w-[520px] lg:block">
          <div className="relative aspect-square w-full overflow-visible">
            <div className="orbit-rotator absolute inset-0">
              <svg
                className="absolute inset-0 h-full w-full overflow-visible"
                viewBox={`0 0 ${SIZE} ${SIZE}`}
                fill="none"
                aria-hidden="true"
              >
                {positions.map(({ angleDeg }, i) => {
                  const rad = (angleDeg * Math.PI) / 180;
                  const x = CENTER + RADIUS * Math.cos(rad);
                  const y = CENTER + RADIUS * Math.sin(rad);
                  const isActive = GROWTH_ECOSYSTEM_PILLARS[i].id === activeId;
                  return (
                    <line
                      key={GROWTH_ECOSYSTEM_PILLARS[i].id}
                      x1={CENTER}
                      y1={CENTER}
                      x2={x}
                      y2={y}
                      stroke={isActive ? "#FFB021" : "#0082D2"}
                      strokeOpacity={isActive ? 0.9 : 0.45}
                      strokeWidth={isActive ? 2.5 : 1.5}
                      style={{ transition: "stroke 200ms ease-out, stroke-opacity 200ms ease-out" }}
                    />
                  );
                })}
              </svg>

              {positions.map(({ angleDeg }, i) => {
                const rad = (angleDeg * Math.PI) / 180;
                const x = CENTER + RADIUS * Math.cos(rad);
                const y = CENTER + RADIUS * Math.sin(rad);
                const pillar = GROWTH_ECOSYSTEM_PILLARS[i];
                const isActive = pillar.id === activeId;

                return (
                  <div
                    key={pillar.id}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${(x / SIZE) * 100}%`, top: `${(y / SIZE) * 100}%` }}
                  >
                    <div className="orbit-counter">
                      <button
                        type="button"
                        className={`orbit-node whitespace-nowrap rounded-[var(--radius-pill)] border px-4 py-2.5 font-body text-xs font-semibold shadow-[0_10px_24px_-8px_rgba(0,28,61,0.35)] transition-colors duration-200 ${
                          isActive
                            ? "border-orange-500 bg-navy-900 text-white ring-2 ring-orange-500/60"
                            : "border-border-light bg-navy-800 text-white"
                        }`}
                        aria-describedby={DESCRIPTION_ID}
                        onMouseEnter={() => setActiveId(pillar.id)}
                        onMouseLeave={() => setActiveId((current) => (current === pillar.id ? null : current))}
                        onFocus={() => setActiveId(pillar.id)}
                        onBlur={() => setActiveId((current) => (current === pillar.id ? null : current))}
                      >
                        {pillar.label}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pointer-events-none absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2">
              <BrandCore size={116} hasIsotype={hasIsotype} />
            </div>
          </div>

          <div
            id={DESCRIPTION_ID}
            aria-live="polite"
            className="mx-auto mt-6 min-h-[3.25rem] max-w-md text-center"
          >
            {active ? (
              <>
                <p className="font-display text-base font-semibold text-navy-900">{active.label}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-text-muted-light">{active.description}</p>
              </>
            ) : (
              <p className="text-sm leading-relaxed text-text-muted-light">
                Pasa el cursor o navega con teclado por cada área del ecosistema.
              </p>
            )}
          </div>
        </div>

        {/* Mobile / tablet: lista-acordeón conectada */}
        <ol className="relative mt-8 flex flex-col gap-3 border-l-2 border-blue-50 pl-6 lg:hidden">
          {GROWTH_ECOSYSTEM_PILLARS.map((pillar) => (
            <li key={pillar.id} className="relative">
              <span
                className="absolute -left-[27px] top-5 h-2.5 w-2.5 rounded-full bg-blue-600 ring-4 ring-white"
                aria-hidden="true"
              />
              <details className="group rounded-[var(--radius-lg)] border border-border-light bg-ivory-50 open:border-blue-600/40">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 font-display text-sm font-semibold text-navy-900">
                  {pillar.label}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    className="shrink-0 text-blue-600 transition-transform duration-200 group-open:rotate-180"
                  >
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </summary>
                <p className="px-5 pb-4 text-sm leading-relaxed text-text-muted-light">{pillar.description}</p>
              </details>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
