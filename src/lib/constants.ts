/**
 * Copy y datos estructurados centralizados.
 * Fuente de verdad: DESIGN-BRIEF.md. No se inventan cifras/resultados (secciones 7, 15, 16 del brief).
 */

export const SITE = {
  name: "AI Click Solution",
  shortName: "AI Click",
  description:
    "Auditoría Growth 360° gratuita: descubre qué está frenando el crecimiento de tu negocio en publicidad, funnels, web, ecommerce, automatización e IA.",
  url: "https://aiclicksolution.com",
} as const;

/**
 * Rutas públicas de los assets oficiales de marca (brief V1.2 punto 1). Plain
 * strings — sin dependencias de `fs`, así que son seguras de importar desde
 * componentes "use client" (BrandMark, HeroGrowthVisual, GrowthEcosystem). La
 * existencia real de cada archivo se resuelve aparte en lib/brand-assets.ts
 * (server-only) y se propaga como props booleanas desde las páginas.
 *
 * Centralizado aquí a propósito: si el cliente entrega una versión nueva de
 * cualquiera de estos tres assets, este es el único lugar que hay que tocar.
 */
export const BRAND_ASSET_PATHS = {
  /** Lockup completo a color, fondo transparente — Header y demás fondos claros. */
  logoColor: "/brand/transparente_aiaiclick.png",
  /** Lockup completo en blanco, fondo transparente — Footer y bloques navy. */
  logoWhite: "/brand/blanco_transparente_aiclick.png",
  /** Isotipo aislado (símbolo "AI" + circuito) — núcleo del Hero y Growth Ecosystem. */
  isotype: "/brand/animado_transparente.png",
} as const;

/**
 * Proporción real (ancho/alto) del contenido visible de cada asset, medida sobre
 * el bounding box de píxeles no transparentes — evita layout shift (CLS) porque
 * el contenedor puede reservar el alto correcto antes de que la imagen cargue.
 */
export const BRAND_ASSET_ASPECT = {
  logoColor: 1193 / 1233,
  logoWhite: 1123 / 1135,
  isotype: 1248 / 1161,
} as const;

/** TODO: centralizar y reemplazar por el número real de WhatsApp antes de producción. */
export const WHATSAPP_CONFIG = {
  // Formato E.164 sin "+" ni espacios, ej. "521234567890"
  phoneNumber: "REPLACE_WITH_REAL_WHATSAPP_NUMBER",
  defaultMessage:
    "Hola, equipo de AI Click Solution. Acabo de solicitar mi Auditoría Growth 360° y quiero compartirles información adicional sobre mi negocio.",
} as const;

export const NAV_LINKS = [
  { label: "Qué analizamos", href: "#que-analizamos" },
  { label: "Servicios", href: "#servicios" },
  { label: "Método", href: "#metodo" },
  { label: "Casos", href: "#casos" },
  { label: "FAQ", href: "#faq" },
] as const;

/** Footer — columna Marca (brief V1.5 sección 6). */
export const FOOTER_BRAND_CONTENT = {
  tagline: "Marketing, tecnología e IA trabajando como un solo sistema de crecimiento.",
} as const;

/**
 * Redes sociales del footer — sin URLs reales inventadas (brief V1.5 sección 6).
 * TODO: reemplazar `href: "#"` por el enlace real de cada red cuando exista.
 */
export const FOOTER_SOCIAL_LINKS = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Facebook", href: "#" },
] as const;

/** Footer — columna Compañía (brief V1.5 sección 8). */
export const FOOTER_COMPANY_LINKS = [
  { label: "Qué analizamos", href: "#que-analizamos" },
  { label: "Método", href: "#metodo" },
  { label: "Casos", href: "#casos" },
  { label: "Quiénes somos", href: "#quienes-somos" },
  { label: "FAQ", href: "#faq" },
] as const;

