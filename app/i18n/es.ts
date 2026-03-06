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
    cta: "Comenzar ahora",
  },

  hero: {
    tagline: "npm install palta",
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
    byCommente: "Un producto de",
    builtWith: "creado con",
  },
};
