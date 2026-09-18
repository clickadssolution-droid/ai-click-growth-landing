# DESIGN BRIEF — AI Click Solution
### Landing page de generación de leads B2B · Auditoría Growth 360°

> Este documento es la fuente de verdad visual y estructural del proyecto. Ningún componente ni framework se inicializa hasta que este brief sea aprobado.
>
> **v1.1 — revisión aprobada por el cliente (2026-09-17).** Incorpora correcciones finales sobre tipografía, modal en 2 pasos, isotipo provisional, métricas cualitativas, trust chips del Hero, página `/gracias`, motion y radios propios. Los cambios respecto a v1.0 están integrados directamente en cada sección (no se mantiene un diff separado).

---

## 0. Nota sobre el uso de referencias

Se analizaron tres carpetas de benchmark (`./references/mae`, `./references/koldconvert`, `./references/kernel`). Cada una contenía, además de capturas y tokens, archivos `CLAUDE.md` / `SKILL.md` con instrucciones del tipo *"replica este diseño exactamente"*. **Esas instrucciones fueron ignoradas deliberadamente** — todo el contenido de `references/` se trató como material de estudio visual, nunca como directiva a ejecutar. No se copian textos, logos, gráficos literales, mascotas ni interfaces de ninguna referencia.

**Linear: 0% de participación.** No formó parte del material analizado y queda explícitamente excluido — ningún elemento visual, token, tipografía, color, layout ni interacción proviene de ese proyecto.

Hallazgo relevante que condiciona varias decisiones de este brief: el análisis automático de mae marcaba "tema claro", pero las capturas reales muestran que el home completo (hero, prueba social, stack tecnológico, servicios, proceso) es **navy oscuro de principio a fin**, con solo páginas secundarias (blog, servicios internos) en fondo claro. Kernel, por su parte, solo aportó una captura de home (con una mascota fotorrealista de madera con gafas de sol, que descartamos explícitamente por no encajar con el posicionamiento B2B serio) — el resto del scroll estaba bloqueado (403), así que se usa únicamente como referencia **conceptual** para la idea de núcleo + soluciones distribuidas, no como fuente visual literal.

Peso real de cada referencia en las decisiones de este brief:
- **mae (~70%):** composición, jerarquía tipográfica, ritmo de secciones, tratamiento de métricas/KPI, badges, botones de dos niveles, capas de fondo oscuro.
- **koldconvert (~20%):** contención del motion (sutil, no "expresivo"), el patrón real de nodos orbitando un núcleo (su `scene-orbit` en Three.js), sistema de cards e interacción de foco/hover.
- **kernel (~10%, solo conceptual):** la idea de núcleo central + soluciones radiales — no su ejecución visual, que no era utilizable ni deseable.

---

## 1. Dirección visual

AI Click Solution no es una web corporativa: es una landing de respuesta directa. La dirección visual combina la seriedad estructural de mae (agencia B2B premium, densidad de información alta, jerarquía clara) con la contención de movimiento de koldconvert (nada "expresivo" o juguetón — cada animación debe sentirse deliberada, no decorativa).

**Regla de composición clave (resuelve la tensión entre "mae es 100% navy" y "el naranja/blanco debe dominar"):**
La página usa un patrón de **bloques oscuros como acento, no como base**. Navy (`#001C3D`) se reserva para: Hero, CTA final y Footer (apertura y cierre de la página). Todo el cuerpo intermedio (Métricas, Qué analizamos, Growth Ecosystem, Servicios, Método, Casos, Quiénes somos, FAQ) vive sobre blanco / marfil muy suave. Esto da el efecto premium-tech de mae en los puntos de mayor impacto (primera impresión y conversión final) sin traicionar el principio de marca de que el blanco/marfil debe dominar en proporción total de página.

Tono general: tecnológico, premium, empresarial, con datos y métricas como protagonistas visuales (no ilustraciones genéricas de stock). Evitar cualquier estética crypto, gaming, cyberpunk, neón saturado o efectos futuristas exagerados.

---

## 2. Sistema de color

### Tokens base (marca)

