# ADR-003: Modal global de auditoría en dos pasos

- Estado: **ACEPTADA / IMPLEMENTADO**
- Baseline: `fcef26a`

## Contexto

La conversión debe estar disponible desde múltiples secciones sin duplicar formularios ni cargar el Hero con campos.

## Decisión

Usar un único `AuditModal` montado en el layout y controlado por `AuditModalContext`. Dividir el formulario en contacto y objetivos. Registrar el origen de cada CTA y redirigir a `/gracias` tras éxito del adaptador.

Incluir focus trap, Escape, click exterior, scroll lock y restauración de foco.

## Consecuencias

- Un solo contrato de conversión y copy consistente.
- El paso 1 define `form_start`.
- El formulario se reinicia cuando el modal se desmonta.
- El CTA secundario del Hero conserva función exploratoria.

## PENDIENTE

Consentimiento, backend real, comportamiento ante timeout y QA e2e.

## DEUDA TÉCNICA

El adaptador actual siempre confirma éxito después de una espera simulada.
