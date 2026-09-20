import Image from "next/image";
import { BRAND_ASSET_ASPECT, BRAND_ASSET_PATHS } from "@/lib/constants";

/**
 * Marca de AI Click Solution (brief V1.2 punto 1: "ASSETS OFICIALES DE MARCA").
 *
 * - `tone="light"` (Header, fondos claros) → lockup a color transparente.
 * - `tone="dark"` (Footer, bloques navy) → lockup blanco transparente. Ambos
 *   assets ya vienen con fondo transparente real, así que no se envuelve nada
 *   en tarjetas ni fondos blancos artificiales (eso solo era necesario en V1.1,
 *   con el PNG opaco provisional — ya no aplica).
 *
 * Si el asset correspondiente no existe todavía, cae al wordmark de texto
 * provisional. Este es el ÚNICO lugar que debe tocarse cuando cambie cualquiera
 * de los dos lockups — nada más en el árbol de componentes necesita cambiar.
 *
 * El ancho se controla desde el caller vía `className` (ej. `"w-28"`); el alto
 * se deriva automáticamente de la proporción real del asset (`aspect-ratio`),
 * para no distorsionarlo y evitar layout shift.
 */
interface BrandMarkProps {
  tone?: "light" | "dark";
  hasLogoColor?: boolean;
  hasLogoWhite?: boolean;
  priority?: boolean;
  className?: string;
}

export function BrandMark({
  tone = "light",
  hasLogoColor = false,
  hasLogoWhite = false,
  priority = false,
  className = "w-24",
}: BrandMarkProps) {
  const isDark = tone === "dark";
  const hasAsset = isDark ? hasLogoWhite : hasLogoColor;

  if (hasAsset) {
    const src = isDark ? BRAND_ASSET_PATHS.logoWhite : BRAND_ASSET_PATHS.logoColor;
    const aspect = isDark ? BRAND_ASSET_ASPECT.logoWhite : BRAND_ASSET_ASPECT.logoColor;

    return (
      <span className={`relative block ${className}`} style={{ aspectRatio: aspect }}>
        <Image
          src={src}
          alt="AI Click Solution"
          fill
          sizes="140px"
          className="object-contain"
          priority={priority}
        />
      </span>
    );
  }

  return (
    <span
      className={`font-display font-extrabold leading-none tracking-tight ${
        isDark ? "text-white" : "text-navy-900"
      } ${className}`}
    >
      <span className="block text-lg sm:text-xl">AI CLICK</span>
      <span
        className={`block text-[0.55em] font-semibold tracking-[0.3em] ${
          isDark ? "text-orange-500" : "text-blue-600"
        }`}
      >
        SOLUTION
      </span>
    </span>
  );
}
