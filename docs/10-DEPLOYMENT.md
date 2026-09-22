# Deployment V1

## Estado

**PENDIENTE.** No existe proveedor de hosting definitivo, proyecto de deployment, archivo de plataforma, Dockerfile, CI/CD, remote Git o evidencia de publicación en el repositorio.

## Dominio previsto

- Producción prevista: `https://iclicksolution.com`.
- `metadataBase` actual en código: `https://aiclicksolution.com`.

La divergencia es **DEUDA TÉCNICA** y requiere una modificación productiva posterior, fuera de esta fase documental.

## Build y ejecución previstos por el proyecto

Los scripts disponibles son:

```text
npm run dev
npm run build
npm run start
npm run lint
```

Next.js 16.3.5 requiere Node `>=20.9.0`. El entorno de deployment deberá usar una versión soportada y coherente con el lockfile.

## Requisitos previos a publicar

### PENDIENTE

- Seleccionar hosting y región.
- Configurar remote del repositorio y estrategia de ramas.
- Fijar versión de Node reproducible.
- Ejecutar instalación limpia con el lockfile.
- Resolver dominio, DNS y TLS.
- Actualizar metadata al dominio aprobado.
- Configurar variables y secretos del backend/GHL.
- Incorporar WhatsApp real.
- Incorporar legal, privacidad y consentimiento.
- Conectar y validar tracking productivo.
- Ejecutar lint, build, Playwright e Impeccable.
- Definir rollback y observabilidad.

## Entornos recomendados para decisión

No están implementados. Debe decidirse si se requieren:

- preview por pull request;
- staging con CRM/tracking de prueba;
- producción;
- separación de secretos y destinos GHL por entorno.

## Checklist de release

1. Confirmar commit/tag de release.
2. Verificar working tree limpio.
3. Instalar dependencias en runtime soportado.
4. Ejecutar lint y build.
5. Ejecutar pruebas funcionales y visuales.
6. Validar formulario contra integración real.
7. Validar eventos y consentimiento.
8. Validar `/`, `/gracias`, enlaces y navegación desde ambas rutas.
9. Revisar responsive, accesibilidad, SEO y rendimiento.
10. Verificar DNS, TLS, redirects y canonical.
11. Ejecutar smoke test posterior al deployment.
12. Confirmar rollback y alertas.

## Rollback

### PENDIENTE

El proveedor deberá permitir volver a una versión conocida. El release debe asociarse a un commit o tag inmutable y conservar configuración de entorno compatible.

## Observabilidad

### PENDIENTE

- Logs de errores de servidor sin PII.
- Monitor de disponibilidad.
- Alertas de fallo en envío de leads.
- Métricas de latencia y error del endpoint.
- Validación periódica del funnel y de integraciones.

## DEUDA TÉCNICA

- No hay tag Git V1; la baseline se identifica por commit.
- No hay remote configurado.
- El runtime Cowork inspeccionado no es apto para construir Next.js 16.
- No existe `.env.example` ni contrato de configuración productiva.
