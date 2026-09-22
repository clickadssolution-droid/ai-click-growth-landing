# ADR-005: Motion con SVG y CSS, sin WebGL

- Estado: **ACEPTADA / IMPLEMENTADO**
- Baseline: `fcef26a`

## Contexto

El concepto visual requiere nodos conectados y movimiento, pero la prioridad comercial es una landing rápida y confiable.

## Decisión

Construir líneas y nodos con SVG/HTML, posiciones calculadas una vez y animaciones CSS. Reservar la órbita completa para Growth Ecosystem; usar floating en Hero. Respetar `prefers-reduced-motion`.

## Consecuencias

- No se añade Three.js ni render loop por frame.
- Menor peso y complejidad.
- El orbital se sustituye por acordeón bajo `lg`.
- Hover/focus pausa la rotación y muestra contexto.

## DECISIÓN REEMPLAZADA

El patrón Three.js observado en Koldconvert se utilizó como referencia conceptual, no como implementación.

## PENDIENTE

Validación final de rendimiento, accesibilidad y regresión visual en dispositivos reales.
