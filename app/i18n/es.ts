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
    subtitle: "Una API consistente para 5 países, 5 tipos de datos.",
    items: {
      documents: {
        title: "Documentos fiscales",
        description:
          "Valida y formatea RUT, CUIT, CUIL, CPF, CNPJ, NIT, CC, RUC y DNI con verificación de dígito verificador.",
      },
      currency: {
        title: "Monedas",
        description:
          "Formatea y parsea CLP, ARS, BRL, COP y PEN con separadores y símbolos correctos de cada país.",
      },
      phone: {
        title: "Teléfonos",
        description:
          "Formatea celular y fijo con código de país, prefijo y máscara correcta para cada región.",
      },
      zipcode: {
        title: "Códigos postales",
        description:
          "Formatea y valida códigos postales de Chile, Argentina, Brasil, Colombia y Perú.",
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
    title: "5 países, una API",
    brasil: {
      name: "Brasil",
      docs: "CPF · CNPJ · BRL · Telefone · CEP",
    },
    chile: {
      name: "Chile",
      docs: "RUT · CLP · Telefone · Cód. Postal",
    },
    argentina: {
      name: "Argentina",
      docs: "CUIT/CUIL · DNI · ARS · Tel · CPA",
    },
    colombia: {
      name: "Colombia",
      docs: "NIT · CC · COP · Telefone · Cód. Postal",
    },
    peru: {
      name: "Perú",
      docs: "RUC · DNI · PEN · Telefone · Cód. Postal",
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
        version: "v1.2.0",
        date: "Marzo 2026",
        tag: "latest",
        changes: [
          { type: "new", text: "Soporte Perú: validación de RUC, DNI, formateo de PEN y teléfonos peruanos." },
          { type: "new", text: "Nueva función detect() — detecta automáticamente el país y el tipo de dato a partir del valor ingresado." },
          { type: "improved", text: "Mejor inferencia de tipos en TypeScript: retornos más precisos según el país y el método utilizado." },
        ],
      },
      {
        version: "v1.1.0",
        date: "Febrero 2026",
        tag: "",
        changes: [
          { type: "new", text: "Soporte Colombia: validación de NIT y Cédula de Ciudadanía, formateo de COP y teléfonos colombianos." },
          { type: "new", text: "Imports tree-shakeable por país: importá solo lo que necesitás y reducí el bundle al mínimo." },
          { type: "improved", text: "Validación del dígito verificador mejorada para mayor precisión en RUT, CUIT/CUIL y NIT." },
        ],
      },
      {
        version: "v1.0.0",
        date: "Enero 2026",
        tag: "",
        changes: [
          { type: "new", text: "Soporte Brasil: validación de CPF y CNPJ, formateo de BRL, teléfonos y CEP." },
          { type: "new", text: "Soporte Chile: validación de RUT, formateo de CLP, teléfonos y código postal." },
          { type: "new", text: "Soporte Argentina: validación de CUIT/CUIL y DNI, formateo de ARS, teléfonos y CPA." },
          { type: "new", text: "Sin dependencias externas y menos de 5 kb comprimido en gzip." },
        ],
      },
    ],
  },

  roadmap: {
    title: "Hoja de ruta",
    subtitle: "palta crece con la comunidad. ¿Tenés un país o documento que falta? Abrí un issue o mandá un PR.",
    cta: "Contribuir en GitHub",
    contribute: "¿Querés ayudar?",
    phases: {
      next: {
        label: "Próximo",
        description: "Países y validadores en desarrollo activo, listos para salir en la próxima versión.",
      },
      planned: {
        label: "Planificado",
        description: "Funcionalidades confirmadas en el backlog, pendientes de implementación.",
      },
      community: {
        label: "Comunidad",
        description: "Propuestas abiertas que necesitan mantenedores voluntarios para avanzar.",
      },
    },
    countries: {
      mexico: { name: "México", docs: "CURP · RFC · MXN · Teléfono · CP" },
      uruguay: { name: "Uruguay", docs: "Cédula · RUT · UYU · Teléfono · CP" },
      ecuador: { name: "Ecuador", docs: "Cédula · RUC · USD · Teléfono · CP" },
      venezuela: { name: "Venezuela", docs: "Cédula V/E · RIF · VES · Teléfono" },
      bolivia: { name: "Bolivia", docs: "CI · NIT · BOB · Teléfono · CP" },
      paraguay: { name: "Paraguay", docs: "CI · RUC · PYG · Teléfono · CP" },
      dominicana: { name: "Rep. Dominicana", docs: "Cédula · RNC · DOP · Teléfono" },
      costarica: { name: "Costa Rica", docs: "Cédula · DIMEX · CRC · Teléfono" },
      guatemala: { name: "Guatemala", docs: "DPI · NIT · GTQ · Teléfono" },
      honduras: { name: "Honduras", docs: "Identidad · RTN · HNL · Teléfono" },
      elsalvador: { name: "El Salvador", docs: "DUI · NIT · USD · Teléfono" },
      nicaragua: { name: "Nicaragua", docs: "Cédula · RUC · NIO · Teléfono" },
      panama: { name: "Panamá", docs: "Cédula · RUC · PAB · Teléfono" },
      cuba: { name: "Cuba", docs: "Carnet CI · CUP · Teléfono" },
    },
  },

  usedBy: {
    label: "Usado en producción por",
    sponsors: "Sponsors",
  },

  stats: {
    zeroDeps: "Zero dependencies",
    treeShakeable: "Tree-shakeable",
    typescript: "TypeScript strict",
    countries: "5 países",
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
