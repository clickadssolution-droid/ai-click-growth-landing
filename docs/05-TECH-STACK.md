# Tech Stack V1

## Runtime y framework

| Tecnología | Versión declarada/resuelta | Estado | Uso |
|---|---:|---|---|
| Next.js | 16.3.5 | IMPLEMENTADO | App Router, metadata, imágenes, fuentes y navegación. |
| React | 19.2.8 | IMPLEMENTADO | Componentes, contexto, hooks y estado. |
| React DOM | 19.2.8 | IMPLEMENTADO | Renderizado web. |
| TypeScript | 5.9.3 resuelto | IMPLEMENTADO | Tipado estricto y alias. |
| Tailwind CSS | 4.3.3 resuelto | IMPLEMENTADO | Layout y estilos utilitarios. |
| PostCSS | integración Tailwind | IMPLEMENTADO | Procesamiento CSS. |
| ESLint | 9.39.5 resuelto | IMPLEMENTADO | Core Web Vitals y TypeScript. |
| npm | `package-lock.json` v3 | IMPLEMENTADO | Gestión de dependencias. |
| Git | repositorio local | IMPLEMENTADO | Historial y baseline V1. |

Las versiones “resueltas” provienen del lockfile/instalación inspeccionada; los rangos de desarrollo en `package.json` usan `^` para varias herramientas.

## Dependencias de producción

Solo existen `next`, `react` y `react-dom`. No se usa:

- SDK de GoHighLevel;
- SDK de analytics;
- librería de formularios o validación;
- librería de animación;
- librería de iconos;
- gestor de estado externo;
- CMS, base de datos o cliente HTTP adicional;
- Three.js/WebGL.

## Fuentes y multimedia

- Manrope, Inter y JetBrains Mono mediante `next/font/google`.
- `next/image` para PNG/JPEG.
- SVG inline para iconos y conectores.
- CSS puro para motion.

## Tooling del repositorio

### IMPLEMENTADO/CONFIGURADO

- Scripts npm: `dev`, `build`, `start`, `lint`.
- Configuración local de Claude con hooks de revisión Impeccable.
- Skills y herramientas de diseño guardadas en `.claude/`.
- Material de benchmark generado en `references/`.

La presencia de una herramienta no prueba que cada workflow haya sido ejecutado sobre la baseline final.

### PENDIENTE

- Suite Playwright del producto.
- Ejecución y evidencia de QA Impeccable final.
- Pipeline CI que ejecute lint, build y pruebas.

## Requisitos de entorno

El paquete local de Next.js declara Node `>=20.9.0`. ESLint declara Node `^18.18.0 || ^20.9.0 || >=21.1.0`.

### DEUDA TÉCNICA

El entorno Cowork inspeccionado expuso Node `14.17.3` y npm `6.14.13`, incompatibles con Next 16 y con el lockfile v3. Esta documentación no modifica dependencias ni runtime. La resolución corresponde al entorno de desarrollo/deployment, preferiblemente con una versión de Node soportada y reproducible.

## Configuración ausente

### PENDIENTE

- `.env.example` con variables productivas documentadas.
- Configuración de hosting.
- CI/CD.
- Observabilidad.
- Analytics y consent management.
- API/route handler para leads.
- Seguridad de secretos y rotación de credenciales.

## Dominio

- Dominio productivo previsto: `https://iclicksolution.com`.
- Valor actual en código: `https://aiclicksolution.com`.

La diferencia es **DEUDA TÉCNICA** y deberá resolverse antes del deployment; no se modifica como parte de esta fase documental.