/**
 * Footer — columna Legal (brief V1.5 sección 9). Placeholders documentados:
 * no existe contenido legal real todavía, así que quedan en `href: "#"` hasta
 * que haya páginas de Términos/Privacidad/Cookies reales que enlazar.
 */
export const FOOTER_LEGAL_LINKS = [
  { label: "Términos", href: "#" },
  { label: "Privacidad", href: "#" },
  { label: "Cookies", href: "#" },
] as const;

export const CTA_COPY = {
  headerCta: "Auditoría Gratuita",
  heroPrimary: "QUIERO MI AUDITORÍA GROWTH 360°",
  heroSecondary: "Ver qué analizamos",
  auditSection: "Solicitar mi Auditoría Growth 360°",
  appliedExperience: "QUIERO DESCUBRIR MI PRÓXIMA OPORTUNIDAD",
  finalCta: "QUIERO MI AUDITORÍA GROWTH 360°",
  stickyMobile: "Auditoría Gratuita",
} as const;

/** Orígenes válidos del CTA, para tracking (ver lib/tracking.ts y brief sección "TRACKING"). */
export const CTA_ORIGINS = [
  "header",
  "hero",
  "audit-section",
  "applied-experience",
  "services",
  "cases",
  "final",
  "sticky-mobile",
] as const;
export type CtaOrigin = (typeof CTA_ORIGINS)[number];

export const HERO_CONTENT = {
  preHeadline: "PARA EMPRESARIOS QUE QUIEREN CRECER CON ESTRATEGIA",
  headline:
    "Descubre qué está frenando el crecimiento de tu negocio antes de seguir invirtiendo sin una estrategia clara.",
  headlineHighlight: "frenando el crecimiento",
  subheadline:
    "Detectamos oportunidades en marketing, tecnología e IA para ayudarte a priorizar qué mejorar primero.",
  objection:
    "Incluso si todavía no haces publicidad, no tienes un funnel definido o ya probaste diferentes estrategias sin conseguir los resultados que esperabas.",
} as const;

export const TRUST_CHIPS = [
  "Sin compromiso",
  "Evaluación personalizada",
  "Recomendaciones accionables",
] as const;

/** Nodos del gráfico del Hero (movimiento floating, ver HeroGrowthVisual). */
export const HERO_ECOSYSTEM_NODES = [
  "Publicidad",
  "Funnels",
  "Web & Systems",
  "Ecommerce",
  "AI & Automation",
  "Business Growth",
] as const;

/** Áreas de oportunidad — cualitativas, sin cifras inventadas (brief sección 7). */
export const OPPORTUNITY_AREAS = [
  { area: "Publicidad", focus: "Captación" },
  { area: "Funnels", focus: "Conversión" },
  { area: "Web", focus: "Experiencia" },
  { area: "Ecommerce", focus: "Ventas" },
  { area: "Automatización", focus: "Eficiencia" },
  { area: "IA", focus: "Escalabilidad" },
] as const;

export const AUDIT_SCOPE_ITEMS = [
  "Propuesta de valor",
  "Presencia digital",
  "Publicidad",
  "Captación de leads",
  "Funnel",
  "Página web",
  "Ecommerce",
  "Seguimiento comercial",
  "CRM",
  "Automatización",
  "Inteligencia artificial",
  "Oportunidades de crecimiento",
] as const;

/** Pilares del Growth Ecosystem — núcleo + 6 nodos distribuidos (brief sección 10). */
export const GROWTH_ECOSYSTEM_PILLARS = [
  {
    id: "publicidad",
    label: "Publicidad Digital",
    description: "Meta, Google, TikTok y LinkedIn Ads orientados a captación y oportunidades comerciales.",
  },
  {
    id: "funnels",
    label: "Funnels & Conversión",
    description: "Landing pages, captación, seguimiento y automatización del recorrido de venta.",
  },
  {
    id: "web-sistemas",
    label: "Desarrollo Web & Sistemas",
    description: "Webs corporativas, dashboards, sistemas internos y aplicaciones a medida.",
  },
  {
    id: "ecommerce",
    label: "Ecommerce Growth",
    description: "Adquisición, conversión, remarketing y escalamiento de tiendas online.",
  },
  {
    id: "ia-automatizacion",
    label: "IA & Automatización",
    description: "Agentes IA, CRM, workflows y automatización comercial y de procesos.",
  },
  {
    id: "mentoria",
    label: "Mentoría & Consultoría",
    description: "Marketing, growth, ventas, ecommerce, IA y automatización con acompañamiento estratégico.",
  },
] as const;

