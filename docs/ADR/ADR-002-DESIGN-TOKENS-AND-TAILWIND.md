# ADR-002: Tokens de diseño con Tailwind CSS v4

- Estado: **ACEPTADA / IMPLEMENTADO**
- Baseline: `fcef26a`

## Contexto

La landing necesita identidad consistente, respuesta mobile-first y una capa visual ligera sin introducir un kit externo.

## Decisión

Definir colores, fuentes, radios, container y easing en `globals.css` mediante `@theme`, y componer componentes con utilidades Tailwind v4. Usar Manrope, Inter y JetBrains Mono mediante `next/font`.

## Consecuencias

- No se añade librería de componentes.
- Los tokens centrales cubren identidad y patrones principales.
- Los breakpoints reales son los defaults de Tailwind; el código usa principalmente `sm` y `lg`.
- Algunos valores específicos permanecen como utilidades arbitrarias.

## DECISIÓN REEMPLAZADA

Plus Jakarta Sans y la tabla conceptual de breakpoints del brief fueron reemplazadas por Manrope y la implementación Tailwind efectiva.

## DEUDA TÉCNICA

No hay Storybook, catálogo visual ni regresión visual automatizada.