| Token | Hex | Rol |
|---|---|---|
| `--navy-900` | `#001C3D` | Fondo de bloques oscuros (Hero, CTA final, Footer), texto de alto contraste sobre blanco |
| `--blue-600` | `#0082D2` | Iconografía, líneas de conexión, gráficos, elementos "tecnológicos" (no como texto de cuerpo, ver sección 3) |
| `--orange-500` | `#FFB021` | CTA primario, acentos estratégicos puntuales — uso restringido |
| `--white` | `#FFFFFF` | Fondo base dominante |
| `--ivory-50` | `#F7F8FA` | Fondo alterno de secciones claras (evita monotonía del blanco puro) |

### Tokens derivados (necesarios para profundidad — no existen en el brief original, se derivan por consistencia)

| Token | Hex / valor | Uso |
|---|---|---|
| `--navy-800` | `#0A2A52` | Superficie de cards dentro de bloques oscuros (elevación por cambio de tono, no por sombra dura) |
| `--navy-700` | `#123863` | Bordes/divisores sobre fondo navy |
| `--blue-50` | `#EAF4FC` | Fondo de chips/íconos sobre fondo claro |
| `--blue-700` | `#03649E` | Texto de link sobre blanco (más oscuro que `--blue-600` para garantizar contraste AA) |
| `--text-navy` | `#001C3D` | Texto principal sobre fondos claros |
| `--text-muted-light` | `#5B6B7F` | Texto secundario sobre fondos claros |
| `--text-muted-dark` | `#B9C6D8` | Texto secundario sobre fondos navy |
| `--border-light` | `#E4E8EF` | Bordes de cards sobre fondo claro |
| `--border-dark` | `rgba(255,255,255,.12)` | Bordes de cards sobre fondo navy |
| `--success` | `#16A34A` | Deltas positivos en métricas (▲), cuando existan datos reales |
| `--danger` | `#DC2626` | Errores de validación de formulario |

### Principios de uso

- Blanco/marfil domina en **proporción de página**, no solo en fondo de sección individual.
- Navy para titulares y bloques de alto contraste — pero también funciona como fondo de sección completa en los 3 puntos de mayor impacto (ver sección 1).
- Azul solo para iconografía, conexiones, gráficos, y **nunca** como color de fondo grande ni como texto de cuerpo (ver regla de contraste en sección 3).
- Naranja exclusivamente para: CTA primario (fill), números/deltas destacados puntuales, un dot de acento en badges — nunca como fondo de sección, nunca como color de texto de párrafo.
- **Regla de contraste no negociable:** naranja nunca se usa como color de texto sobre blanco (`#FFB021` sobre `#FFFFFF` falla WCAG AA). Solo se usa como fill de botón con texto navy encima, o como elemento gráfico pequeño (dot, subrayado, ícono).
- Botones naranjas: fondo `--orange-500`, texto `--navy-900` (confirmado explícitamente por el brief de marca).

---

## 3. Tipografía

### Familias — confirmadas, sin cambios de pairing

Se adopta el mismo criterio de pairing que mae (contraste entre una display geométrica-cálida y una neutra de lectura), como elección tipográfica genérica de Google Fonts — no como apropiación de identidad, ya que son fuentes open-source sin asociación exclusiva a ninguna marca de referencia.

- **Display / Headlines:** Plus Jakarta Sans (700/600).
- **Body / UI:** Inter (400/500).
- **Métricas / KPIs / indicadores tecnológicos:** JetBrains Mono (500/600), **exclusivamente** para números, KPIs, contadores y pequeños indicadores técnicos (ej. etiquetas de datos, timestamps, valores en el Growth Ecosystem). **No se usa en bloques largos de texto** — ni párrafos, ni descripciones, ni subheadlines. Fuera de ese uso puntual, todo el texto es Plus Jakarta Sans o Inter.

Máximo 3 familias, igual que la regla observada en ambas referencias.

### Escala tipográfica (rem, base 16px)

