export default {
  meta: {
    title: "palta — Format & validate Latin American data",
    description:
      "TypeScript library to format and validate CPF, RUT, CUIT, NIT, RUC, currencies, phones and zip codes. Zero dependencies, tree-shakeable.",
  },

  header: {
    features: "Features",
    countries: "Countries",
    install: "Install",
    api: "API",
    cta: "Get started",
  },

  hero: {
    tagline: "npm install palta",
    titleLine1: "Format and validate data",
    titleLine2: "across all of",
    titleHighlight: "Latin America",
    subtitle:
      "CPF, RUT, CUIT, NIT, RUC, currencies, phones and zip codes — all in one TypeScript library. Zero dependencies. Tree-shakeable.",
    cta: "Get started",
    ctaSecondary: "View on GitHub",
  },

  features: {
    title: "Everything you need",
    subtitle: "A consistent API for 5 countries, 5 data types.",
    items: {
      documents: {
        title: "Tax documents",
        description:
          "Validate and format CPF, CNPJ, RUT, CUIT, CUIL, NIT, CC, RUC and DNI with check digit verification.",
      },
      currency: {
        title: "Currencies",
        description:
          "Format and parse BRL, CLP, ARS, COP and PEN with correct separators and symbols for each country.",
      },
      phone: {
        title: "Phone numbers",
        description:
          "Format mobile and landline numbers with country code, prefix and correct mask for each region.",
      },
      zipcode: {
        title: "Zip codes",
        description:
          "Format and validate zip codes for Brazil, Chile, Argentina, Colombia and Peru.",
      },
      detect: {
        title: "Auto detection",
        description:
          "Pass any string and palta automatically detects the country, document type and whether it's valid.",
      },
      typescript: {
        title: "Native TypeScript",
        description:
          "Strong typing across the entire API. Autocomplete in your editor for every function, country and format.",
      },
    },
  },

  countries: {
    title: "5 countries, one API",
    brasil: {
      name: "Brazil",
      docs: "CPF · CNPJ · BRL · Phone · ZIP",
    },
    chile: {
      name: "Chile",
      docs: "RUT · CLP · Phone · Postal Code",
    },
    argentina: {
      name: "Argentina",
      docs: "CUIT/CUIL · DNI · ARS · Phone · CPA",
    },
    colombia: {
      name: "Colombia",
      docs: "NIT · CC · COP · Phone · Postal Code",
    },
    peru: {
      name: "Peru",
      docs: "RUC · DNI · PEN · Phone · Postal Code",
    },
  },

  codePreview: {
    title: "That simple",
    subtitle: "Import the country, use the function. No config.",
    tabs: {
      documents: "Documents",
      currency: "Currencies",
      phone: "Phones",
      detect: "Detect",
    },
  },

  install: {
    title: "Ready to use",
    subtitle: "Install with your favorite package manager.",
    import: "Import only what you need",
    treeShake: "Tree-shakeable — your bundle only includes the code you use.",
  },

  api: {
    title: "Full API",
    subtitle: "Every module follows the same consistent interface.",
    headers: {
      function: "Function",
      description: "Description",
      example: "Example",
    },
  },

  usedBy: {
    label: "Used in production by",
    sponsors: "Sponsors",
  },

  stats: {
    zeroDeps: "Zero dependencies",
    treeShakeable: "Tree-shakeable",
    typescript: "TypeScript strict",
    countries: "5 countries",
    bundle: "< 5kb gzipped",
    license: "MIT License",
  },

  footer: {
    madeWith: "Made with",
    forLatam: "for Latin America",
    github: "GitHub",
    npm: "npm",
    license: "MIT",
    byCommente: "A product by",
    builtWith: "built with",
  },
};
