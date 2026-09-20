import { TRUST_CHIPS } from "@/lib/constants";

/**
 * Trust chips discretos del Hero, debajo de los CTAs (brief sección "HERO").
 * V1.3 punto 8: tamaño y contraste reducidos para que no compitan con el CTA.
 */
export function TrustChips() {
  return (
    <ul className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-1.5" role="list">
      {TRUST_CHIPS.map((chip) => (
        <li
          key={chip}
          className="flex items-center gap-1.5 font-body text-xs text-text-muted-dark/70"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className="shrink-0 text-text-muted-dark/70"
          >
            <path
              d="M5 12.5l4.5 4.5L19 7"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {chip}
        </li>
      ))}
    </ul>
  );
}
