# GoHighLevel Integration

## Estado

**PENDIENTE.** La V1 no contiene integración productiva con GoHighLevel (GHL), API route, webhook, credenciales, ubicación, workflow, pipeline o mapeo aprobado.

El único elemento implementado es la frontera `submitAuditRequest(data): Promise<SubmitAuditResult>`, diseñada para poder sustituir la simulación sin reescribir el formulario.

## Datos disponibles desde el formulario

| Campo interno | Tipo | Obligatorio |
|---|---|---:|
| `name` | string | Sí |
| `company` | string | Sí |
| `whatsapp` | string | Sí |
| `email` | string | Sí |
| `improvements` | string[] | Sí, al menos uno |
| `website` | string | No |
| `origin` | origen de CTA | Disponible en contexto; no forma parte de `AuditFormData` |

No se documentan IDs o nombres de campos GHL porque no existen en el repositorio.

## Arquitectura objetivo mínima por aprobar

Esta sección enumera requisitos, no una integración ya decidida:

```text
AuditForm
  → endpoint server-side propio
  → validación y normalización
  → autorización segura hacia GHL
  → creación/actualización de contacto
  → asociación de origen y objetivos
  → workflow/pipeline aprobado
  → respuesta controlada al cliente
```

Los secretos no deben exponerse en componentes cliente ni en variables públicas.

## Decisiones pendientes

- API directa de GHL frente a webhook/workflow.
- Location/subaccount destino.
- Estrategia create vs upsert.
- Clave de deduplicación: email, teléfono o combinación.
- Normalización de nombre y teléfono.
- Campos personalizados para empresa, objetivos, web y origen.
- Tags, pipeline, stage, owner y workflow.
- Consentimiento para comunicación y base legal.
- Manejo de duplicados, rate limits y timeouts.
- Política de reintentos e idempotencia.
- Alertas y registro de errores.
- Entornos sandbox/staging/productivo.

## Seguridad y privacidad

### PENDIENTE

- Política de privacidad publicada.
- Texto de consentimiento en formulario si corresponde.
- Minimización y retención de datos.
- Secreto GHL almacenado únicamente en servidor/hosting.
- Sanitización y validación server-side.
- Rate limiting y protección antiabuso.
- Logs sin PII innecesaria.
- Procedimiento para solicitudes de acceso o eliminación.

## Comportamiento actual

### DEUDA TÉCNICA

`submitAuditRequest()` espera aproximadamente 600 ms y responde `{ ok: true }`. En producción esto permite mostrar `/gracias` sin crear un contacto. No debe interpretarse como integración parcial con GHL.

## Criterios de aceptación futuros

La integración solo podrá marcarse **IMPLEMENTADO** cuando:

1. exista endpoint server-side desplegado;
2. los campos estén aprobados y mapeados;
3. secretos y permisos estén configurados de forma segura;
4. contactos de prueba lleguen al destino correcto;
5. duplicados, errores y timeouts tengan comportamiento definido;
6. el frontend solo redirija tras aceptación real;
7. QA verifique el flujo extremo a extremo;
8. privacidad y consentimiento estén aprobados.