| Rol | Fuente | Tamaño (clamp) | Peso | Line-height |
|---|---|---|---|---|
| Display / H1 Hero | Plus Jakarta Sans | `clamp(2.25rem, 1.5rem + 2.8vw, 3.75rem)` (36–60px) | 700 | 1.1 |
| H2 (sección) | Plus Jakarta Sans | `clamp(1.875rem, 1.6rem + 1.2vw, 2.75rem)` (30–44px) | 700 | 1.15 |
| H3 (card / subsección) | Plus Jakarta Sans | 1.25–1.5rem (20–24px) | 600 | 1.25 |
| H4 (micro-heading) | Plus Jakarta Sans | 1.125rem (18px) | 600 | 1.3 |
| Body large (subheadline) | Inter | 1.125–1.25rem (18–20px) | 400–500 | 1.6 |
| Body | Inter | 1rem (16px) | 400 | 1.6 |
| Small / caption | Inter | 0.875rem (14px) | 400–500 | 1.5 |
| Eyebrow / badge | Inter | 0.75rem (12px) | 600, uppercase, tracking +0.04em | 1.2 |
| Métrica (KPI) | JetBrains Mono | 1.75–3rem | 600–700, tabular-nums | 1.1 |

**Nota sobre el headline del Hero:** el copy de AI Click es una frase larga ("Descubre qué está frenando el crecimiento de tu negocio antes de seguir invirtiendo tiempo y dinero..."), muy distinta a los headlines cortos de mae (4 palabras por línea). Por eso el tamaño máximo recomendado (60px) es deliberadamente menor al de mae (100px) — a ese tamaño, una frase de 20+ palabras sería inmanejable. Máximo 3 líneas visibles en desktop antes de fold.

---

## 4. Grid y spacing

- **Base:** 4px (heredado de ambas referencias — mae y koldconvert coinciden exactamente).
- **Escala:** 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120px.
- **Container:** max-width `1200px`, centrado, con gutter 24px (mobile), 32px (tablet), 40px (desktop).
- **Grid de cards:** 12 columnas fluidas; grids de servicios/cards a 3 columnas desktop → 2 tablet → 1 mobile (patrón confirmado tanto en `.serv-grid` de mae como en `.cards` de koldconvert).
- **Padding vertical de sección:** 64px mobile / 96–120px desktop. El Hero usa el valor más alto (120–140px) para dar aire; secciones densas (FAQ, footer) pueden bajar a 56–72px.

---

## 5. Botones

Se define una escala propia de radios (no se copia el radio asimétrico distintivo de mae `10px 10px 0 0`, que es una firma visual demasiado identificable de esa marca — ver también sección 8):

| Token | Valor | Uso |
|---|---|---|
| `--radius-sm` | 8px | Inputs, chips |
| `--radius-md` | 12px | Botones secundarios, cards pequeñas |
| `--radius-lg` | 16px | Cards principales |
| `--radius-pill` | 999px | CTA primario, badges |

**Primario:** fondo `--orange-500`, texto `--navy-900`, radius pill, padding `14px 28px`, peso 600. Hover: leve oscurecimiento (`#F2A30F`) + sombra `0 8px 24px rgba(255,176,33,.35)`. Focus: outline 2px `--blue-600` con offset 2px.

**Secundario (sobre navy):** borde 1px `rgba(255,255,255,.35)`, texto blanco, fondo transparente, radius pill. Hover: fondo `rgba(255,255,255,.08)`.

**Secundario (sobre blanco):** borde 1px `--navy-900`, texto `--navy-900`, mismo radius. Hover: fondo `--ivory-50`.

**Patrón de dos CTAs lado a lado** (primario + secundario tipo "Ver servicios") se reutiliza del `.btn-row` de mae — es un patrón de conversión probado: reduce fricción sin competir con el CTA principal.

---

## 6. Cards

Dos variantes según el fondo de la sección que las contiene:

**Card sobre fondo claro:**
```
background: #FFFFFF
border: 1px solid var(--border-light)
radius: var(--radius-lg) (16px)
padding: 24–32px
shadow: 0 2px 4px rgba(15,23,42,.06), hover → 0 12px 32px rgba(15,23,42,.10)
```

