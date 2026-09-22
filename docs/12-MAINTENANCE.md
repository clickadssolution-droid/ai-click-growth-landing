# Maintenance

## Principio de mantenimiento

El commit `fcef26a` es la baseline documental V1. Cualquier cambio posterior debe actualizar código, documentación afectada y `docs/CHANGELOG.md` en el mismo ciclo.

## Fuentes de verdad

1. Código ejecutable y configuración.
2. ADR aceptados.
3. Documentación temática en `/docs`.
4. `DESIGN-BRIEF.md` como antecedente histórico cuando diverge.
5. Material de `references/` únicamente como investigación.

El `README.md` raíz no forma parte de esta fase y no fue creado ni modificado.

## Mantenimiento de contenido

### IMPLEMENTADO

- Copy, navegación, servicios, FAQ, fundadores, WhatsApp y assets están mayormente centralizados en `src/lib/constants.ts`.
- Componentes como `FounderCard`, `BrandMark` y `BrandCore` admiten sustitución de datos/assets sin rediseño estructural.

### PENDIENTE

- Propietario formal del copy y periodicidad de revisión.
- URLs sociales y legales.
- Número real de WhatsApp.
- SLA y datos de contacto operativos.
- Casos, testimonios y métricas aprobados.

## Mantenimiento técnico

Checklist por cambio:

- confirmar branch y baseline;
- preservar tipado strict;
- ejecutar lint y build en Node soportado;
- actualizar o crear pruebas;
- revisar responsive y accesibilidad;
- verificar modal y tracking;
- revisar impacto sobre Core Web Vitals;
- documentar decisión relevante mediante ADR;
- actualizar changelog.

## Dependencias

### DEUDA TÉCNICA

No existe archivo de versión de Node ni automatización de actualización de dependencias.

### PENDIENTE

- Fijar runtime reproducible.
- Definir política y frecuencia de upgrades.
- Revisar notas de Next.js antes de cambios, conforme a `AGENTS.md`.
- Ejecutar auditoría de seguridad y pruebas después de upgrades.

No deben actualizarse dependencias solo para adaptar el proyecto al runtime obsoleto de Cowork.

## Integraciones

Cuando GHL, tracking y WhatsApp sean implementados se deberá mantener:

- inventario de variables de entorno sin secretos;
- propietario y permisos de cada cuenta;
- contrato de campos/eventos;
- monitoreo de fallas;
- procedimiento de rotación de credenciales;
- entorno de prueba;
- pruebas de humo periódicas;
- política de privacidad y retención.

Todo lo anterior está **PENDIENTE** en V1.

## Assets y marca

- Conservar proporciones y transparencia de los lockups.
- No recolorear el asset dentro de `BrandCore`.
- Optimizar nuevos assets sin degradar calidad visible.
- Mantener alt text significativo en imágenes informativas.
- Eliminar assets solo tras comprobar referencias reales.

## Gestión de incidencias

Prioridad recomendada:

1. Pérdida o falsa confirmación de leads.
2. Exposición de PII o secretos.
3. Formulario, navegación o deployment caído.
4. Tracking incorrecto.
5. Accesibilidad y responsive bloqueantes.
6. Regresiones visuales menores.

## Cadencia sugerida

### PENDIENTE DE APROBACIÓN OPERATIVA

- Smoke test semanal del funnel una vez publicado.
- Revisión mensual de eventos, leads y enlaces.
- Revisión trimestral de dependencias, contenido y accesibilidad.
- Auditoría completa antes de campañas relevantes.

La cadencia es una recomendación documental; no existe automatización en V1.
