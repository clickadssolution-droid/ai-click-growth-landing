import { BrandCore } from "@/components/ui/BrandCore";
import { HERO_ECOSYSTEM_NODES } from "@/lib/constants";
import { getOrbitPositions } from "@/lib/orbit";

const SIZE = 480;
const RADIUS = 194;
const CENTER = SIZE / 2;

interface HeroGrowthVisualProps {
  hasIsotype?: boolean;
}

/**
 * Núcleo + nodos del Hero (brief: "HERO VISUAL"). Movimiento floating suave —
 * explícitamente SIN rotación orbital completa (esa se reserva para GrowthEcosystem).
 * Desktop: gráfico circular completo, con protagonismo real (V1.1 punto 5: "no debe
 * verse pequeño, perdido ni cortado"). Mobile: versión simplificada. El núcleo usa el
 * isotipo oficial (V1.2 punto 3) — el glow/sombra son del contenedor, el asset no se toca.
 */
export function HeroGrowthVisual({ hasIsotype = false }: HeroGrowthVisualProps) {
  const positions = getOrbitPositions(HERO_ECOSYSTEM_NODES.length);

  return (
    <div className="relative mx-auto w-full max-w-[500px]">
      {/* Desktop / tablet ancho: gráfico circular completo */}
      <div
        className="relative mx-auto hidden aspect-square w-full lg:block"
        style={{ maxWidth: SIZE }}
        aria-hidden="true"
      >
        {/* Glow que conecta visualmente el gráfico con el copy — ver V1.1 punto 5 */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/25 blur-[90px]" />

        <svg
          className="absolute inset-0 h-full w-full overflow-visible"
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          fill="none"
        >
          {positions.map(({ angleDeg }, i) => {
            const rad = (angleDeg * Math.PI) / 180;
            const x = CENTER + RADIUS * Math.cos(rad);
            const y = CENTER + RADIUS * Math.sin(rad);
            return (
              <line
                key={i}
                x1={CENTER}
                y1={CENTER}
                x2={x}
                y2={y}
                stroke="#0082D2"
                strokeOpacity={0.45}
                strokeWidth={1.5}
              />
            );
          })}
        </svg>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <BrandCore size={112} hasIsotype={hasIsotype} />
        </div>

        {positions.map(({ angleDeg }, i) => {
          const rad = (angleDeg * Math.PI) / 180;
          const x = CENTER + RADIUS * Math.cos(rad);
          const y = CENTER + RADIUS * Math.sin(rad);
          return (
            <div
              key={HERO_ECOSYSTEM_NODES[i]}
              className="node-float absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: x, top: y, animationDelay: `${i * 0.7}s` }}
            >
              <span className="whitespace-nowrap rounded-[var(--radius-pill)] border border-white/15 bg-navy-800 px-4 py-2.5 font-body text-sm font-semibold text-white shadow-[0_8px_20px_-6px_rgba(0,0,0,0.4)]">
                {HERO_ECOSYSTEM_NODES[i]}
              </span>
            </div>
          );
        })}
      </div>

      {/* Mobile: versión simplificada — sin posicionamiento circular ni SVG */}
      <div className="flex flex-col items-center gap-5 lg:hidden">
        <BrandCore size={76} hasIsotype={hasIsotype} />
        <ul className="grid w-full grid-cols-2 gap-2.5" role="list">
          {HERO_ECOSYSTEM_NODES.map((node) => (
            <li
              key={node}
              className="flex items-center gap-2 rounded-[var(--radius-md)] border border-white/12 bg-navy-800 px-3 py-2.5 font-body text-xs font-semibold text-white"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" aria-hidden="true" />
              {node}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