/**
 * Sección "Experiencia Aplicada" — escenarios/problemas de negocio, NO servicios
 * ni mapa orbital (evita redundancia con Growth Ecosystem, que ya cubre las 6
 * capacidades conectadas). Diagnóstica: "¿cuál de estos te suena?".
 */
export const APPLIED_EXPERIENCE_CONTENT = {
  eyebrow: "DÓNDE PODEMOS ENCONTRAR OPORTUNIDADES",
  headline: "Tu cuello de botella no siempre está donde crees.",
  subheadline:
    "Una Auditoría Growth 360° analiza marketing, tecnología y procesos para identificar dónde puede estar frenándose realmente el crecimiento de tu negocio.",
  hook: "No necesitas implementar todo. Necesitas descubrir qué mover primero.",
} as const;

export const BUSINESS_SCENARIOS = [
  {
    id: "pocos-prospectos",
    title: "Pocos prospectos",
    description: "Tu negocio necesita mejorar adquisición y visibilidad.",
  },
  {
    id: "leads-sin-cierre",
    title: "Muchos leads, pocas ventas",
    description: "Puede existir una fuga entre captación, seguimiento y cierre.",
  },
  {
    id: "web-no-convierte",
    title: "Web que no convierte",
    description: "El problema puede estar en experiencia, mensaje u oferta.",
  },
  {
    id: "procesos-manuales",
    title: "Procesos manuales",
    description: "Automatización e IA pueden liberar tiempo y mejorar seguimiento.",
  },
  {
    id: "ecommerce-estancado",
    title: "Ecommerce estancado",
    description: "Hay oportunidades en tráfico, conversión, remarketing o recompra.",
  },
  {
    id: "crecimiento-sin-direccion",
    title: "Crecimiento sin dirección",
    description: "Puede faltar priorización y un roadmap claro.",
  },
] as const;

export const SERVICES = [
  {
    number: "01",
    title: "Publicidad Digital de Performance",
    description:
      "Meta Ads, Google Ads, TikTok Ads y LinkedIn Ads orientados a captación, ventas y oportunidades comerciales.",
    featured: true,
  },
  {
    number: "02",
    title: "Funnels & Conversión",
    description: "Landing pages, sistemas de captación, seguimiento y automatización.",
    featured: false,
  },
  {
    number: "03",
    title: "Desarrollo Web & Sistemas para Negocios",
    description: "Webs corporativas, dashboards, sistemas internos y aplicaciones web.",
    featured: false,
  },
  {
    number: "04",
    title: "Ecommerce Growth",
    description: "Adquisición, conversión, remarketing y escalamiento de tiendas online.",
    featured: true,
  },
  {
    number: "05",
    title: "Inteligencia Artificial & Automatización",
    description: "Agentes IA, CRM, workflows, WhatsApp, automatización comercial y de procesos.",
    featured: false,
  },
  {
    number: "06",
    title: "Mentoría & Consultoría Estratégica",
    description: "Marketing, Growth, ventas, ecommerce, IA y automatización.",
    featured: false,
  },
] as const;

