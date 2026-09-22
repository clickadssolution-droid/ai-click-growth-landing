# Development History

## Baseline oficial

La V1 fue cerrada en:

- commit `fcef26a445a4672ca1589170228e9a4ed4b06e72`;
- mensaje `feat: finalize AI Click Solution Growth Landing V1`;
- rama `main`;
- fecha 2026-09-21.

Al iniciar esta documentación, `HEAD` coincidía con el commit y el working tree estaba limpio.

## Historial Git relevante

| Commit | Fecha | Mensaje | Aporte |
|---|---|---|---|
| `09351d6` | 2026-09-17 | `chore: approve AI Click Solution design brief` | Brief, referencias y tooling de diseño. |
| `d793323` | 2026-09-20 | `chore: snapshot before project reorganization` | Implementación principal de Next.js y assets iniciales. |
| `6934909` | 2026-09-20 | `fix: update navigation after cases section removal` | Ajuste tras eliminar Casos. |
| `fcef26a` | 2026-09-21 | `feat: finalize AI Click Solution Growth Landing V1` | Perfil de fundador, iconos y ajustes finales de Header/About. |

No había tags ni remote Git configurado durante la inspección.

## Metodología evidenciada

1. Investigación de referencias visuales almacenada localmente.
2. Elaboración y aprobación conceptual de `DESIGN-BRIEF.md` v1.1.
3. Implementación componentizada con Next.js, TypeScript y Tailwind.
4. Revisiones iterativas descritas en comentarios como V1.2–V1.8.
5. Eliminación deliberada de Casos por falta de evidencia verificable.
6. Cierre formal de V1 en Git.
7. Documentación retrospectiva basada en el artefacto final.

## Herramientas con evidencia en repositorio

- Git.
- npm y package-lock.
- Next.js, React, TypeScript, Tailwind, PostCSS y ESLint.
- Claude Code: `CLAUDE.md`, `.claude/` y coautoría registrada en el commit V1.
- Impeccable configurado mediante hooks locales.
- Playwright CLI presente como skill/tooling, sin suite del producto.
- Material de benchmark generado por tooling de análisis de diseño.

No se atribuye ejecución efectiva a una herramienta solo por estar almacenada.

## Evolución de decisiones

### DECISIÓN REEMPLAZADA

- Plus Jakarta Sans → Manrope.
- Breakpoints conceptuales del brief → defaults reales de Tailwind usados por el código.
- Ambos CTAs del Hero al modal → primario al modal y secundario a “Qué analizamos”.
- Sección Casos → eliminada; Oportunidades/Experiencia aplicada como sustitución cualitativa temporal.
- Placeholder de equipo → perfil real de Carlos Peña.

## Estado al cierre

### IMPLEMENTADO

Frontend V1, funnel visual, modal, `/gracias`, adaptadores y baseline Git.

### PENDIENTE

GHL, tracking, WhatsApp real, deployment, legal/privacidad, QA final, casos y campañas.

### DEUDA TÉCNICA

- Divergencia del dominio previsto frente a metadata.
- Runtime Cowork incompatible.
- Sin remote/tag V1.
- Sin tests del producto.
- Confirmación simulada sin captura real.