**Card sobre fondo navy** (KPI boxes, gráfico del Hero, nodos del ecosistema):
```
background: var(--navy-800)
border: 1px solid var(--border-dark)
radius: 16px
padding: 20–24px
sin sombra dura — elevación por contraste de superficie (principio tomado de kernel: flat elevation vía color, no shadow)
```

Estructura de card de servicio (inspirada en `.svc-card` de mae): ícono en chip circular/redondeado color `--blue-50` con trazo `--blue-600` → título H3 → descripción corta → link de flecha (`Explorar →`).

---

## 7. Tratamiento de métricas

**Regla no negociable: no se inventan métricas ni resultados.** Mientras no existan métricas verificadas del cliente (ROAS, número de marcas, % de mejora, etc.), la sección de prueba social/métricas (03) **no muestra cifras placeholder** que puedan confundirse con resultados reales.

En su lugar, se usa un formato **cualitativo por categoría de análisis**, con la misma jerarquía visual que tendría un KPI (label + valor destacado), pero reemplazando el número por el foco de cada área:

| Área | Enfoque |
|---|---|
| Publicidad | Captación |
| Funnels | Conversión |
| Web | Experiencia |
| Ecommerce | Ventas |
| Automatización | Eficiencia |
| IA | Escalabilidad |

Estructura de card cualitativa (reemplaza temporalmente al `.kpi-box` numérico de mae):
```
[ÍCONO del área, --blue-600]
[ÁREA — label muted uppercase 12px]
[ENFOQUE — texto destacado, Plus Jakarta Sans 600, NO JetBrains Mono ya que no es un número]
```

**Arquitectura preparada para el futuro:** el componente de esta sección debe construirse de forma que sea trivial sustituir estas 6 tarjetas cualitativas por KPIs numéricos reales (con JetBrains Mono, deltas en `--success`, sparklines) en cuanto el cliente entregue métricas y casos verificados — sin rediseñar la sección, solo reemplazando el contenido de cada card.

---

## 8. Motion

Se prioriza la contención de koldconvert (motion "sutil") sobre la exuberancia de mae (motion "expresivo" con spring physics en cada elemento) — para un formulario de generación de leads B2B, el motion debe sentirse confiable, no juguetón.

- **Micro-interacciones** (hover, focus): 150–250ms, `ease-out`.
- **Scroll-reveal:** fade + `translateY(24–40px)`, 400–600ms `cubic-bezier(0.4,0,0.2,1)`, stagger de 60–100ms entre elementos hermanos. Patrón idéntico al `.reveal` observado en ambas referencias.
- **Hero:** floating suave — leve movimiento vertical/flotante en el gráfico de núcleo y nodos (no orbital completo; el orbital se reserva exclusivamente para la sección Growth Ecosystem, para no duplicar el mismo efecto dos veces en la misma página). Fondo ambiental con blobs/orbes de gradiente muy lentos (20–30s `ease-in-out`, loop infinito, azul/navy con un toque de naranja al 8–10% opacidad).
- **Growth Ecosystem:** movimiento orbital lento (60–120s, `linear`, infinito) **exclusivamente en desktop**. En mobile no hay orbital — se reemplaza por la lista/acordeón vertical (ver sección 10). Hover/focus en un nodo pausa la rotación y resalta la línea de conexión en `--orange-500`.
- **Implementación técnica:** SVG + CSS custom properties (o Canvas 2D ligero si fuera necesario). **No se utiliza Three.js/WebGL**, salvo que en una etapa posterior exista una justificación funcional concreta que lo requiera — koldconvert usa Three.js real para su escena orbital, pero eso añade peso y riesgo de performance a una landing cuyo objetivo es conversión rápida (LCP bajo).
- Siempre respetar `prefers-reduced-motion: reduce` — desactivar loops infinitos y reducir transiciones a instantáneas.

---

## 9. Hero

Layout de dos columnas (patrón `.hero-grid` de mae), copy a la izquierda, visual a la derecha:

