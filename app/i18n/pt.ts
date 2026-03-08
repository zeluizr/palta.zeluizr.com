export default {
  meta: {
    title: "palta — Formatação e validação de dados da América Latina",
    description:
      "Biblioteca TypeScript para formatar e validar CPF, RUT, CUIT, NIT, RUC, moedas, telefones e CEPs. Zero dependencies, tree-shakeable.",
  },

  header: {
    features: "Features",
    countries: "Países",
    install: "Instalar",
    api: "API",
    demo: "Demo",
    roadmap: "Roadmap",
    changelog: "Changelog",
    cta: "Começar agora",
  },

  hero: {
    tagline: "npm install @zeluizr/palta",
    titleLine1: "Formate e valide dados",
    titleLine2: "de toda a",
    titleHighlight: "América Latina",
    subtitle:
      "CPF, RUT, CUIT, NIT, RUC, moedas, telefones e CEPs — tudo em uma biblioteca TypeScript. Zero dependencies. Tree-shakeable.",
    cta: "Começar agora",
    ctaSecondary: "Ver no GitHub",
  },

  features: {
    title: "Tudo que você precisa",
    subtitle: "Uma API consistente para 23 países, 5 tipos de dados.",
    items: {
      documents: {
        title: "Documentos fiscais",
        description:
          "Valide e formate CPF, CNPJ, RUT, CUIT, CUIL, NIT, CC, RUC e DNI com verificação de dígito verificador.",
      },
      currency: {
        title: "Moedas",
        description:
          "Formate e parse ARS, BOB, BRL, CLP, COP, CRC, CUP, DOP, GTQ, HNL, HTG, JMD, MXN, NIO, PAB, PEN, PYG, TTD, USD, UYU, VES e mais com separadores e símbolos corretos.",
      },
      phone: {
        title: "Telefones",
        description:
          "Formate celular e fixo com código de país, DDD e máscara correta para cada região.",
      },
      zipcode: {
        title: "CEPs / Códigos Postais",
        description:
          "Formate e valide códigos postais dos 23 países da América Latina com o padrão correto de cada região.",
      },
      detect: {
        title: "Detecção automática",
        description:
          "Passe qualquer string e o palta detecta automaticamente o país, tipo de documento e se é válido.",
      },
      typescript: {
        title: "TypeScript nativo",
        description:
          "Tipagem forte em toda a API. Autocomplete no editor para cada função, país e formato.",
      },
    },
  },

  countries: {
    title: "23 países, uma API",
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
      name: "Colômbia",
      docs: "NIT · CC · COP · Telefone · Cód. Postal",
    },
    peru: {
      name: "Peru",
      docs: "RUC · DNI · PEN · Telefone · Cód. Postal",
    },
    mexico: {
      name: "México",
      docs: "RFC · CURP · MXN · Telefone · CEP",
    },
    uruguay: {
      name: "Uruguai",
      docs: "CI · RUT · UYU · Telefone · CEP",
    },
    venezuela: {
      name: "Venezuela",
      docs: "CI · RIF · VES · Telefone · CEP",
    },
    ecuador: {
      name: "Equador",
      docs: "CI · RUC · USD · Telefone · CEP",
    },
    bolivia: {
      name: "Bolívia",
      docs: "NIT · CI · BOB · Telefone · CEP",
    },
    paraguay: {
      name: "Paraguai",
      docs: "RUC · CI · PYG · Telefone · CEP",
    },
    dominicana: {
      name: "Rep. Dominicana",
      docs: "Cédula · RNC · DOP · Telefone · CEP",
    },
    costarica: {
      name: "Costa Rica",
      docs: "Cédula · Jurídica · DIMEX · CRC · Telefone · CEP",
    },
    panama: {
      name: "Panamá",
      docs: "RUC · Cédula · PAB · Telefone · CEP",
    },
    guatemala: {
      name: "Guatemala",
      docs: "NIT · DPI · GTQ · Telefone · CEP",
    },
    honduras: {
      name: "Honduras",
      docs: "RTN · DNI · HNL · Telefone · CEP",
    },
    elsalvador: {
      name: "El Salvador",
      docs: "NIT · DUI · USD · Telefone · CEP",
    },
    nicaragua: {
      name: "Nicarágua",
      docs: "Cédula · RUC · NIO · Telefone · CEP",
    },
    cuba: {
      name: "Cuba",
      docs: "Cartão · REEUP · CUP · Telefone · CEP",
    },
    puertorico: {
      name: "Porto Rico",
      docs: "EIN · SSN · USD · Telefone · CEP",
    },
    haiti: {
      name: "Haiti",
      docs: "NIF · CIN · HTG · Telefone · CEP",
    },
    jamaica: {
      name: "Jamaica",
      docs: "TRN · NIN · JMD · Telefone · CEP",
    },
    trinidad: {
      name: "Trinidad e Tobago",
      docs: "TIN · NIS · TTD · Telefone · CEP",
    },
  },

  codePreview: {
    title: "Simples assim",
    subtitle: "Importe o país, use a função. Sem configuração.",
    tabs: {
      documents: "Documentos",
      currency: "Moedas",
      phone: "Telefones",
      detect: "Detectar",
    },
  },

  install: {
    title: "Pronto para usar",
    subtitle: "Instale com seu gerenciador de pacotes favorito.",
    import: "Importe só o que precisa",
    treeShake: "Tree-shakeable — seu bundle só inclui o código que você usa.",
  },

  api: {
    title: "API completa",
    subtitle: "Cada módulo segue a mesma interface consistente.",
    headers: {
      function: "Função",
      description: "Descrição",
      example: "Exemplo",
    },
  },

  changelog: {
    title: "Histórico de versões",
    subtitle: "Acompanhe as novidades, melhorias e correções da biblioteca.",
    badge: {
      new: "Novo",
      improved: "Melhoria",
      fixed: "Correção",
    },
    releases: [
      {
        version: "v1.0.10",
        date: "Março 2026",
        tag: "latest",
        changes: [
          { type: "new", text: "Suporte para Guatemala (gt), Honduras (hn), El Salvador (sv), Nicarágua (ni), Cuba (cu), Porto Rico (pr), Haiti (ht), Jamaica (jm), Trinidad e Tobago (tt) — 9 países do Caribe e América Central." },
        ],
      },
      {
        version: "v1.0.9",
        date: "Março 2026",
        tag: "",
        changes: [
          { type: "new", text: "Suporte para Bolívia (bo), Paraguai (py), República Dominicana (do), Costa Rica (cr), Panamá (pa) — 5 países de prioridade média." },
        ],
      },
      {
        version: "v1.0.8",
        date: "Fevereiro 2026",
        tag: "",
        changes: [
          { type: "new", text: "Suporte ao Uruguai (uy): validação de Cédula de Identidade e RUT, formatação de UYU e telefones com +598." },
        ],
      },
      {
        version: "v1.0.7",
        date: "Fevereiro 2026",
        tag: "",
        changes: [
          { type: "new", text: "Suporte ao Peru (pe): validação de RUC e DNI, formatação de PEN e telefones peruanos." },
          { type: "new", text: "Nova função detect() — identifica automaticamente o país e o tipo do dado informado." },
        ],
      },
      {
        version: "v1.0.6",
        date: "Janeiro 2026",
        tag: "",
        changes: [
          { type: "new", text: "Suporte à Colômbia (co): validação de NIT e Cédula de Ciudadanía (CC), formatação de COP e telefones colombianos." },
          { type: "new", text: "Imports tree-shakeable por país — importe apenas os módulos que seu projeto utiliza." },
        ],
      },
      {
        version: "v1.0.0",
        date: "Janeiro 2026",
        tag: "",
        changes: [
          { type: "new", text: "Lançamento inicial com Brasil (br), Chile (cl), Argentina (ar) — validação de documentos, formatação de moedas, telefones e códigos postais." },
          { type: "new", text: "Zero dependências externas, bundle inferior a 5 kb gzipado." },
        ],
      },
    ],
  },

  roadmap: {
    title: "Missão cumprida",
    subtitle: "Todos os países da América Latina estão suportados no palta. Agora aceitamos melhorias.",
    allCountries: "países da América Latina suportados",
    contribute: "Quer contribuir?",
    contributeSubtitle: "O projeto tem cobertura regional completa. Aceitamos correções de bugs, melhorias de precisão e novos tipos de documentos dentro de países existentes.",
    contributionTypes: {
      bugfix: {
        title: "Correção de bug",
        description: "Algoritmo incorreto, caso extremo não contemplado, formato errado.",
      },
      newdoc: {
        title: "Novo documento",
        description: "Um país já existe mas falta um tipo de documento relevante.",
      },
      tests: {
        title: "Melhoria de testes",
        description: "Mais casos de teste, melhor cobertura para casos extremos.",
      },
    },
    cta: "Abrir uma issue no GitHub",
    ctaSecondary: "Ver código-fonte",
  },

  usedBy: {
    label: "Usado em produção por",
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
    madeWith: "Feito com",
    forLatam: "para a América Latina",
    github: "GitHub",
    npm: "npm",
    license: "MIT",
    loveAndCoffee1: "Feito com muito",
    loveAnd: "amor e",
    coffee: "café por",
    devBy: "Desenvolvido por",
    builtWith: "com",
  },
};
