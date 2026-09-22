/**
 * Resuelve un anchor de sección (`#servicios`, `#top`, …) según la ruta actual.
 * En el home el anchor funciona como scroll in-page (`#servicios`); desde
 * cualquier otra ruta (ej. `/gracias`, que no tiene esas secciones) debe
 * regresar al home y saltar a la sección (`/#servicios`).
 *
 * Único punto de esta lógica — reutilizado por Header y Footer para no
 * duplicar la resolución de navegación entre páginas.
 */
export function resolveSectionHref(pathname: string, hash: string): string {
  if (!hash.startsWith("#")) return hash;
  return pathname === "/" ? hash : `/${hash}`;
}
