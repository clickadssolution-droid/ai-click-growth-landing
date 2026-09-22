# Architecture V1

## Resumen

**IMPLEMENTADO.** Aplicación Next.js App Router con dos rutas, componentes servidor por defecto e islas cliente para interacción. No existe backend propio en la baseline.

## Rutas

| Ruta | Archivo | Responsabilidad |
|---|---|---|
| `/` | `src/app/page.tsx` | Landing completa y funnel de entrada. |
| `/gracias` | `src/app/gracias/page.tsx` | Confirmación y continuación por WhatsApp. |
| Layout global | `src/app/layout.tsx` | Fuentes, metadata, contexto y modal global. |

No hay rutas API, middleware, handlers de servidor, páginas legales, sitemap o robots personalizados.

## Árbol lógico

```text
src/
├── app/          rutas, layout, estilos e iconos
├── components/
│   ├── about/    perfil de fundador
│   ├── gracias/  tracking y CTA de WhatsApp
│   ├── layout/   Header, Footer y CTA sticky
│   ├── modal/    diálogo y formulario de dos pasos
│   ├── sections/ secciones de la landing
│   └── ui/       primitivas reutilizables
├── context/      estado global del modal
├── hooks/        focus trap y scroll reveal
└── lib/          contenido, validación y adaptadores
```

## Límites servidor/cliente

### Server-side

- `layout.tsx`, páginas y la mayoría de secciones.
- Metadata de Next.
- Comprobación de existencia de assets mediante `node:fs` en `brand-assets.ts`.
- Propagación de flags `hasLogoColor`, `hasLogoWhite` y `hasIsotype` a componentes.

### Client-side

- `AuditModalProvider` y contexto.
- Header móvil.
- Modal y formulario.
- Growth Ecosystem interactivo.
- Scroll reveal y perfil animado.
- CTA móvil sticky.
- Tracking de `/gracias` y WhatsApp.

La separación evita empaquetar `node:fs` para navegador; este límite está documentado en el propio código.

## Estado y datos

- React Context administra `isOpen`, origen del CTA y trigger de foco.
- El formulario usa estado local de React.
- El contenido está centralizado en `src/lib/constants.ts`.
- No hay store externo, caché, base de datos ni estado persistente.
- Cerrar el modal desmonta el formulario y reinicia su estado al volver a abrirlo.

## Flujo del formulario

```text
AuditCtaButton
  → AuditModalContext.openModal(origin)
  → cta_click + modal_open
  → AuditModal
  → AuditForm paso 1
  → validación local
  → form_start
  → AuditForm paso 2
  → validación de selección
  → submitAuditRequest()
  → form_submit
  → router.push('/gracias')
```

### IMPLEMENTADO

`submitAuditRequest()` mantiene una firma desacoplada y devuelve `Promise<SubmitAuditResult>`.

### PENDIENTE

Su cuerpo real, autenticación, endpoint, persistencia, reintentos y manejo de fallas.

## Arquitectura visual

- `BrandMark` selecciona el lockup según fondo.
- `BrandCore` encapsula el isotipo y su fallback.
- `getOrbitPositions()` comparte geometría entre Hero y Growth Ecosystem.
- `Reveal` reutiliza `useScrollReveal()`.
- `Button` implementa botón o enlace según props.
- `AuditCtaButton` normaliza apertura y origen de conversión.

## Configuración

- Alias `@/*` → `src/*`.
- TypeScript strict, sin emisión.
- `next.config.ts` solo fija la raíz de Turbopack al proyecto.
- ESLint excluye referencias, herramientas `.claude`, outputs de Next y Playwright CLI.
- No existen variables de entorno requeridas por la implementación actual.

## DEUDA TÉCNICA

- El éxito simulado permite llegar a `/gracias` sin captura real.
- No existe boundary específico para error de integración o indisponibilidad.
- La navegación compartida por anchors debe resolverse correctamente cuando el usuario está en `/gracias`.
- `/gracias` puede visitarse directamente y dispara `thank_you_view` sin verificar una conversión previa.
- El adapter de envío reside en código cliente; una integración CRM deberá proteger secretos en servidor.
- No existen headers de seguridad, CSP o estrategia de rate limiting documentada/implementada.
