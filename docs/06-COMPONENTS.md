# Components Catalog V1

## Alcance

**IMPLEMENTADO.** La baseline contiene 30 componentes TSX. La tabla documenta responsabilidades reales; no incorpora componentes hipotéticos.

## About

| Componente | Responsabilidad | Estado |
|---|---|---|
| `FounderCard` | Fotografía, identidad, rol, tagline y bio de un fundador. Usa `next/image` y scroll reveal. | IMPLEMENTADO |

El contenido de fundadores está centralizado en `FOUNDERS`; agregar otro perfil no exige modificar el componente.

## Gracias

| Componente | Responsabilidad | Estado |
|---|---|---|
| `ThankYouViewTracker` | Dispara `thank_you_view` al montar `/gracias`. | IMPLEMENTADO |
| `WhatsappCta` | Construye el enlace `wa.me`, abre nueva pestaña y dispara `whatsapp_click`. | IMPLEMENTADO; WhatsApp real PENDIENTE |

## Layout

| Componente | Responsabilidad | Estado |
|---|---|---|
| `Header` | Marca, navegación desktop, menú móvil y CTA. | IMPLEMENTADO |
| `Footer` | Marca, servicios, compañía, legal, redes y copyright. | IMPLEMENTADO; enlaces reales PENDIENTES |
| `StickyMobileCTA` | CTA fijo tras superar el Hero; puede descartarse. | IMPLEMENTADO |

## Modal y formulario

| Componente | Responsabilidad | Estado |
|---|---|---|
| `AuditModal` | Overlay global, diálogo, scroll lock, cierre y composición responsive. | IMPLEMENTADO |
| `AuditForm` | Estado y flujo de dos pasos, validación, tracking, submit y redirect. | IMPLEMENTADO; submit real PENDIENTE |
| `AuditModalVisual` | Diagrama Lead → Asistente IA → CRM → Automatización → Oportunidad. | IMPLEMENTADO |
| `ChipSelect` | Multi-select accesible mediante botones con `aria-pressed`. | IMPLEMENTADO |
| `FormField` | Label, input, error, `aria-invalid` y `aria-describedby`. | IMPLEMENTADO |

## Secciones

| Componente | Responsabilidad | Estado |
|---|---|---|
| `Hero` | Propuesta principal, objeción, CTAs y confianza. | IMPLEMENTADO |
| `HeroGrowthVisual` | Núcleo con seis capacidades; órbita estática/flotante desktop y grid móvil. | IMPLEMENTADO |
| `TrustChips` | Sin compromiso, evaluación personalizada y recomendaciones accionables. | IMPLEMENTADO |
| `OpportunityAreas` | Seis áreas cualitativas que sustituyen temporalmente métricas/casos. | IMPLEMENTADO |
| `AuditScope` | Doce dimensiones de la Auditoría Growth 360° y CTA. | IMPLEMENTADO |
| `GrowthEcosystem` | Seis pilares orbitales con descripción; acordeón bajo `lg`. | IMPLEMENTADO |
| `AppliedExperience` | Seis escenarios de cuello de botella y CTA. | IMPLEMENTADO |
| `Services` | Seis capacidades en composición editorial y CTA. | IMPLEMENTADO |
| `Method` | Cinco pasos de diagnóstico a implementación. | IMPLEMENTADO |
| `About` | Posicionamiento de compañía, pilares y fundadores. | IMPLEMENTADO |
| `FAQ` | Siete preguntas mediante `details/summary`. | IMPLEMENTADO |
| `FinalCTA` | Cierre navy con CTA y microcopy de confianza. | IMPLEMENTADO |

### DECISIÓN REEMPLAZADA

La sección `Cases` dejó de formar parte de la V1. `OpportunityAreas` y `AppliedExperience` aportan evidencia cualitativa sin inventar resultados; no equivalen a casos de éxito reales.

## UI reutilizable

| Componente | Responsabilidad | Estado |
|---|---|---|
| `AuditCtaButton` | Abre el modal con un origen tipado. | IMPLEMENTADO |
| `BrandCore` | Isotipo dentro del núcleo visual o fallback “AI”. | IMPLEMENTADO |
| `BrandMark` | Lockup claro/oscuro o fallback tipográfico. | IMPLEMENTADO |
| `Button` | Renderiza `<button>` o `<a>` en cinco variantes. | IMPLEMENTADO |
| `Container` | Max-width 1200 y gutters responsive. | IMPLEMENTADO |
| `Reveal` | Entrada por scroll con delay opcional. | IMPLEMENTADO |
| `SectionHeading` | Eyebrow, H2, lead, alineación y tono. | IMPLEMENTADO |

## Contexto, hooks y librerías relacionadas

Aunque no son componentes, forman parte del contrato:

- `AuditModalContext`: estado, origen y restauración de foco.
- `useFocusTrap`: Escape y ciclo de Tab dentro del modal.
- `useScrollReveal`: `IntersectionObserver` con fallback.
- `audit-form.ts`: tipos, valores iniciales y validación.
- `brand-assets.ts`: detección server-only.
- `constants.ts`: contenido y configuración central.
- `orbit.ts`: posiciones circulares.
- `submit-audit.ts`: adaptador de envío simulado.
- `tracking.ts`: contrato de eventos sin proveedor.
- `whatsapp.ts`: construcción de URL.

## DEUDA TÉCNICA

- `AuditForm` concentra presentación, flujo, efectos y navegación; podría requerir separación al incorporar un backend complejo.
- Icon paths están distribuidos en varios componentes en lugar de una capa compartida.
- No existen pruebas unitarias o visuales por componente.
- `Button` no utiliza `forwardRef`; no es un problema funcional demostrado en V1, pero puede limitar integraciones futuras.
