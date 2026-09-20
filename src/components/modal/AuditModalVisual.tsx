/**
 * Ilustración conceptual del modal (brief V1.1 punto 7): Lead → Asistente inteligente
 * → CRM → Automatización → Oportunidad comercial. SVG/CSS propio con colores
 * corporativos — sin foto stock, sin robot humanoide genérico, sin estética
 * crypto/cyberpunk. Reutiliza el mismo lenguaje de íconos que el resto del sitio.
 *
 * Desktop (lg+): columna vertical de ~38% del modal.
 * Mobile/tablet: franja horizontal compacta superior — el formulario sigue siendo
 * el protagonista.
 */
const FLOW_NODES = [
  {
    label: "Lead",
    path: "M12 12a4 4 0 100-8 4 4 0 000 8zm-7 8a7 7 0 0114 0",
  },
  {
    label: "Asistente IA",
    path: "M12 3l1.8 4.6L18 9l-4.2 1.4L12 15l-1.8-4.6L6 9l4.2-1.4L12 3zM19 15l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8.8-2z",
  },
  {
    label: "CRM",
    path: "M12 3L2 9l10 6 10-6-10-6zM2 15l10 6 10-6",
  },
  {
    label: "Automatización",
    path: "M12 2v4m0 12v4m10-10h-4M6 12H2m15.5-6.5l-2.8 2.8M9.3 9.3L6.5 6.5m11 11l-2.8-2.8M9.3 14.7l-2.8 2.8",
  },
  {
    label: "Oportunidad comercial",
    path: "M5 3v18M5 4h11l-2 4 2 4H5",
  },
] as const;

export function AuditModalVisual() {
  return (
    <>
      {/* Desktop: columna vertical ~38% */}
      <div
        className="relative hidden w-[38%] shrink-0 flex-col justify-center gap-7 overflow-hidden bg-gradient-to-b from-navy-900 to-navy-800 px-7 py-10 lg:flex"
        aria-hidden="true"
      >
        <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-blue-600/20 blur-[80px]" />
        <div className="pointer-events-none absolute -bottom-16 -right-10 h-56 w-56 rounded-full bg-orange-500/15 blur-[80px]" />

        <div className="relative">
          <span className="absolute left-[19px] top-2 h-[calc(100%-16px)] w-px bg-gradient-to-b from-blue-600 to-orange-500 opacity-50" />
          <ul className="relative flex flex-col gap-6">
            {FLOW_NODES.map((node, i) => {
              const isLast = i === FLOW_NODES.length - 1;
              return (
                <li key={node.label} className="flex items-center gap-3.5">
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border ${
                      isLast ? "border-orange-500/50 bg-orange-500/15 text-orange-500" : "border-white/15 bg-white/8 text-blue-300"
                    }`}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path
                        d={node.path}
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="font-body text-[13px] font-medium leading-tight text-white/85">
                    {node.label}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Mobile / tablet: franja horizontal compacta */}
      <div
        className="relative flex flex-col items-center gap-2 overflow-hidden bg-gradient-to-r from-navy-900 to-navy-800 px-5 py-4 lg:hidden"
        aria-hidden="true"
      >
        <div className="relative flex w-full max-w-[280px] items-center justify-between">
          <span className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-blue-600 to-orange-500 opacity-50" />
          {FLOW_NODES.map((node, i) => {
            const isLast = i === FLOW_NODES.length - 1;
            return (
              <span
                key={node.label}
                className={`relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full border ${
                  isLast ? "border-orange-500/50 bg-orange-500/15 text-orange-500" : "border-white/15 bg-navy-900 text-blue-300"
                }`}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                  <path d={node.path} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            );
          })}
        </div>
        <p className="font-body text-[11px] font-medium leading-tight text-white/70">
          De lead a oportunidad, con IA y automatización.
        </p>
      </div>
    </>
  );
}
