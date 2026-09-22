# QA and Testing V1

## Estado de la baseline

### IMPLEMENTADO

- ESLint está configurado con Core Web Vitals y TypeScript.
- TypeScript usa modo `strict` y `noEmit`.
- El código contiene validación cliente, estados de error, reduced motion y mecanismos de accesibilidad del modal.
- El repositorio incluye tooling/skills de Playwright CLI e Impeccable.

### PENDIENTE

- QA final Playwright.
- QA visual Impeccable con capturas desktop y mobile.
- Pruebas unitarias, integración y end-to-end del producto.
- Evidencia de lint/build final bajo un runtime compatible.

La carpeta `.playwright/` está vacía y no existe configuración propia de Playwright, Jest o Vitest.

## Limitación del entorno inspeccionado

### DEUDA TÉCNICA

Cowork expuso Node 14.17.3 y npm 6.14.13. Next.js 16 requiere Node >=20.9.0. No se modificaron dependencias ni se declaró un build válido desde ese runtime.

## Matriz mínima de QA funcional

| Área | Casos requeridos | Estado |
|---|---|---|
| Navegación | Header desktop/móvil, anchors, menú, cierre y navegación desde `/gracias`. | PENDIENTE |
| CTAs | Cada origen abre el modal correcto; CTA secundario del Hero hace scroll. | PENDIENTE |
| Modal | Apertura/cierre, Escape, click exterior, scroll lock y retorno de foco. | PENDIENTE |
| Paso 1 | Requeridos, email, teléfono, autocomplete y mensajes de error. | PENDIENTE |
| Paso 2 | Multi-select, al menos una opción, atrás, campo opcional. | PENDIENTE |
| Submit | Loading, error, éxito real, doble click, timeout y redirect. | PENDIENTE; backend ausente |
| Gracias | Contenido, tracking, navegación y WhatsApp real. | PENDIENTE |
| Responsive | Mobile, tablet, 1024, desktop y pantallas anchas. | PENDIENTE |
| Accesibilidad | Teclado, focus order, lector, contraste y reduced motion. | PENDIENTE |
| Assets | Logos, isotipo, foto, iconos, alt y ausencia de layout shift. | PENDIENTE |

## Playwright previsto

### PENDIENTE

Casos e2e recomendados:

1. Home carga y contiene un único H1.
2. CTA principal abre diálogo y enfoca el primer control.
3. Escape cierra y devuelve foco.
4. Paso 1 bloquea datos inválidos.
5. Paso 2 exige una selección.
6. Error de backend no redirige.
7. Éxito real redirige a `/gracias`.
8. WhatsApp genera URL válida con número configurado.
9. Menú móvil funciona con teclado.
10. Anchors desde `/gracias` vuelven a la sección correcta del home.
11. Reduced motion evita loops visibles.
12. No existen errores de consola o hidratación.

## Impeccable previsto

### PENDIENTE

- Capturas válidas de desktop y mobile.
- Revisión contra el código final y no solo contra el brief histórico.
- Consistencia visual, densidad, tipografía, contraste y estados.
- Revisión de modal en ambos pasos y de `/gracias`.
- Regresión visual tras integrar legal, tracking y GHL.

La configuración de hooks Impeccable prueba que la herramienta está preparada, no que la baseline tenga una aprobación visual final registrada.

## Calidad no funcional

### PENDIENTE

- Lighthouse/Core Web Vitals en deployment real.
- Pruebas de red lenta y dispositivos reales.
- Cross-browser: Chrome, Safari, Firefox y Edge actuales.
- Seguridad del endpoint, rate limiting y abuso.
- Prueba de carga básica del flujo de leads.
- Verificación de analytics y consentimiento.

## Criterio de salida de QA

QA podrá marcarse **IMPLEMENTADO** cuando exista evidencia reproducible de build/lint, suite e2e, revisión visual, accesibilidad esencial y prueba end-to-end con las integraciones productivas o sus entornos de staging.