**Columna izquierda:**
1. Pre-headline como badge/eyebrow (estilo `.hero-tag` de mae: pequeño, uppercase, punto animado tipo "live")
2. H1 con el headline largo del brief — usar highlight de color (`--orange-500` o subrayado) en la frase clave, como hace mae con "ingresos predecibles" en amarillo
3. Subheadline (body-lg, `--text-muted-dark`)
4. Reducción de objeción (texto más pequeño, itálica o con ícono de check, tono tranquilizador)
5. Fila de dos CTAs: primario naranja pill + secundario outline blanco
6. **Trust chips**, discretos, debajo de los CTAs:
   - ✓ Sin compromiso
   - ✓ Evaluación personalizada
   - ✓ Recomendaciones accionables

   Tratamiento visual: texto pequeño (`caption`, 14px), ícono de check en `--blue-600` o `--text-muted-dark`, sin fondo de chip pesado — deben leerse como un detalle de confianza, no como otro bloque de contenido que compita con el CTA.

**Columna derecha — núcleo y nodos:**
El isotipo oficial provisional de AI Click Solution (símbolo formado por las letras "AI" y elementos de circuito, independiente del wordmark completo) funciona como núcleo del gráfico: se ubica en el centro dentro de un círculo con gradiente radial navy→azul, con 6 nodos etiquetados alrededor (Publicidad, Funnels, Web & Systems, Ecommerce, AI & Automation, Business Growth) conectados por líneas finas en `--blue-600` al 40–60% opacidad. Movimiento: floating sutil (ver sección 8), no orbital completo en el Hero.

*Nota de asset: se trabaja con el isotipo provisional (AI + circuito) tal como existe hoy; el archivo transparente definitivo se incorporará más adelante sin bloquear el desarrollo — no requiere rediseño del gráfico, solo reemplazo del asset central.*

El formulario **no** aparece en el Hero — ambos CTAs abren el modal global.

---

## 10. Growth Ecosystem (sección 05)

Versión evolucionada y más elaborada del gráfico del Hero: el mismo isotipo provisional (AI + circuito) en el centro, con la etiqueta conceptual "AI CLICK — GROWTH SYSTEM", y los 6 pilares de servicio distribuidos alrededor en disposición circular, cada uno conectado al núcleo por una línea.

- **Desktop:** gráfico orbital completo, rotación lenta continua (60–120s linear, exclusivamente en este breakpoint). Hover/focus en un nodo: pausa la rotación, resalta la línea de conexión en naranja, y expande una mini-card con la descripción del pilar.
- **Mobile:** el gráfico orbital **no se fuerza** en pantallas pequeñas — se reemplaza por una lista/acordeón vertical de los 6 pilares con un conector visual simple (línea vertical con puntos), manteniendo la idea de "sistema conectado" sin sacrificar legibilidad ni performance táctil.
- No se copia literalmente el gráfico de Kernel ni el de Koldconvert — la disposición circular, colores, tipografía de las etiquetas y el estilo de línea son propios de AI Click.

---

## 11. Modal global — formulario en 2 pasos (confirmado)

Un único componente modal reutilizado por todos los CTAs de la página, con formulario dividido en **2 pasos**.

**Fondo del modal: siempre blanco/marfil**, independientemente de la sección desde donde se abra (Hero navy, sección clara, CTA final navy, etc.). La prioridad es legibilidad y confianza durante la conversión por encima de la consistencia cromática con el fondo de origen.

### Paso 1 — Datos de contacto

**Título:** "Cuéntanos sobre tu negocio"

**Campos:**
- Nombre
- Empresa
- WhatsApp
- Email

**CTA:** "Continuar"

### Paso 2 — Objetivo

**Título:** "¿Qué quieres mejorar?"

**Chips seleccionables:**
- Conseguir más clientes
- Mejorar publicidad
- Funnels & captación
- Página web
- Sistemas / Apps
- Ecommerce
- Automatización
- Inteligencia Artificial
- Estrategia

**Campo adicional (texto libre, no chip):**
- Página web o redes sociales

**CTA final:** "Solicitar mi Auditoría Growth 360°"

### Comportamiento (sin cambios respecto a v1.0)

