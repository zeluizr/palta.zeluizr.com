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
    roadmap: "Roadmap",
    cta: "Começar agora",
  },

  hero: {
    tagline: "npm install palta",
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
    subtitle: "Uma API consistente para 5 países, 5 tipos de dados.",
    items: {
      documents: {
        title: "Documentos fiscais",
        description:
          "Valide e formate CPF, CNPJ, RUT, CUIT, CUIL, NIT, CC, RUC e DNI com verificação de dígito verificador.",
      },
      currency: {
        title: "Moedas",
        description:
          "Formate e parse BRL, CLP, ARS, COP e PEN com separadores e símbolos corretos de cada país.",
      },
      phone: {
        title: "Telefones",
        description:
          "Formate celular e fixo com código de país, DDD e máscara correta para cada região.",
      },
      zipcode: {
        title: "CEPs / Códigos Postais",
        description:
          "Formate e valide códigos postais do Brasil, Chile, Argentina, Colômbia e Peru.",
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
    title: "5 países, uma API",
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

  roadmap: {
    title: "Roadmap",
    subtitle: "A palta cresce com a comunidade. Veja o que vem por aí e ajude a moldar o futuro da biblioteca.",
    cta: "Contribuir no GitHub",
    contribute: "Quer ajudar a construir o suporte para o seu país?",
    phases: {
      next: {
        label: "Em breve",
        description: "Países e validadores em desenvolvimento ativo, com previsão de lançamento nos próximos meses.",
      },
      planned: {
        label: "Planejado",
        description: "Funcionalidades e países já mapeados, aguardando contribuições ou priorização no backlog.",
      },
      community: {
        label: "Comunidade",
        description: "Aberto a PRs! Se o seu país ainda não está aqui, você pode ser o primeiro a implementá-lo.",
      },
    },
    countries: {
      mexico: { name: "México", docs: "CURP · RFC · MXN · Telefone · CEP" },
      uruguay: { name: "Uruguai", docs: "Cédula · RUT · UYU · Telefone · CEP" },
      ecuador: { name: "Equador", docs: "Cédula · RUC · USD · Telefone · CEP" },
      venezuela: { name: "Venezuela", docs: "Cédula V/E · RIF · VES · Telefone" },
      bolivia: { name: "Bolívia", docs: "CI · NIT · BOB · Telefone · CEP" },
      paraguay: { name: "Paraguai", docs: "CI · RUC · PYG · Telefone · CEP" },
      dominicana: { name: "Rep. Dominicana", docs: "Cédula · RNC · DOP · Telefone" },
      costarica: { name: "Costa Rica", docs: "Cédula · DIMEX · CRC · Telefone" },
      guatemala: { name: "Guatemala", docs: "DPI · NIT · GTQ · Telefone" },
      honduras: { name: "Honduras", docs: "Identidade · RTN · HNL · Telefone" },
      elsalvador: { name: "El Salvador", docs: "DUI · NIT · USD · Telefone" },
      nicaragua: { name: "Nicarágua", docs: "Cédula · RUC · NIO · Telefone" },
      panama: { name: "Panamá", docs: "Cédula · RUC · PAB · Telefone" },
      cuba: { name: "Cuba", docs: "Carnet CI · CUP · Telefone" },
    },
  },

  usedBy: {
    label: "Usado em produção por",
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
