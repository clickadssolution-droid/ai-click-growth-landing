# ADR-004: Adaptadores desacoplados para envío y tracking

- Estado: **ACEPTADA**. Adaptadores: **IMPLEMENTADO**. Integraciones: **PENDIENTE**.
- Baseline: `fcef26a`

## Contexto

La interfaz debía completarse antes de definir CRM, analytics, credenciales y hosting.

## Decisión

Aislar integraciones detrás de `submitAuditRequest()` y `track()`. Los componentes consumen contratos internos sin depender de GHL, GA4 o Meta Pixel.

## Consecuencias

- Los proveedores futuros pueden cambiar sin reescribir todos los call-sites.
- Los nombres de eventos quedan centralizados por tipo.
- V1 puede demostrar el flujo visual sin credenciales.

## PENDIENTE

- Endpoint server-side y GoHighLevel.
- Proveedor de tracking y consentimiento.
- Eventos de error/aceptación, atribución y deduplicación.

## DEUDA TÉCNICA

El stub de envío simula éxito y `track()` es no-op en producción. La separación está implementada; las integraciones no.
