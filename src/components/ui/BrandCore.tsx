import Image from "next/image";
import { BRAND_ASSET_ASPECT, BRAND_ASSET_PATHS } from "@/lib/constants";

/**
 * Núcleo visual de HeroGrowthVisual y GrowthEcosystem (brief V1.2 punto 2/3).
 *
 * Cuando el isotipo oficial existe, se renderiza tal cual vía next/image
 * (proporciones naturales, `object-contain`, sin recolor ni deformación) dentro
 * de un círculo con gradiente + glow — el gradiente/sombra es del CONTENEDOR,
 * nunca se aplica al asset en sí. El isotipo ocupa ~60% del diámetro del
 * círculo para dejar espacio interno de respiración. Si el asset no existe
 * todavía, cae al glifo "AI" de texto como placeholder.
 */
interface BrandCoreProps {
  size?: number;
  hasIsotype?: boolean;
  className?: string;
}

export function BrandCore({ size = 96, hasIsotype = false, className = "" }: BrandCoreProps) {
  const imageWidth = Math.round(size * 0.6);
  const imageHeight = Math.round(imageWidth / BRAND_ASSET_ASPECT.isotype);

  return (
    <div
      className={`relative flex items-center justify-center rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        background: "radial-gradient(circle at 32% 28%, #0082D2 0%, #001C3D 72%)",
        boxShadow: "0 0 0 1px rgba(255,255,255,0.12), 0 12px 40px -8px rgba(0,130,210,0.55)",
      }}
    >
      {hasIsotype ? (
        <span className="relative block" style={{ width: imageWidth, height: imageHeight }} aria-hidden="true">
          <Image
            src={BRAND_ASSET_PATHS.isotype}
            alt=""
            fill
            sizes={`${imageWidth}px`}
            className="object-contain"
          />
        </span>
      ) : (
        <span
          className="font-display font-extrabold text-white"
          style={{ fontSize: size * 0.34 }}
          aria-hidden="true"
        >
          AI
        </span>
      )}
      <span className="sr-only">AI Click Solution</span>
    </div>
  );
}
