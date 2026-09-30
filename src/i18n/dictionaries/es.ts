import type { Dictionary } from "./en";

export const es = {
  meta: {
    title: "Ewoma Ozore — Ingeniero frontend y mobile sénior",
    description:
      "Ingeniero frontend y mobile sénior en Lagos, Nigeria. Casos de estudio con React, React Native y Next.js: MTN, Justrite, Zona y AB InBev. Disponible para trabajo remoto y reubicación.",
    projectsTitle: "Proyectos personales",
    projectsDescription:
      "Proyectos propios de Ewoma Ozore — QuantumSpecs, Pollux, GameBuddy, Interswitch y Flux. Hechos de noche y en fines de semana.",
    caseStudy: "Caso de estudio",
  },
  caseLedes: {
    quantumspecs:
      "Una consola de operaciones que vigila la salud del checkout en cinco regiones y deja que un analista de IA consulte los mismos datos y proponga acciones que tienes que confirmar antes de que nada mute producción.",
    "mtn-partner-portal":
      "El frontend para partners del ecosistema digital de MTN Nigeria: alta, cumplimiento, contratos, lanzamiento de servicios e integración con las plataformas de MTN, sin un proceso de papeles y correos.",
    justrite:
      "Lidero el desarrollo de la app React Native de Justrite: compras por tienda, pagos, integraciones bancarias de pago aplazado y publicaciones en iOS y Android.",
    zona: "La noche no espera. Descubrir un local, entrar en la lista y reservar botella, desde el teléfono, esta noche.",
    "kuja-erp":
      "Un ERP para distribuidores de AB InBev África: inventario, ventas, reclamaciones y finanzas para mercados de habla inglesa y portuguesa.",
  },
  caseDisclaimers: {
    quantumspecs:
      "Kora es un inquilino ficticio. Slack, PagerDuty y Linear son filas de una bandeja de pruebas, no webhooks de producción.",
  },
  nav: {
    work: "Trabajo",
    projects: "Proyectos",
    experience: "Experiencia",
    skills: "Habilidades",
    contact: "Contacto",
    resume: "Currículum",
    home: "Inicio",
    open: "Abrir menú",
    close: "Cerrar menú",
    footer: "Pie de página",
    social: "Redes",
    languages: "Idiomas",
    download: "Descargar currículum",
  },
  hero: {
    location: "Lagos, Nigeria · WAT (UTC+1) · Trabajo remoto y reubicación",
    hello: "¡Hola!",
    before: "Soy",
    name: "Ewoma Ozore",
    afterStart: "ingeniero frontend sénior,",
    afterEnd: "creo productos web y móviles.",
    intro:
      "Me encargo del registro, los pagos y las herramientas de negocio, desde el diseño y la integración de API hasta la publicación y el soporte en producción.",
    studies: "Leer los casos de estudio",
    contact: "Escribirme",
    scroll: "Ir al trabajo",
    where: "Dónde quiero trabajar",
  },
  work: {
    eyebrow: "01 — Trabajo seleccionado",
    title: "Cómo pienso, no solo lo que salió.",
    body: "Casos de estudio de producción. Decisiones, límites y lo que haría con más tiempo.",
    personal: "Proyectos personales",
    read: "Leer el caso de estudio",
    visit: "Ver el sitio",
    logo: "logotipo",
    screenshot: "Captura de {name}",
    app: "Captura de la app {name}",
  },
  roles: {
    "mtn-partner-portal": "Desarrollador de software sénior",
    justrite: "Desarrollador mobile principal",
    zona: "Ingeniero mobile",
    "kuja-erp": "Ingeniero frontend sénior",
  },
  workCopy: {
    "mtn-partner-portal": {
      description:
        "Registro e integración de servicios para partners de MTN Nigeria.",
      detail:
        "Portal Next.js en producción para agregadores con licencia, partners VAS aprobados por la NCC y quienes los operan: alta, cumplimiento, contratos e integración de servicios con MTN, en vivo en partner.mtn.ng.",
      metric: "Portal en producción",
    },
    justrite: {
      description: "Ecommerce de supermercado que se parece a la tienda.",
      detail:
        "Cliente React Native de Justrite Superstore: inventario por tienda, pago con varias pasarelas y BNPL bancario, más la subida a React Native 0.77 y CodePush OTA. En iOS, Android y justriteonline.com.",
      metric: "iOS + Android",
    },
    zona: {
      description:
        "La noche de Miami y Nueva York, reservada desde el bolsillo.",
      detail:
        "App de ocio nocturno para descubrir locales, entrar en listas de invitados y reservar botella. Publicada en las dos tiendas, con una interfaz que se siente nativa.",
      metric: "iOS + Android",
    },
    "kuja-erp": {
      description:
        "Inventario, ventas y finanzas para distribuidores de AB InBev África.",
      detail:
        "ERP de distribuidores para admins y backoffice: red, inventario, venta en mostrador, reclamaciones, finanzas y fidelización. Una app Next.js bilingüe, con permisos y contexto de país.",
      metric: "AB InBev",
    },
  },
  stats: [
    "años en frontend, incluidas prácticas",
    "casos de estudio en producción",
    "apps móviles en ambas tiendas",
    "integraciones bancarias BNPL en Justrite",
  ],
  experience: {
    context: "MTN y AB InBev son colaboraciones por contrato que siguen activas tras sus renovaciones. Las compagino con mi puesto en Justrite, lo que explica el solapamiento de fechas.",
    present: "Actualidad",
    engagements: {
      contract: "Por contrato",
      internship: "Prácticas",
    },
    eyebrow: "02 — Experiencia",
    title: "Cerca de producción. Siempre.",
    roles: {
      "MTN Nigeria": "Desarrollador de software sénior",
      Justrite: "Desarrollador mobile principal",
      "AB InBev": "Ingeniero frontend sénior",
      SmallClosedWorld: "Desarrollador frontend principal — web y mobile",
      "Satori Mental Health": "Desarrollador frontend",
      Techbeaver: "Desarrollador React Native",
      "SubShare Inc.": "Desarrollador frontend — prácticas web y mobile",
      "Integrated Orange": "Desarrollador frontend en prácticas",
    },
    points: {
      "MTN Nigeria": [
        "Construí el frontend del Digital Partner Portal en Next.js 15, TypeScript, TanStack Query, React Hook Form y Zod.",
        "Me encargué del alta de partners y agregadores, la documentación de servicios y la integración v2, la navegación por rol y los widgets de tareas del panel.",
        "Lo llevé a producción con PRs de GitHub, en on-prem, Azure y OpenShift.",
        "Colaboro con producto, diseño, backend y QA en la integración de API, revisiones de código, planificación de versiones y soporte en producción.",
      ],
      Justrite: [
        "Llevo el cliente React Native de Justrite Superstore: catálogo por tienda, pago con varias pasarelas y BNPL bancario en iOS y Android.",
        "Entregué el checkout, BNPL de Stanbic, Wema y CashConnect, el rendimiento del catálogo y un rediseño de Inicio, Wallet, Carrito, Fidelización y Tú.",
        "Subí el stack nativo a React Native 0.77 (Hermes, páginas de 16 KB en Play) y CodePush OTA sin congelar las entregas semanales.",
        "Implementé pruebas unitarias y de integración con Jest y colaboro con producto, diseño y backend en la calidad de las versiones y la resolución de problemas en producción.",
      ],
      "AB InBev": [
        "Frontend de KUJA Web, el ERP de distribuidores de AB InBev África: Next.js 14, TypeScript, el sistema de diseño KJ, React Query y Redux.",
        "Corté verticales: Super Admin, roles, catálogo y envases, fidelización Awoof, reclamaciones, finanzas y migración de vendedores.",
        "Lo difícil fue el UX con permisos y varias personas, mercados bilingües (inglés y portugués) y tablas y observabilidad fiables en producción.",
        "Participo en decisiones de arquitectura y revisiones de código, llevando funcionalidades desde la integración de API hasta QA y publicación.",
      ],
      SmallClosedWorld: [
        "Lideré el desarrollo de aplicaciones React Native escalables para varios clientes y productos.",
        "Participé en las publicaciones de iOS y Android y en las decisiones técnicas de proyectos en paralelo.",
      ],
      "Satori Mental Health": [
        "Construí aplicaciones React accesibles y adaptables a partir de diseños de Figma, con Redux y React Hooks.",
        "Mejoré el renderizado al eliminar re-renders innecesarios.",
      ],
      Techbeaver: [
        "Desarrollé y mantuve aplicaciones React Native en producción, del desarrollo a la publicación.",
        "Diagnostiqué fallos y apliqué correcciones de estabilidad, fiabilidad y experiencia.",
      ],
      "SubShare Inc.": [
        "Desarrollé aplicaciones interactivas en React y React Native según el producto y el cliente.",
        "Construí componentes reutilizables e interfaces adaptables en escritorio, tableta y móvil.",
      ],
      "Integrated Orange": [
        "Desarrollé webs interactivas y adaptables con HTML, CSS, JavaScript y tooling moderno.",
        "Migré interfaces jQuery heredadas a una arquitectura React, más fácil de mantener y más rápida de evolucionar.",
      ],
    },
  },
  skills: {
    eyebrow: "03 — Capacidades",
    title: "De Figma a la App Store.",
    mobile: "Apps que se sienten nativas, publicadas en las dos tiendas.",
    groups: {
      Languages: "Lenguajes",
      Web: "Web",
      Mobile: "Mobile",
      "State & Data": "Estado y datos",
      Quality: "Calidad",
      Performance: "Rendimiento",
    },
    labels: {
      "Accessibility (WCAG)": "Accesibilidad (WCAG)",
      "Code Reviews": "Revisión de código",
      "Code Splitting": "Code splitting",
      "Lazy Loading": "Carga diferida",
      "Rendering Optimisation": "Optimización del renderizado",
    },
  },
  projects: {
    eyebrow: "Trabajo personal",
    title: "Noches y fines de semana.",
    body: "No son encargos de cliente. Una consola de operaciones, un plano de control para desarrolladores, una tienda, un panel bancario y una app de presupuesto que quería que existiera. Los diseñé y los publiqué yo.",
    web: "web",
    mobile: "mobile",
    read: "Leer el caso de estudio",
    visit: "Ver el sitio",
    crumb: "Proyectos personales",
    home: "Inicio",
  },
  projectCopy: {
    QuantumSpecs: {
      description:
        "Una consola de operaciones que vigila la salud del checkout en cinco regiones y deja que un analista de IA consulte los mismos datos y proponga acciones que tú confirmas antes de tocar producción.",
      detail:
        "Inteligencia de operaciones para Kora, una empresa de pagos panafricana ficticia. Sigue ingresos, fallos, latencia, comercios, incidentes y despliegues. El analista llama herramientas contra Postgres en vivo, no se inventa métricas. Abrir un incidente, avisar a un equipo, revertir checkout-api o desactivar Paystack Nigeria sigue exigiendo un clic humano.",
      metric: "Consola en vivo",
    },
    Pollux: {
      description:
        "Una plataforma de desarrollo oscura y pensada para el teclado: un plano de control al estilo Vercel para publicar, observar y proteger apps.",
      detail:
        "Eliges un proyecto, despliegas desde git y recorres un pipeline en vivo: git → build → tests → análisis → deploy → salud. Los logs están virtualizados por encima de 10.000 filas. Trazas y web vitals viven en observabilidad. La seguridad cubre RBAC, claves de API y un registro de auditoría. Una CLI y el hook de preview en PRs de GitHub usan las mismas APIs. SSE mantiene la interfaz viva. El catálogo lleva nombres de estrellas.",
      metric: "Plataforma en vivo",
    },
    GameBuddy: {
      description:
        "Consolas oficiales, en nairas, vendidas como si el partido fuera esta noche.",
      detail:
        "Una tienda de Lagos para PlayStation, Xbox, Nintendo, PC y Steam Deck: catálogo, ofertas, carrito y fidelización. Entrega al día siguiente, páginas por plataforma y una interfaz de comercio que sigo iterando.",
      metric: "Tienda en vivo",
    },
    Interswitch: {
      description: "Un panel bancario nigeriano que sí se puede leer.",
      detail:
        "Resumen de cuenta en Next.js: saldos de ahorro, cuenta corriente y préstamo en nairas, envío de dinero y actividad reciente. Formularios tipados, TanStack Query y cobertura con Jest y Playwright.",
      metric: "Panel en vivo",
    },
    Flux: {
      description: "Una app de presupuesto que de verdad abro el día de cobro.",
      detail:
        "App de dinero en React Native: línea de gasto, planificación del cobro, fotos de recibos, Face ID y copias locales. Hecha para cómo gasto yo, no una hoja de cálculo con icono de app.",
      metric: "Finanzas personales",
    },
  },
  contact: {
    language: "Idioma de trabajo: inglés. Este sitio también está traducido al francés, alemán y español.",
    eyebrow: "04 — Contacto",
    title: "Construyamos algo que la gente quiera usar.",
    body: "Resido en Lagos, Nigeria (WAT, UTC+1). Busco puestos sénior de frontend y mobile en equipos internacionales, en remoto o con apoyo para reubicación. El horario compartido se puede acordar para cada puesto.",
    resume: "Descargar currículum",
  },
  caseStudy: {
    detailLanguage: "Caso de estudio técnico en inglés",
    visit: "Ver el sitio",
    previous: "Anterior",
    next: "Siguiente",
    onThisPage: "En esta página",
    selectedWork: "Trabajo seleccionado",
    personalProjects: "Proyectos personales",
    demo: "Demo",
    selectedDemo: "Demo seleccionada",
    privateDisclaimer:
      "Sistema privado de producción. Esto es la historia pública, no el código.",
    demoDisclaimer:
      "Una demo seleccionada. La historia pública de un sistema que diseñé y publiqué.",
    home: "Inicio",
    sections: {
      Problem: "Problema",
      Approach: "Enfoque",
      "What shipped": "Qué se entregó",
      "Trade-offs": "Decisiones",
      Quality: "Calidad",
      Result: "Resultado",
      Next: "Después",
      "My role": "Mi papel",
      "Frontend decisions": "Decisiones de frontend",
    },
  },
  notFound: {
    title: "Esta página no existe.",
    body: "Esa URL no es un caso de estudio ni un proyecto de este sitio.",
    home: "Inicio",
    studies: "Casos de estudio",
    projects: "Proyectos personales",
    contact: "Contacto",
    crumb: "Página no encontrada",
    metaTitle: "Página no encontrada",
    metaDescription:
      "Esta página no existe. Vuelve al inicio, lee un caso de estudio o escríbeme.",
  },
} satisfies Dictionary;
