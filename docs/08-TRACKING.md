# Tracking V1

## Estado general

**IMPLEMENTADO.** Existe un contrato interno de eventos y call-sites distribuidos en el funnel.

**PENDIENTE.** No existe proveedor productivo. `track()` solo escribe en consola fuera de producción; en producción no envía nada.

## Eventos definidos

| Evento | Momento | Payload actual |
|---|---|---|
| `cta_click` | Al abrir el modal desde un CTA. | `origin` |
| `modal_open` | Inmediatamente después de `cta_click`. | `origin` |
| `form_start` | Al validar y completar el paso 1. | `origin`, `step: 1` |
| `form_submit` | Tras respuesta exitosa de `submitAuditRequest`. | `origin`, `step: 2`, `improvements` |
| `thank_you_view` | Al montar `/gracias`. | Sin payload. |
| `whatsapp_click` | Al pulsar el CTA en `/gracias`. | `origin: "gracias"` |

No se envían nombre, email, empresa o teléfono al tracking actual.

## Orígenes tipados

`header`, `hero`, `audit-section`, `applied-experience`, `services`, `cases`, `final` y `sticky-mobile`.

### DEUDA TÉCNICA

`cases` es un origen heredado sin componente activo.

## Limitaciones

- No hay GA4, Meta Pixel, Google Ads, LinkedIn Insight Tag u otro SDK.
- No hay data layer.
- No se capturan UTM, referrer, landing URL, click IDs o session ID.
- No existe consentimiento ni bloqueo previo de tags.
- No hay deduplicación browser/server.
- No hay eventos de error, abandono o respuesta del CRM.
- `thank_you_view` no demuestra que exista un lead persistido.

## Requisitos para producción

### PENDIENTE

1. Elegir proveedores y propietario de medición.
2. Definir consentimiento según mercados objetivo.
3. Crear diccionario de eventos, propiedades, tipos y nomenclatura.
4. Separar `form_submit_attempt`, `lead_accepted` y `lead_rejected` si se requiere precisión.
5. Capturar atribución con reglas de privacidad aprobadas.
6. Validar eventos en preview/debug y producción.
7. Definir retención, acceso y tratamiento de PII.
8. Documentar deduplicación si se combinan browser y server-side tracking.

## Criterio de finalización

Tracking será **IMPLEMENTADO** solo cuando los eventos sean observables en el proveedor productivo, estén validados, respeten consentimiento y puedan reconciliarse con leads aceptados por el backend/CRM.
