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
        title: "CEPs",
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
      docs: "RUT · CLP · Telefone · Código Postal",
    },
    argentina: {
      name: "Argentina",
      docs: "CUIT/CUIL · DNI · ARS · Telefone · CPA",
    },
    colombia: {
      name: "Colômbia",
      docs: "NIT · CC · COP · Telefone · Código Postal",
    },
    peru: {
      name: "Peru",
      docs: "RUC · DNI · PEN · Telefone · Código Postal",
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
  },
};