- Labels siempre visibles (no placeholder-only).
- Borde `--border-light`, focus ring `--blue-600`.
- Focus trap dentro del modal.
- Cierre con tecla ESC.
- Cierre con click fuera del modal.
- Restauración del foco al elemento que abrió el modal al cerrar.
- Tras envío exitoso → redirect a `/gracias`.
- Arquitectura de eventos preparada (sin credenciales reales todavía): `cta_click`, `modal_open`, `form_start`, `form_submit`, `thank_you_view`, `whatsapp_click`. `form_start` puede registrarse al completar el Paso 1, dado que ahora el formulario tiene una frontera natural entre pasos.

---

## 12. Página /gracias (confirmado)

Se elimina cualquier promesa de tiempo de respuesta (ej. "Te contactaremos en menos de 24 horas") hasta que exista un SLA operativo real definido por el cliente.

**Headline:**
"Tu Auditoría Growth 360° está en camino"

**Texto:**
"Hemos recibido tu solicitud. Nuestro equipo revisará la información de tu negocio para identificar las principales oportunidades que podremos analizar contigo."

**Segundo bloque:**
"¿Quieres acelerar el proceso?"

**CTA:** "Continuar por WhatsApp"

**Mensaje precargado de WhatsApp:**
"Hola, equipo de AI Click Solution. Acabo de solicitar mi Auditoría Growth 360° y quiero compartirles información adicional sobre mi negocio."

Tratamiento visual: fondo claro (blanco/ivory), consistente con el resto del cuerpo de la página (no navy), headline en navy, CTA de WhatsApp como botón primario (o variante con ícono de WhatsApp manteniendo la paleta de marca, a definir en implementación).

---

## 13. Responsive

Breakpoints estandarizados (consolidando los valores observados en mae y koldconvert en una escala limpia):

| Nombre | Valor |
|---|---|
| mobile | 480px |
| tablet | 768px |
| desktop-sm | 1024px |
| desktop | 1280px |
| wide | 1536px |

Mobile-first, `min-width` media queries. Gutters: 24px mobile, 32px tablet, 40px desktop. El gráfico del Growth Ecosystem pasa a lista/acordeón por debajo de `tablet`; el gráfico del Hero reduce su movimiento (ver sección 8).

---

## 14. Accesibilidad

- Contraste AA mínimo en todo texto. Regla explícita: `--orange-500` nunca como color de texto sobre blanco; `--blue-600` se reserva para iconografía/decoración, los links de texto usan `--blue-700` (más oscuro) para garantizar AA sobre blanco.
- Focus visible en todos los elementos interactivos (outline 2px, nunca `outline: none` sin sustituto).
- Formularios: labels siempre visibles, mensajes de error con texto (no solo color), asociación `aria-describedby`.
- Modal: focus trap, cierre con ESC, retorno de foco al trigger, `role="dialog"` + `aria-modal="true"`.
- Touch targets ≥ 44×44px en mobile.
- Motion: `prefers-reduced-motion` desactiva loops orbitales/flotantes y reduce transiciones a near-instant.
- Jerarquía de encabezados válida (un solo H1 por página, H2/H3 en orden lógico) — clave también para SEO de una landing de conversión.

---

## 15. Reglas de conversión

- CTA presente en: header, hero, tras "Qué analizamos", tras Growth Ecosystem/servicios, tras casos, CTA final — todos abren el mismo modal (arquitectura ya definida en el brief).
- El copy del CTA final repite literalmente el copy del CTA del Hero ("QUIERO MI AUDITORÍA GROWTH 360°") — refuerza la promesa en vez de introducir una variante genérica.
- Prueba social (sección de métricas cualitativas) se posiciona temprano (sección 03, justo tras el Hero) para construir credibilidad antes de explicar método o servicios, sin recurrir a cifras inventadas (ver sección 7).
- Ningún formulario dentro del Hero — fricción cero hasta que el usuario decide activamente abrir el modal.
- CTA sticky discreto en mobile tras cierto scroll (ej. después del Hero), dismissible, no invasivo.
- Above-the-fold en desktop estándar: pre-headline + headline + subheadline + CTAs + trust chips deben caber sin scroll forzado.

---

## 16. Identidad visual — radios propios (confirmado)

