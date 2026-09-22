# ADR-001: Next.js App Router y límites servidor/cliente

- Estado: **ACEPTADA / IMPLEMENTADO**
- Baseline: `fcef26a`

## Contexto

La landing necesita SEO básico, imágenes optimizadas, fuentes, rutas `/` y `/gracias`, más interacción cliente localizada.

## Decisión

Usar Next.js 16 App Router. Mantener páginas y secciones como Server Components por defecto y marcar como cliente solo modal, formulario, contexto, navegación móvil, tracking y animaciones interactivas.

La comprobación de assets con `node:fs` queda limitada a `brand-assets.ts` y se transmite mediante props booleanas.

## Consecuencias

- Menor JavaScript cliente que una SPA completamente hidratada.
- Metadata, fuentes e imágenes integradas en el framework.
- Requiere respetar estrictamente el límite server/client.
- El runtime debe cumplir Node >=20.9.0.

## DEUDA TÉCNICA

No existen backend, middleware, headers de seguridad ni rutas legales. El runtime Cowork inspeccionado no satisface el requisito de Next.js.
