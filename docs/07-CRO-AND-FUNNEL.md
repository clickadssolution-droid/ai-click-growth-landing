# CRO and Funnel V1

## Objetivo de conversión

La macroconversión es solicitar la Auditoría Growth 360°. La microconversión posterior es iniciar una conversación por WhatsApp.

## Recorrido de persuasión

| Etapa | Sección/componente | Función CRO | Estado |
|---|---|---|---|
| Atención | Hero | Expone el costo de crecer sin estrategia. | IMPLEMENTADO |
| Relevancia | Oportunidades | Muestra múltiples palancas sin inventar KPIs. | IMPLEMENTADO |
| Claridad | Qué analizamos | Define el alcance del diagnóstico. | IMPLEMENTADO |
| Mecanismo | Growth Ecosystem | Presenta capacidades como sistema conectado. | IMPLEMENTADO |
| Identificación | Experiencia aplicada | Traduce servicios a problemas reconocibles. | IMPLEMENTADO |
| Capacidad | Servicios | Explica las seis áreas ejecutables. | IMPLEMENTADO |
| Proceso | Método | Reduce incertidumbre sobre el siguiente paso. | IMPLEMENTADO |
| Autoridad | Quiénes somos | Presenta posicionamiento y fundador. | IMPLEMENTADO |
| Objeciones | FAQ | Resuelve costo, madurez, web, contratación y alcance. | IMPLEMENTADO |
| Acción | CTA final | Repite la promesa y abre el modal. | IMPLEMENTADO |
| Continuidad | `/gracias` | Confirma y deriva a WhatsApp. | IMPLEMENTADO (CTA); PENDIENTE (número real) |

## Distribución de CTAs

Orígenes activos detectados:

- `header`
- `hero`
- `audit-section`
- `applied-experience`
- `services`
- `final`
- `sticky-mobile`

Todos los primarios abren el mismo modal. El CTA secundario del Hero navega intencionalmente a `#que-analizamos` y no abre el modal.

### DECISIÓN REEMPLAZADA

El brief indicaba en un punto que ambos CTAs del Hero abrirían el modal. La implementación final establece una jerarquía distinta: conversión primaria y exploración secundaria.

## Modal de conversión

### Paso 1: datos de contacto

- Nombre.
- Empresa.
- WhatsApp.
- Email.

Los cuatro campos son obligatorios. Email usa validación de formato básica; WhatsApp exige al menos siete dígitos reales.

### Paso 2: objetivo

- Selección múltiple de nueve áreas de mejora.
- Página web o redes sociales, opcional.
- Al menos una mejora es obligatoria.

El paso 1 crea una frontera natural para `form_start`; el paso 2 registra `form_submit` tras la respuesta exitosa del adaptador.

## Reducción de fricción

### IMPLEMENTADO

- No hay formulario dentro del Hero.
- CTA consistente en toda la página.
- Modal global reutilizable.
- Dos pasos breves.
- Labels visibles y autocomplete.
- Mensajes de error inline.
- Trust chips.
- CTA sticky móvil descartable.
- No se promete un SLA inexistente.

## Evidencia y prueba social

### IMPLEMENTADO

La V1 usa categorías y escenarios cualitativos.

### DECISIÓN REEMPLAZADA

La sección Casos fue retirada intencionalmente. “Oportunidades” funciona como sustitución temporal de contexto, no como prueba de resultados.

### PENDIENTE

- Casos reales aprobados.
- Testimonios verificables.
- KPIs antes/después con metodología.
- Logos de clientes con autorización.

## Medición futura del funnel

Cuando exista tracking productivo deberían poder calcularse, como mínimo:

- CTR de CTA por origen;
- tasa CTA → apertura de modal;
- paso 1 iniciado/completado;
- paso 2 enviado;
- envío aceptado/rechazado por backend;
- visita válida a `/gracias`;
- click a WhatsApp;
- lead calificado y oportunidad comercial en CRM.

Estas métricas son **PENDIENTES**; no hay datos reales en V1.

## DEUDA TÉCNICA

- `cases` permanece en el tipo de orígenes aunque ya no tiene CTA.
- La confirmación simulada infla artificialmente una futura medición si se conecta tracking antes que el backend.
- `/gracias` puede visitarse directamente.
- No hay prevención de envíos repetidos, atribución de campaña ni captura UTM.
- No existe consentimiento de privacidad asociado al formulario.
