export default {
  meta: {
    title: "palta — Formateo y validación de datos de América Latina",
    description:
      "Biblioteca TypeScript para formatear y validar RUT, CUIT, CPF, NIT, RUC, monedas, teléfonos y códigos postales. Zero dependencies, tree-shakeable.",
  },

  header: {
    features: "Features",
    countries: "Países",
    install: "Instalar",
    api: "API",
    demo: "Demo",
    roadmap: "Roadmap",
    changelog: "Changelog",
    cta: "Comenzar ahora",
  },

  hero: {
    tagline: "npm install @zeluizr/palta",
    titleLine1: "Formatea y valida datos",
    titleLine2: "de toda",
    titleHighlight: "América Latina",
    subtitle:
      "RUT, CUIT, CPF, NIT, RUC, monedas, teléfonos y códigos postales — todo en una biblioteca TypeScript. Zero dependencies. Tree-shakeable.",
    cta: "Comenzar ahora",
    ctaSecondary: "Ver en GitHub",
  },

  features: {
    title: "Todo lo que necesitas",
    subtitle: "Una API consistente para 23 países, 5 tipos de datos.",
    items: {
      documents: {
        title: "Documentos fiscales",
        description:
          "Valida y formatea RUT, CUIT, CUIL, CPF, CNPJ, NIT, CC, RUC y DNI con verificación de dígito verificador.",
      },
      currency: {
        title: "Monedas",
        description:
          "Formatea y parsea ARS, BOB, BRL, CLP, COP, CRC, CUP, DOP, GTQ, HNL, HTG, JMD, MXN, NIO, PAB, PEN, PYG, TTD, USD, UYU, VES y más con separadores y símbolos correctos.",
      },
      phone: {
        title: "Teléfonos",
        description:
          "Formatea celular y fijo con código de país, prefijo y máscara correcta para cada región.",
      },
      zipcode: {
        title: "Códigos postales",
        description:
          "Formatea y valida códigos postales de los 23 países de América Latina con el patrón correcto de cada región.",
      },
      detect: {
        title: "Detección automática",
        description:
          "Pasa cualquier string y palta detecta automáticamente el país, tipo de documento y si es válido.",
      },
      typescript: {
        title: "TypeScript nativo",
        description:
          "Tipado fuerte en toda la API. Autocomplete en el editor para cada función, país y formato.",
      },
    },
  },

  countries: {
    title: "23 países, una API",
    brasil: {
      name: "Brasil",
      docs: "CPF · CNPJ · BRL · Teléfono · CEP",
    },
    chile: {
      name: "Chile",
      docs: "RUT · CLP · Teléfono · Cód. Postal",
    },
    argentina: {
      name: "Argentina",
      docs: "CUIT/CUIL · DNI · ARS · Tel · CPA",
    },
    colombia: {
      name: "Colombia",
      docs: "NIT · CC · COP · Teléfono · Cód. Postal",
    },
    peru: {
      name: "Perú",
      docs: "RUC · DNI · PEN · Teléfono · Cód. Postal",
    },
    mexico: {
      name: "México",
      docs: "RFC · CURP · MXN · Teléfono · CP",
    },
    uruguay: {
      name: "Uruguay",
      docs: "CI · RUT · UYU · Teléfono · CP",
    },
    venezuela: {
      name: "Venezuela",
      docs: "CI · RIF · VES · Teléfono · CP",
    },
    ecuador: {
      name: "Ecuador",
      docs: "CI · RUC · USD · Teléfono · CP",
    },
    bolivia: {
      name: "Bolivia",
      docs: "NIT · CI · BOB · Teléfono · CP",
    },
    paraguay: {
      name: "Paraguay",
      docs: "RUC · CI · PYG · Teléfono · CP",
    },
    dominicana: {
      name: "Rep. Dominicana",
      docs: "Cédula · RNC · DOP · Teléfono · CP",
    },
    costarica: {
      name: "Costa Rica",
      docs: "Cédula · Jurídica · DIMEX · CRC · Teléfono · CP",
    },
    panama: {
      name: "Panamá",
      docs: "RUC · Cédula · PAB · Teléfono · CP",
    },
    guatemala: {
      name: "Guatemala",
      docs: "NIT · DPI · GTQ · Teléfono · CP",
    },
    honduras: {
      name: "Honduras",
      docs: "RTN · DNI · HNL · Teléfono · CP",
    },
    elsalvador: {
      name: "El Salvador",
      docs: "NIT · DUI · USD · Teléfono · CP",
    },
    nicaragua: {
      name: "Nicaragua",
      docs: "Cédula · RUC · NIO · Teléfono · CP",
    },
    cuba: {
      name: "Cuba",
      docs: "Carnet · REEUP · CUP · Teléfono · CP",
    },
    puertorico: {
      name: "Puerto Rico",
      docs: "EIN · SSN · USD · Teléfono · CP",
    },
    haiti: {
      name: "Haití",
      docs: "NIF · CIN · HTG · Teléfono · CP",
    },
    jamaica: {
      name: "Jamaica",
      docs: "TRN · NIN · JMD · Teléfono · CP",
    },
    trinidad: {
      name: "Trinidad y Tobago",
      docs: "TIN · NIS · TTD · Teléfono · CP",
    },
  },

  codePreview: {
    title: "Así de simple",
    subtitle: "Importa el país, usa la función. Sin configuración.",
    tabs: {
      documents: "Documentos",
      currency: "Monedas",
      phone: "Teléfonos",
      detect: "Detectar",
    },
  },

  install: {
    title: "Listo para usar",
    subtitle: "Instala con tu gestor de paquetes favorito.",
    import: "Importa solo lo que necesitas",
    treeShake: "Tree-shakeable — tu bundle solo incluye el código que usas.",
  },

  api: {
    title: "API completa",
    subtitle: "Cada módulo sigue la misma interfaz consistente.",
    headers: {
      function: "Función",
      description: "Descripción",
      example: "Ejemplo",
    },
  },

  changelog: {
    title: "Historial de cambios",
    subtitle: "Seguí la evolución de la biblioteca versión a versión.",
    badge: {
      new: "Nuevo",
      improved: "Mejora",
      fixed: "Corrección",
    },
    releases: [
      {
        version: "v1.0.10",
        date: "Marzo 2026",
        tag: "latest",
        changes: [
          { type: "new", text: "Soporte Guatemala (gt), Honduras (hn), El Salvador (sv), Nicaragua (ni), Cuba (cu), Puerto Rico (pr), Haití (ht), Jamaica (jm), Trinidad y Tobago (tt) — 9 países del Caribe y Centroamérica." },
        ],
      },
      {
        version: "v1.0.9",
        date: "Marzo 2026",
        tag: "",
        changes: [
          { type: "new", text: "Soporte Bolivia (bo), Paraguay (py), República Dominicana (do), Costa Rica (cr), Panamá (pa) — 5 países de prioridad media." },
        ],
      },
      {
        version: "v1.0.8",
        date: "Febrero 2026",
        tag: "",
        changes: [
          { type: "new", text: "Soporte Uruguay (uy): validación de Cédula de Identidad y RUT, formateo de UYU y teléfonos con +598." },
        ],
      },
      {
        version: "v1.0.7",
        date: "Febrero 2026",
        tag: "",
        changes: [
          { type: "new", text: "Soporte Perú (pe): validación de RUC, DNI, formateo de PEN y teléfonos peruanos." },
          { type: "new", text: "Nueva función detect() — detecta automáticamente el país y el tipo de dato a partir del valor ingresado." },
        ],
      },
      {
        version: "v1.0.6",
        date: "Enero 2026",
        tag: "",
        changes: [
          { type: "new", text: "Soporte Colombia (co): validación de NIT y Cédula de Ciudadanía, formateo de COP y teléfonos colombianos." },
          { type: "new", text: "Imports tree-shakeable por país: importá solo lo que necesitás y reducí el bundle al mínimo." },
        ],
      },
      {
        version: "v1.0.0",
        date: "Enero 2026",
        tag: "",
        changes: [
          { type: "new", text: "Soporte Brasil (br), Chile (cl), Argentina (ar) — lanzamiento inicial con validación de documentos, formateo de monedas, teléfonos y códigos postales." },
          { type: "new", text: "Sin dependencias externas y menos de 5 kb comprimido en gzip." },
        ],
      },
    ],
  },

  roadmap: {
    title: "Misión cumplida",
    subtitle: "Todos los países de América Latina ya están soportados en palta. Ahora aceptamos mejoras.",
    allCountries: "países de América Latina soportados",
    contribute: "¿Querés contribuir?",
    contributeSubtitle: "El proyecto está completo en cobertura regional. Aceptamos correcciones de bugs, mejoras de precisión y nuevos tipos de documentos dentro de países existentes.",
    contributionTypes: {
      bugfix: {
        title: "Bug fix",
        description: "Algoritmo incorrecto, edge case no contemplado, formato errado.",
      },
      newdoc: {
        title: "Nuevo documento",
        description: "Un país ya existe pero le falta un tipo de documento relevante.",
      },
      tests: {
        title: "Mejora de tests",
        description: "Más casos de prueba, mejora de cobertura en casos extremos.",
      },
    },
    cta: "Abrir un issue en GitHub",
    ctaSecondary: "Ver el código fuente",
  },

  usedBy: {
    label: "Usado en producción por",
    sponsors: "Sponsors",
  },

  stats: {
    zeroDeps: "Zero dependencies",
    treeShakeable: "Tree-shakeable",
    typescript: "TypeScript strict",
    countries: "23 países",
    bundle: "< 5kb gzipped",
    license: "MIT License",
  },

  footer: {
    madeWith: "Hecho con",
    forLatam: "para América Latina",
    github: "GitHub",
    npm: "npm",
    license: "MIT",
    loveAndCoffee1: "Hecho con mucho",
    loveAnd: "amor y",
    coffee: "café por",
    devBy: "Desarrollado por",
    builtWith: "con",
  },
};
