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
    roadmap: "Roadmap",
    cta: "Get started",
  },

  hero: {
    tagline: "npm install @zeluizr/palta",
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

  roadmap: {
    title: "What's coming next",
    subtitle: "palta is growing — and the community shapes what gets built. Vote on issues, open a PR, or suggest a new country.",
    cta: "Contribute on GitHub",
    contribute: "Want to help?",
    phases: {
      next: {
        label: "Up next",
        description: "Countries already scoped and actively being implemented.",
      },
      planned: {
        label: "Planned",
        description: "On the roadmap — contributions welcome to speed things up.",
      },
      community: {
        label: "Community",
        description: "Requested by the community. Open a PR to claim one.",
      },
    },
    countries: {
      mexico: { name: "Mexico", docs: "CURP · RFC · MXN · Phone · ZIP" },
      uruguay: { name: "Uruguay", docs: "Cédula · RUT · UYU · Phone · ZIP" },
      ecuador: { name: "Ecuador", docs: "Cédula · RUC · USD · Phone · ZIP" },
      venezuela: { name: "Venezuela", docs: "Cédula V/E · RIF · VES · Phone" },
      bolivia: { name: "Bolivia", docs: "CI · NIT · BOB · Phone · ZIP" },
      paraguay: { name: "Paraguay", docs: "CI · RUC · PYG · Phone · ZIP" },
      dominicana: { name: "Dominican Rep.", docs: "Cédula · RNC · DOP · Phone" },
      costarica: { name: "Costa Rica", docs: "Cédula · DIMEX · CRC · Phone" },
      guatemala: { name: "Guatemala", docs: "DPI · NIT · GTQ · Phone" },
      honduras: { name: "Honduras", docs: "Identidad · RTN · HNL · Phone" },
      elsalvador: { name: "El Salvador", docs: "DUI · NIT · USD · Phone" },
      nicaragua: { name: "Nicaragua", docs: "Cédula · RUC · NIO · Phone" },
      panama: { name: "Panama", docs: "Cédula · RUC · PAB · Phone" },
      cuba: { name: "Cuba", docs: "Carnet CI · CUP · Phone" },
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
    loveAndCoffee1: "Made with lots of",
    loveAnd: "love and",
    coffee: "coffee by",
    devBy: "Developed by",
    builtWith: "with",
  },
};
