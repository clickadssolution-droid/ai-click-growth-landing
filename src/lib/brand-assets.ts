/**
 * Detección server-side de los assets oficiales de marca (brief V1.2 punto 1).
 *
 * Server-only (usa `fs`) — SOLO se importa desde Server Components de nivel de
 * página (page.tsx / gracias/page.tsx), nunca desde BrandMark.tsx, BrandCore.tsx
 * ni desde ningún componente "use client": si un componente cliente lo importa
 * (aunque sea indirectamente), Turbopack intenta empaquetar `node:fs` para el
 * navegador y el build falla (ya pasó una vez en V1.1). Las rutas (strings
 * planos, sin `fs`) viven en `lib/constants.ts`.
 */
import fs from "node:fs";
import path from "node:path";
import { BRAND_ASSET_PATHS } from "./constants";

function existsInPublic(publicPath: string): boolean {
  return fs.existsSync(path.join(process.cwd(), "public", publicPath.replace(/^\//, "")));
}

export const hasLogoColor = existsInPublic(BRAND_ASSET_PATHS.logoColor);
export const hasLogoWhite = existsInPublic(BRAND_ASSET_PATHS.logoWhite);
export const hasIsotype = existsInPublic(BRAND_ASSET_PATHS.isotype);
