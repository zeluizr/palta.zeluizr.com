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
    demo: "Demo",
    roadmap: "Roadmap",
    changelog: "Changelog",
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
    subtitle: "A consistent API for 23 countries, 5 data types.",
    items: {
      documents: {
        title: "Tax documents",
        description:
          "Validate and format CPF, CNPJ, RUT, CUIT, CUIL, NIT, CC, RUC and DNI with check digit verification.",
      },
      currency: {
        title: "Currencies",
        description:
          "Format and parse ARS, BOB, BRL, CLP, COP, CRC, CUP, DOP, GTQ, HNL, HTG, JMD, MXN, NIO, PAB, PEN, PYG, TTD, USD, UYU, VES and more with correct separators and symbols.",
      },
      phone: {
        title: "Phone numbers",
        description:
          "Format mobile and landline numbers with country code, prefix and correct mask for each region.",
      },
      zipcode: {
        title: "Zip codes",
        description:
          "Format and validate zip codes for all 23 Latin American countries with the correct pattern for each region.",
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
    title: "23 countries, one API",
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
    mexico: {
      name: "Mexico",
      docs: "RFC · CURP · MXN · Phone · ZIP",
    },
    uruguay: {
      name: "Uruguay",
      docs: "CI · RUT · UYU · Phone · ZIP",
    },
    venezuela: {
      name: "Venezuela",
      docs: "CI · RIF · VES · Phone · ZIP",
    },
    ecuador: {
      name: "Ecuador",
      docs: "CI · RUC · USD · Phone · ZIP",
    },
    bolivia: {
      name: "Bolivia",
      docs: "NIT · CI · BOB · Phone · ZIP",
    },
    paraguay: {
      name: "Paraguay",
      docs: "RUC · CI · PYG · Phone · ZIP",
    },
    dominicana: {
      name: "Dominican Rep.",
      docs: "Cédula · RNC · DOP · Phone · ZIP",
    },
    costarica: {
      name: "Costa Rica",
      docs: "Cédula · Legal ID · DIMEX · CRC · Phone · ZIP",
    },
    panama: {
      name: "Panama",
      docs: "RUC · Cédula · PAB · Phone · ZIP",
    },
    guatemala: {
      name: "Guatemala",
      docs: "NIT · DPI · GTQ · Phone · ZIP",
    },
    honduras: {
      name: "Honduras",
      docs: "RTN · DNI · HNL · Phone · ZIP",
    },
    elsalvador: {
      name: "El Salvador",
      docs: "NIT · DUI · USD · Phone · ZIP",
    },
    nicaragua: {
      name: "Nicaragua",
      docs: "Cédula · RUC · NIO · Phone · ZIP",
    },
    cuba: {
      name: "Cuba",
      docs: "Identity Card · REEUP · CUP · Phone · ZIP",
    },
    puertorico: {
      name: "Puerto Rico",
      docs: "EIN · SSN · USD · Phone · ZIP",
    },
    haiti: {
      name: "Haiti",
      docs: "NIF · CIN · HTG · Phone · ZIP",
    },
    jamaica: {
      name: "Jamaica",
      docs: "TRN · NIN · JMD · Phone · ZIP",
    },
    trinidad: {
      name: "Trinidad & Tobago",
      docs: "TIN · NIS · TTD · Phone · ZIP",
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

  changelog: {
    title: "Changelog",
    subtitle: "Every release, every improvement — tracked and documented.",
    badge: {
      new: "New",
      improved: "Improved",
      fixed: "Fixed",
    },
    releases: [
      {
        version: "v1.0.10",
        date: "March 2026",
        tag: "latest",
        changes: [
          { type: "new", text: "Support for Guatemala (gt), Honduras (hn), El Salvador (sv), Nicaragua (ni), Cuba (cu), Puerto Rico (pr), Haiti (ht), Jamaica (jm), Trinidad & Tobago (tt) — 9 Caribbean and Central American countries." },
        ],
      },
      {
        version: "v1.0.9",
        date: "March 2026",
        tag: "",
        changes: [
          { type: "new", text: "Support for Bolivia (bo), Paraguay (py), Dominican Republic (do), Costa Rica (cr), Panama (pa) — 5 medium-priority countries." },
        ],
      },
      {
        version: "v1.0.8",
        date: "February 2026",
        tag: "",
        changes: [
          { type: "new", text: "Uruguay (uy) support: Cédula de Identidad and RUT validation, UYU currency formatting, and +598 phone number parsing." },
        ],
      },
      {
        version: "v1.0.7",
        date: "February 2026",
        tag: "",
        changes: [
          { type: "new", text: "Peru (pe) support: RUC and DNI validation, PEN currency formatting, and phone number parsing." },
          { type: "new", text: "Introduced detect() — automatically identifies country and document type from a raw input string." },
        ],
      },
      {
        version: "v1.0.6",
        date: "January 2026",
        tag: "",
        changes: [
          { type: "new", text: "Colombia (co) support: NIT and Cédula de Ciudadanía validation, COP currency formatting, and phone number parsing." },
          { type: "new", text: "Tree-shakeable per-country imports — bundle only the countries your project actually uses." },
        ],
      },
      {
        version: "v1.0.0",
        date: "January 2026",
        tag: "",
        changes: [
          { type: "new", text: "Initial release with Brazil (br), Chile (cl), Argentina (ar) — document validation, currency formatting, phone numbers and postal codes." },
          { type: "new", text: "Zero external dependencies and under 5kb gzipped." },
        ],
      },
    ],
  },

  roadmap: {
    title: "Mission accomplished",
    subtitle: "Every Latin American country is supported in palta. Now we welcome improvements.",
    allCountries: "Latin American countries supported",
    contribute: "Want to contribute?",
    contributeSubtitle: "The project has complete regional coverage. We accept bug fixes, accuracy improvements, and new document types within existing countries.",
    contributionTypes: {
      bugfix: {
        title: "Bug fix",
        description: "Incorrect algorithm, edge case not covered, wrong format.",
      },
      newdoc: {
        title: "New document",
        description: "A country already exists but is missing a relevant document type.",
      },
      tests: {
        title: "Test improvements",
        description: "More test cases, better coverage for edge cases.",
      },
    },
    cta: "Open an issue on GitHub",
    ctaSecondary: "View source code",
  },

  usedBy: {
    label: "Used in production by",
    sponsors: "Sponsors",
  },

  stats: {
    zeroDeps: "Zero dependencies",
    treeShakeable: "Tree-shakeable",
    typescript: "TypeScript strict",
    countries: "23 countries",
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
