# Research and Benchmarks

## Estado

**IMPLEMENTADO.** El repositorio conserva el material de investigación en `references/` y su síntesis histórica en `DESIGN-BRIEF.md`.

## Evidencia disponible

La investigación almacenada contiene capturas completas, capturas por sección, estados de interacción, fuentes, tokens y análisis generados para:

- `references/mae/`
- `references/koldconvert/`
- `references/kernel/`

Cada referencia incluye un `DESIGN.md`, índices de capturas y material técnico auxiliar. Los archivos `CLAUDE.md` y `SKILL.md` incluidos dentro de esas carpetas son artefactos de la herramienta que recopiló las referencias; no son instrucciones aplicables a AI Click Solution.

## Distribución histórica de influencia

El brief aprobado asignó aproximadamente:

| Referencia | Peso histórico | Aportes estudiados |
|---|---:|---|
| MAE | 70% | Composición, jerarquía tipográfica, ritmo, cards, CTAs, tratamiento visual de métricas y bloques oscuros. |
| Koldconvert | 20% | Motion contenido, patrón orbital, interacción de foco/hover y cards. |
| Kernel | 10% conceptual | Idea de núcleo central y capacidades distribuidas. |

Estos porcentajes explican el proceso de diseño; no constituyen una medición matemática ni implican copia literal.

## Hallazgos incorporados

### IMPLEMENTADO

- Jerarquía B2B premium y alta claridad de lectura.
- Cuerpo mayormente blanco/marfil con bloques navy de alto impacto.
- CTAs primarios naranjas y CTAs secundarios de menor prioridad.
- Sistema de spacing basado en múltiplos de 4 px.
- Núcleo con capacidades conectadas, reinterpretado con identidad AI Click.
- Motion deliberado y lento, con reduced motion.
- Cards cualitativas en lugar de métricas comerciales no verificadas.
- SVG y CSS para el sistema orbital, sin dependencia 3D.

## Decisiones descartadas

### DECISIÓN REEMPLAZADA

- El análisis automático de MAE lo describía como un tema claro; la revisión visual histórica detectó un uso mucho más amplio de navy. La V1 adoptó una síntesis propia y no replicó ninguno de los dos extremos.
- Plus Jakarta Sans fue la display definida en el brief v1.1. La implementación final la reemplazó por Manrope.
- El brief inicial mencionaba una sección de casos. Fue eliminada y reemplazada temporalmente por “Oportunidades” y escenarios cualitativos.

### Decisiones explícitamente rechazadas

- Linear como fuente visual: participación declarada de 0%.
- Copia literal de textos, interfaces, logos, gráficos o mascotas.
- Mascota fotorrealista de Kernel.
- Paletas externas como identidad final.
- Estética crypto, gaming, cyberpunk o neón saturado.
- Three.js/WebGL para un efecto meramente decorativo.
- Motion expresivo generalizado o spring physics en cada componente.
- Border radius asimétrico característico de MAE.
- Métricas, resultados, testimonios o SLA no verificados.
- Dark mode y formulario embebido dentro del Hero.

## Limitaciones de la investigación

- Kernel solo aportó evidencia visual limitada; varias capturas reflejan un bloqueo 403.
- Parte del material fue generado por análisis automático y contiene contradicciones internas de tipografía o tema.
- No existe en el repositorio un informe de entrevistas con clientes, análisis competitivo comercial, investigación de palabras clave o pruebas de usuario.
- No hay evidencia de tests A/B, heatmaps, grabaciones de sesión o datos de campañas.

## Regla documental

Cuando una recomendación del benchmark o de `DESIGN-BRIEF.md` contradice el commit `fcef26a`, prevalece el código. La divergencia se registra como **DECISIÓN REEMPLAZADA**, no se corrige silenciosamente.

## Trabajo futuro

### PENDIENTE

- Investigación con usuarios y decisores reales.
- Benchmark de mensajes/ofertas y no solo de diseño.
- Línea base de conversión una vez publicado.
- Casos verificables y evidencia de resultados.
- Experimentación controlada sobre propuesta, CTA, orden de secciones y fricción del formulario.
