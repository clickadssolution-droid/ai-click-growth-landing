# AI Click Solution Growth Landing — Project Overview V1

## Control documental

- Proyecto: **AI Click Solution Growth Landing**
- Oferta: **Auditoría Growth 360° gratuita**
- Baseline oficial: commit `fcef26a445a4672ca1589170228e9a4ed4b06e72`
- Commit corto: `fcef26a`
- Mensaje: `feat: finalize AI Click Solution Growth Landing V1`
- Rama de referencia: `main`
- Fecha de cierre técnico: 2026-09-21
- Fuente de verdad: código del commit indicado. `DESIGN-BRIEF.md` es antecedente histórico cuando diverge.

## Convención de estados

- **IMPLEMENTADO:** existe y es verificable en la baseline V1.
- **PENDIENTE:** previsto o necesario, pero ausente de la baseline.
- **DEUDA TÉCNICA:** existe una limitación, incoherencia o riesgo que requiere trabajo posterior.
- **DECISIÓN REEMPLAZADA:** decisión histórica que dejó de representar la implementación final.

## Resumen ejecutivo

**IMPLEMENTADO.** Landing B2B de respuesta directa diseñada para convertir visitas en solicitudes de una Auditoría Growth 360°. La experiencia combina una página principal, un modal global de dos pasos y una página `/gracias` con continuación por WhatsApp.

**PENDIENTE.** La V1 no es todavía un sistema productivo de captación: el formulario simula un envío exitoso, el tracking no está conectado a proveedores, el número de WhatsApp es provisional y no existe integración con GoHighLevel ni despliegue definitivo.

## Objetivo comercial

Captar leads B2B interesados en diagnosticar las principales restricciones de crecimiento de su negocio antes de invertir en nuevas tácticas. La landing presenta a AI Click Solution como integrador de marketing, tecnología, estrategia e inteligencia artificial.

La conversión principal es la solicitud de la Auditoría Growth 360°. La conversión secundaria es la continuación de la conversación por WhatsApp desde `/gracias`.

## Público objetivo

La comunicación se dirige a:

- empresarios y responsables de negocio;
- decisores de marketing, ventas, ecommerce u operaciones;
- negocios que buscan más clientes, mejor conversión o un roadmap de crecimiento;
- empresas con problemas en publicidad, funnels, web, ecommerce, CRM, seguimiento, automatización o IA;
- negocios que todavía no ejecutan publicidad o no cuentan con web, según las respuestas del FAQ.

La V1 no define vertical, tamaño de empresa, país prioritario, ticket mínimo ni criterios de calificación comercial avanzados.

## Oferta: Auditoría Growth 360°

**IMPLEMENTADO.** La oferta se presenta como gratuita, personalizada, sin compromiso y orientada a recomendaciones accionables. El alcance comunicado incluye:

- propuesta de valor;
- presencia digital;
- publicidad;
- captación de leads;
- funnel;
- página web;
- ecommerce;
- seguimiento comercial;
- CRM;
- automatización;
- inteligencia artificial;
- oportunidades de crecimiento.

El método comunicado comprende diagnosticar, detectar, priorizar, diseñar e implementar. La implementación posterior solo se plantea si el cliente decide trabajar con AI Click Solution.

## Arquitectura B2B de captación

1. El visitante entra en `/`.
2. El Hero presenta problema, propuesta y confianza.
3. El CTA primario abre el modal; el CTA secundario baja a “Qué analizamos”.
4. Los CTAs distribuidos por la página abren el mismo modal y registran su origen.
5. El paso 1 recoge nombre, empresa, WhatsApp y email.
6. El paso 2 recoge áreas de mejora y, opcionalmente, web o redes.
7. La V1 simula el envío, registra `form_submit` y navega a `/gracias`.
8. `/gracias` muestra confirmación y ofrece continuar por WhatsApp.

**PENDIENTE.** Persistencia del lead, calificación, CRM, notificación, asignación comercial y automatizaciones posteriores.

## Alcance funcional V1

### IMPLEMENTADO

- Home responsive en `/`.
- Página de confirmación en `/gracias`.
- Header, Footer y CTA móvil sticky.
- Hero con visual de núcleo y seis áreas.
- Áreas de oportunidad cualitativas sin métricas inventadas.
- Alcance de la auditoría.
- Growth Ecosystem desktop y alternativa tipo acordeón.
- Escenarios de experiencia aplicada.
- Servicios, método, quiénes somos, FAQ y CTA final.
- Perfil de Carlos Peña como CEO & Growth Strategist.
- Modal global en dos pasos y validación cliente.
- Capas desacopladas para envío, tracking y WhatsApp.
- Accesibilidad y reduced motion implementados parcialmente según código.

### PENDIENTE

- GoHighLevel productivo.
- Tracking productivo.
- WhatsApp real.
- Deployment y CI/CD.
- Legal, privacidad y cookies.
- Casos reales, métricas verificadas y campañas.
- QA final con Playwright e Impeccable.
- SLA operativo.

### DEUDA TÉCNICA

- El formulario confirma éxito sin persistir información.
- El dominio previsto `https://iclicksolution.com` difiere del `metadataBase` presente en código (`https://aiclicksolution.com`).
- Los links de navegación compartidos usan fragmentos locales y requieren validación específica en `/gracias`.
- Existen enlaces sociales y legales con `href="#"`.
- El origen de tracking `cases` continúa tipado aunque la sección fue eliminada.

## Roadmap posterior a V1

1. Definir privacidad, consentimiento y tratamiento de datos.
2. Diseñar y aprobar el contrato de integración con GoHighLevel.
3. Configurar WhatsApp real y enlaces corporativos.
4. Implementar tracking productivo con consentimiento.
5. Corregir metadatos para el dominio previsto.
6. Preparar hosting, variables de entorno y CI/CD.
7. Ejecutar QA funcional, responsive, accesible y visual.
8. Incorporar casos y métricas únicamente cuando sean verificables.
9. Activar campañas y medir el funnel completo.

## Fuera de alcance de esta documentación

- Cambios en `src/`, `public/`, dependencias o configuración productiva.
- Modificación del `README.md` raíz.
- Definición inventada de credenciales, pipelines o campos internos de GoHighLevel.
- Declarar como publicado o medido aquello que no tiene evidencia en el repositorio.