export const METHOD_STEPS = [
  {
    number: "01",
    title: "Diagnosticar",
    description: "Entendemos negocio, mercado, clientes, oferta y objetivos.",
  },
  {
    number: "02",
    title: "Detectar",
    description: "Identificamos cuellos de botella y oportunidades.",
  },
  {
    number: "03",
    title: "Priorizar",
    description: "Definimos qué puede generar mayor impacto y qué puede esperar.",
  },
  {
    number: "04",
    title: "Diseñar",
    description: "Creamos un roadmap estratégico.",
  },
  {
    number: "05",
    title: "Implementar",
    description: "Si el cliente decide trabajar con AI Click Solution, se implementan las soluciones necesarias.",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "¿La Auditoría Growth 360° realmente es gratuita?",
    answer: "Sí. No tiene costo ni requiere ningún dato de pago para solicitarla.",
  },
  {
    question: "¿Necesito estar haciendo publicidad actualmente?",
    answer:
      "No. La auditoría también aplica si todavía no haces publicidad — de hecho ayuda a definir si es el momento adecuado para empezar.",
  },
  {
    question: "¿La auditoría sirve si todavía no tengo una página web?",
    answer:
      "Sí. Podemos analizar tu presencia digital actual (redes sociales, catálogos, canales de venta) aunque no exista un sitio web todavía.",
  },
  {
    question: "¿Qué aspectos de mi negocio pueden analizar?",
    answer:
      "Propuesta de valor, presencia digital, publicidad, captación de leads, funnel, página web, ecommerce, seguimiento comercial, CRM, automatización e inteligencia artificial.",
  },
  {
    question: "¿Después de la auditoría estoy obligado a contratar algún servicio?",
    answer: "No. La auditoría es un diagnóstico independiente; decidir si avanzamos juntos queda enteramente de tu lado.",
  },
  {
    question: "¿Trabajan únicamente con empresas locales?",
    answer: "No necesariamente — el proceso de auditoría y el trabajo posterior pueden realizarse de forma remota.",
  },
  {
    question: "¿Cómo continúa el proceso después de solicitarla?",
    answer:
      "Recibimos tu solicitud, revisamos la información de tu negocio y te contactamos para coordinar los siguientes pasos del análisis.",
  },
] as const;

export const ABOUT_CONTENT = {
  eyebrow: "Quiénes somos",
  headline: "Marketing + Tecnología + IA trabajando como un solo sistema de crecimiento.",
  body: "AI Click Solution combina marketing de performance, tecnología y estrategia con inteligencia artificial para que la publicidad, la web, el ecommerce y la automatización de tu negocio funcionen como un mismo sistema — no como iniciativas sueltas que no se hablan entre sí.",
  pillars: ["Marketing", "Tecnología", "Estrategia", "IA"] as const,
} as const;

export const FINAL_CTA_CONTENT = {
  headline: "Tu negocio puede tener oportunidades de crecimiento que hoy todavía no estás viendo.",
  subtext: "Empieza identificando qué deberías corregir, optimizar o potenciar.",
} as const;

export const GRACIAS_CONTENT = {
  headline: "Tu Auditoría Growth 360° está en camino",
  body: "Hemos recibido tu solicitud. Nuestro equipo revisará la información de tu negocio para identificar las principales oportunidades que podremos analizar contigo.",
  secondaryHeadline: "¿Quieres acelerar el proceso?",
  secondaryBody:
    "Puedes enviarnos tu página web, redes sociales o información adicional sobre tu negocio directamente por WhatsApp.",
  whatsappCta: "Continuar por WhatsApp",
} as const;

export const AUDIT_MODAL_CONTENT = {
  step1: {
    title: "Cuéntanos sobre tu negocio",
    cta: "Continuar",
  },
  step2: {
    title: "¿Qué quieres mejorar?",
    ctaFinal: "Solicitar mi Auditoría Growth 360°",
  },
} as const;

export const IMPROVEMENT_CHIPS = [
  "Conseguir más clientes",
  "Mejorar publicidad",
  "Funnels & captación",
  "Página web",
  "Sistemas / Apps",
  "Ecommerce",
  "Automatización",
  "Inteligencia Artificial",
  "Estrategia",
] as const;
