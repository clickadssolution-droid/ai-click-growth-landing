# ADR-007: No publicar métricas o casos no verificados

- Estado: **ACEPTADA / IMPLEMENTADO**
- Baseline: `fcef26a`

## Contexto

La landing necesita credibilidad, pero el repositorio no contiene métricas, testimonios o casos aprobados que puedan presentarse como resultados reales.

## Decisión

No inventar ROAS, porcentajes, clientes, logos, testimonios, SLA ni casos. Sustituir temporalmente la prueba cuantitativa por seis áreas cualitativas y seis escenarios de negocio.

## Consecuencias

- La V1 evita claims no sustentados.
- “Oportunidades” ayuda a reconocerse en el problema, pero no se presenta como prueba social.
- La sección Casos fue eliminada de navegación y composición.

## DECISIÓN REEMPLAZADA

La sección Casos prevista originalmente no forma parte de V1.

## PENDIENTE

Incorporar casos y métricas solo después de verificar fuente, metodología, permiso de publicación y copy legalmente aprobable.

## DEUDA TÉCNICA

El origen `cases` permanece en el tipo de tracking y puede retirarse en una futura modificación de código.