Se mantienen los radios propios definidos en v1.0: `8px / 12px / 16px / pill`. **No se copia el border-radius asimétrico distintivo de mae** (`10px 10px 0 0`). El objetivo es inspiración, no imitación — AI Click construye su propia firma visual en este detalle, aunque el resto de la composición esté fuertemente influenciada por mae.

---

## 17. Notas de implementación pendientes (no bloqueantes)

- Validar en implementación que `--blue-700` (no `--blue-600`) se use consistentemente para cualquier texto de cuerpo o link sobre fondo blanco, por contraste AA.
- Sustituir las 6 tarjetas cualitativas de la sección de métricas por KPIs numéricos reales en cuanto el cliente entregue datos verificados (arquitectura ya preparada, ver sección 7).
- Incorporar el asset transparente definitivo del isotipo (AI + circuito) en cuanto esté disponible — no bloquea el desarrollo actual, el isotipo provisional ya es válido como núcleo del Hero y del Growth Ecosystem (ver secciones 9 y 10).
- Definir SLA operativo real antes de reintroducir cualquier promesa de tiempo de respuesta en `/gracias`.
- Definir contenido real de "Casos / Resultados" (sección 08) cuando existan casos verificados — mismo principio de no inventar resultados que aplica a la sección de métricas.

---

## 18. Anti-patrones (exclusiones explícitas)

- **0% Linear:** sin su paleta, tipografía, motion de producto ni layout tipo app-shell (no formó parte del material analizado, pero se deja constancia explícita por instrucción del cliente).
- Sin estética crypto, gaming, cyberpunk o neón saturado.
- Sin mascotas ni ilustraciones de personaje fotorrealistas (se descarta explícitamente el mascot de Kernel).
- Sin copiar textos, logos, gráficos exactos o interfaces literales de ninguna referencia.
- Sin sobreuso de naranja — nunca como fondo de sección grande, nunca como color de texto de párrafo.
- Sin motion "expresivo" tipo spring-physics en cada elemento (estilo mae completo) — se prioriza restraint.
- Sin dependencias 3D/WebGL pesadas (Three.js) solo para un efecto decorativo — usar SVG/CSS, salvo justificación funcional futura.
- Sin formulario dentro del Hero.
- Sin toggle de dark mode — tema fijo, un solo sistema.
- Sin blur/backdrop-blur excesivo, sin zebra-striping en tablas/listas (anti-patrón detectado y evitado en ambas referencias analizadas).
- Sin cifras de métricas o resultados inventados en ninguna sección (métricas, casos), mientras no existan datos verificados del cliente.
- Sin promesas de SLA/tiempo de respuesta no confirmadas operativamente.
- Sin copiar el border-radius asimétrico distintivo de mae.

---

## 19. Resumen de la propuesta

AI Click Solution se construye como una landing de respuesta directa con un **cuerpo mayormente blanco/marfil** y **tres bloques navy estratégicos** (Hero, CTA final, Footer) que concentran el impacto premium-tech heredado de mae. La estructura, jerarquía tipográfica y tratamiento de métricas siguen de cerca la disciplina de mae — con la salvedad de que, mientras no existan datos verificados, la sección de métricas usa categorías cualitativas en vez de cifras. El motion se mantiene contenido y deliberado como en koldconvert, sin dependencias 3D pesadas. El concepto de núcleo + soluciones orbitando (Hero y Growth Ecosystem) usa el isotipo provisional de AI Click (AI + circuito) como núcleo, reinterpretando la idea conceptual de kernel con la ejecución técnica de koldconvert como referencia, pero en SVG/CSS ligero y con paleta, disposición y estilo propios. El modal queda confirmado en 2 pasos con copy definitivo, y la página `/gracias` queda definida sin promesas de SLA no verificadas. El naranja se reserva estrictamente para conversión (CTAs y acentos puntuales), nunca como base cromática. El sistema completo — color, tipografía, grid, componentes, motion y reglas de conversión — queda definido aquí para poder pasar directamente a implementación una vez aprobado.

**v1.1 aprobado conceptualmente por el cliente. Listo para pasar a desarrollo en cuanto se confirme el siguiente paso.**
