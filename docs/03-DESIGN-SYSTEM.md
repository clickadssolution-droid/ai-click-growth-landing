# Design System V1

## Fuente de verdad

**IMPLEMENTADO.** Los tokens reales viven en `src/app/globals.css`; la aplicación concreta sus usos mediante clases de Tailwind en los componentes. Este documento describe el commit `fcef26a`.

## Dirección visual

Landing B2B tecnológica, empresarial y orientada a conversión. Blanco y marfil dominan el recorrido; navy concentra el impacto en Hero, CTA final y Footer. El naranja se reserva para conversión y acentos. El azul identifica conexiones, iconografía y estados tecnológicos.

## Color

| Token real | Valor | Uso principal |
|---|---|---|
| `navy-950` | `#00172f` | Footer. |
| `navy-900` | `#001c3d` | Hero, CTA final, texto principal. |
| `navy-800` | `#0a2a52` | Superficies oscuras. |
| `navy-700` | `#123863` | Profundidad y bordes oscuros. |
| `blue-600` | `#0082d2` | Iconos, conexiones y decoración. |
| `blue-700` | `#03649e` | Texto/link sobre fondo claro. |
| `blue-50` | `#eaf4fc` | Fondos de iconos y acentos suaves. |
| `orange-500` | `#ffb021` | CTA primario y acentos. |
| `orange-600` | `#f2a30f` | Hover del CTA. |
| `ivory-50` | `#f7f8fa` | Alternancia de secciones. |
| `text-muted-light` | `#5b6b7f` | Texto secundario claro. |
| `text-muted-dark` | `#b9c6d8` | Texto secundario sobre navy. |
| `border-light` | `#e4e8ef` | Bordes en superficies claras. |
| `success` | `#16a34a` | Estado positivo reservado. |
| `danger` | `#dc2626` | Validación y error. |

## Tipografía

### IMPLEMENTADO

- Display: **Manrope**, pesos 600, 700 y 800.
- Body/UI: **Inter**, pesos 400, 500 y 600.
- Métricas: **JetBrains Mono**, pesos 500, 600 y 700.
- Carga mediante `next/font/google` con `display: swap`.
- H1 responsive con `clamp`, peso 800 y tracking ajustado en pantallas grandes.
- H2 reusable con rango aproximado 30–44 px.

### DECISIÓN REEMPLAZADA

Plus Jakarta Sans, definida en `DESIGN-BRIEF.md` v1.1, fue sustituida deliberadamente por Manrope. Comentarios del código registran que Sora y Space Grotesk también fueron evaluadas y descartadas.

## Radios y geometría

| Token | Valor | Uso |
|---|---:|---|
| `radius-sm` | 8 px | Inputs. |
| `radius-md` | 12 px | Elementos medianos. |
| `radius-lg` | 16 px | Cards y modal. |
| `radius-pill` | 999 px | Botones y chips. |

## Layout y responsive

### IMPLEMENTADO

- Container máximo: 1200 px.
- Gutters: 24 px base, 32 px desde `sm`, 40 px desde `lg`.
- Tailwind v4 sin breakpoints personalizados.
- Breakpoints relevantes disponibles por defecto: `sm` 640 px, `md` 768 px, `lg` 1024 px, `xl` 1280 px y `2xl` 1536 px.
- El código usa principalmente `sm` y `lg`.
- El Hero pasa a dos columnas y muestra el orbital completo desde `lg`.
- Growth Ecosystem usa órbita desde `lg`; por debajo muestra lista/acordeón.
- Cards y secciones reordenan columnas de forma mobile-first.
- CTA sticky solo se muestra por debajo de `lg`.

### DECISIÓN REEMPLAZADA

La tabla de breakpoints propuesta por el brief no fue convertida en tokens personalizados. La implementación Tailwind real es la referencia V1.

## Componentes visuales recurrentes

- Botón primario naranja con texto navy, lift y glow moderado.
- Botones secundarios outline para fondos claros u oscuros.
- Eyebrows pequeños en uppercase con punto de acento.
- Cards claras con borde, radio de 16 px y sombras suaves en hover.
- Cards oscuras elevadas mediante diferencia de superficie.
- Chips pill para selección y confianza.
- `SectionHeading`, `Container` y `Reveal` como patrones reutilizables.
- Iconografía SVG inline de trazo simple.

## Motion

### IMPLEMENTADO

- Scroll reveal con `IntersectionObserver`, opacidad y traslación vertical.
- Stagger definido por componente.
- Nodos flotantes y blobs ambientales en Hero.
- Órbita de 100 segundos en Growth Ecosystem.
- Pausa del orbital al hacer hover o focus.
- CTA del Hero con movimiento vertical sutil solo en desktop.
- `prefers-reduced-motion` reduce animaciones, transiciones y scroll suave.

No se usa Three.js, WebGL ni librería de animación.

## Accesibilidad

### IMPLEMENTADO

- Documento en español.
- Un H1 por ruta y estructura de headings basada en componentes.
- Focus visible global.
- Labels visibles y errores textuales asociados con `aria-describedby`.
- Modal con `role="dialog"`, `aria-modal`, Escape, click exterior y focus trap.
- Restauración de foco al CTA de origen.
- Chips con `aria-pressed`.
- Elementos decorativos con `aria-hidden`.
- Reduced motion.
- Botones de menú y cierre cercanos o iguales a 44 px.

### PENDIENTE

- Auditoría automatizada y manual WCAG final.
- Pruebas completas con teclado y lector de pantalla.
- Verificación de contraste sobre todos los estados reales.

## Assets

### IMPLEMENTADO

- Lockup color: `/public/brand/transparente_aiaiclick.png`.
- Lockup blanco: `/public/brand/blanco_transparente_aiclick.png`.
- Isotipo: `/public/brand/animado_transparente.png`.
- Fotografía: `/public/brand/carlos-pena-ceo.jpeg`.
- Favicon, icon y apple icon en `src/app/`.
- Detección server-side de assets y fallback tipográfico si faltan.

`VERSION1.png` y `ai-click-solution.png` permanecen en `public/brand`, pero no forman parte del flujo principal detectado.

## DEUDA TÉCNICA

- El sistema visual se expresa parcialmente mediante valores arbitrarios de Tailwind además de los tokens compartidos.
- No existe Storybook, catálogo visual ejecutable ni pruebas de regresión visual.
- El brief histórico no fue actualizado con todas las revisiones V1.2–V1.8 descritas en comentarios del código.
