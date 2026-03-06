# palta — Landing Page · Instruções para Claude CLI

## Visão Geral

Crie uma landing page single-page para o pacote npm `palta` — uma biblioteca TypeScript de formatação e validação de dados da América Latina (CPF, RUT, CUIT, NIT, RUC, moedas, telefones, CEPs).

A página deve ser bilíngue (Español + Português) com i18n, **dark-only** (sem modo light), construída com React Router v7 (framework mode, SSR), TailwindCSS v4, e deploy-ready para Vercel ou Railway. O idioma padrão é **Español (ES)**.

---

## Tech Stack Exata

```json
{
  "dependencies": {
    "react": "^19",
    "react-dom": "^19",
    "react-router": "^7.12",
    "@react-router/node": "^7.12",
    "@react-router/serve": "^7.12",
    "i18next": "^25",
    "react-i18next": "^15",
    "i18next-browser-languagedetector": "^8",
    "lucide-react": "^0.577",
    "motion": "^12",
    "clsx": "^2",
    "tailwind-merge": "^3",
    "isbot": "^5"
  },
  "devDependencies": {
    "@react-router/dev": "^7.12",
    "@tailwindcss/vite": "^4",
    "tailwindcss": "^4",
    "typescript": "^5.9",
    "vite": "^7",
    "vite-tsconfig-paths": "^5"
  }
}
```

---

## Estrutura do Projeto

```
palta-landing/
├── app/
│   ├── root.tsx                      # Layout raiz (html, head, body, fonts)
│   ├── routes.ts                     # Definição de rotas
│   ├── routes/
│   │   └── home.tsx                  # Página principal (landing completa)
│   ├── components/
│   │   ├── header.tsx                # Navbar fixa com theme toggle + language switcher
│   │   ├── hero.tsx                  # Hero section
│   │   ├── features.tsx              # Grid de features (6 cards)
│   │   ├── code-preview.tsx          # Exemplos de código interativos com tabs
│   │   ├── countries.tsx             # Cards dos 5 países com detalhes
│   │   ├── install.tsx               # Seção de instalação com tabs (6 package managers)
│   │   ├── api-table.tsx             # Tabela da API por módulo
│   │   ├── stats-bar.tsx             # Barra de badges (zero deps, tree-shake, etc.)
│   │   ├── footer.tsx                # Footer com links
│   │   ├── theme-toggle.tsx          # Botão dark/light mode (Sun/Moon)
│   │   └── language-switcher.tsx     # Botão PT/ES
│   ├── i18n/
│   │   ├── config.ts                 # Configuração i18next
│   │   ├── pt.ts                     # Traduções português
│   │   └── es.ts                     # Traduções español
│   ├── lib/
│   │   └── utils.ts                  # cn() helper (clsx + tailwind-merge)
│   └── app.css                       # Tailwind + tema customizado
├── public/
│   └── favicon.svg                   # Ícone de abacate/palta 🥑
├── react-router.config.ts
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## Configuração Base

### react-router.config.ts

```ts
import type { Config } from "@react-router/dev/config";

export default {
  ssr: true,
} satisfies Config;
```

### vite.config.ts

```ts
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  server: { port: 3000 },
});
```

### tsconfig.json

- `strict: true`
- `target: "ES2022"`
- `module: "ES2022"`
- Path alias: `~/*` → `./app/*`

### routes.ts

```ts
import { type RouteConfig, index } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
] satisfies RouteConfig;
```

---

## Design System

### app.css

Usar TailwindCSS v4 com `@theme` para definir tokens customizados:

```css
@import "tailwindcss";

@theme {
  /* Paleta principal — verde abacate/palta */
  --color-palta-50: #f4faf0;
  --color-palta-100: #e6f5dc;
  --color-palta-200: #ceebbc;
  --color-palta-300: #aedd8f;
  --color-palta-400: #8bcb62;
  --color-palta-500: #6ab344;
  --color-palta-600: #518f32;
  --color-palta-700: #3f6e29;
  --color-palta-800: #355825;
  --color-palta-900: #2d4b22;
  --color-palta-950: #15290e;

  /* Neutros */
  --color-neutral-50: #fafafa;
  --color-neutral-100: #f5f5f5;
  --color-neutral-200: #e5e5e5;
  --color-neutral-300: #d4d4d4;
  --color-neutral-400: #a3a3a3;
  --color-neutral-500: #737373;
  --color-neutral-600: #525252;
  --color-neutral-700: #404040;
  --color-neutral-800: #262626;
  --color-neutral-900: #171717;
  --color-neutral-950: #0a0a0a;

  /* Cores por país (para os cards) */
  --color-brasil: #009c3b;
  --color-chile: #d52b1e;
  --color-argentina: #75aadb;
  --color-colombia: #fcd116;
  --color-peru: #d91023;

  /* Font */
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;

  /* Animações */
  --animate-fade-in: fade-in 0.5s ease-out;
  --animate-slide-up: slide-up 0.5s ease-out;
  --animate-pulse-soft: pulse-soft 2s ease-in-out infinite;
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slide-up {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes pulse-soft {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}
```

### Dark Mode Only

A landing é **dark-only** — sem toggle de tema, sem modo light. Aplicar a classe `dark` permanentemente no `<html>` ou usar cores escuras diretamente.

**Paleta de cores (aplicar diretamente, sem variantes `dark:`):**

| Contexto | Classe |
|---|---|
| Body background | `bg-neutral-950` |
| Body text | `text-neutral-100` |
| Cards background | `bg-neutral-900` |
| Card borders | `border-neutral-800` |
| Subtle text | `text-neutral-400` |
| Section alt bg | `bg-neutral-900` |
| Header bg | `bg-neutral-950/80` |
| Header border | `border-neutral-800` |
| Hover links | `hover:text-white` |
| CTA header | `bg-white text-neutral-900` |
| Grid pattern | `radial-gradient(circle, #333 1px, transparent 1px)` |
| Hero gradient | `from-palta-950/30 to-neutral-950` |
| Palta accent | `text-palta-400` |
| Feature icon bg | `bg-palta-950` |
| API table thead | `bg-neutral-900` |
| API table dividers | `divide-neutral-800` |
| Footer bg | `bg-neutral-900` |

### Padrões de layout

- Container: `max-w-5xl mx-auto px-6`
- Sections: `px-6 py-24`
- Responsive: mobile-first, breakpoint `sm:` para desktop
- Tipografia: usar `text-[Xpx]` com Inter para corpo, JetBrains Mono para código
- Bordas: `border-neutral-800`, `rounded-xl` para cards

---

## Sistema de i18n

### config.ts

Usar `i18next` + `react-i18next` + `i18next-browser-languagedetector`:

```ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import pt from "./pt";
import es from "./es";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: { pt: { translation: pt }, es: { translation: es } },
    fallbackLng: "es",
    interpolation: { escapeValue: false },
    detection: {
      order: ["querystring", "navigator", "htmlTag"],
      lookupQuerystring: "lang",
    },
  });

export default i18n;
```

O language switcher fica no **footer** (não no header), de forma simples: dois botões inline `ES | PT`. O idioma padrão é ES. Persistir a escolha via query param `?lang=pt` (sem cookie, sem localStorage, fica na URL e funciona com SSR).

### Traduções

Todas as strings da página devem estar nos arquivos de tradução. Nenhum texto hardcoded nos componentes — sempre usar `useTranslation()`.

A seguir, o conteúdo completo de cada tradução:

---

### pt.ts (Português)

```ts
export default {
  meta: {
    title: "palta — Formatação e validação de dados da América Latina",
    description: "Biblioteca TypeScript para formatar e validar CPF, RUT, CUIT, NIT, RUC, moedas, telefones e CEPs. Zero dependencies, tree-shakeable.",
  },

  header: {
    docs: "Documentação",
    github: "GitHub",
    npm: "npm",
  },

  hero: {
    tagline: "npm install palta",
    title: "Formate e valide dados de toda a",
    titleHighlight: "América Latina",
    subtitle: "CPF, RUT, CUIT, NIT, RUC, moedas, telefones e CEPs — tudo em uma biblioteca TypeScript. Zero dependencies. Tree-shakeable.",
    cta: "Começar agora",
    ctaSecondary: "Ver no GitHub",
  },

  features: {
    title: "Tudo que você precisa",
    subtitle: "Uma API consistente para 5 países, 5 tipos de dados.",
    items: {
      documents: {
        title: "Documentos fiscais",
        description: "Valide e formate CPF, CNPJ, RUT, CUIT, CUIL, NIT, CC, RUC e DNI com verificação de dígito verificador.",
      },
      currency: {
        title: "Moedas",
        description: "Formate e parse BRL, CLP, ARS, COP e PEN com separadores e símbolos corretos de cada país.",
      },
      phone: {
        title: "Telefones",
        description: "Formate celular e fixo com código de país, DDD e máscara correta para cada região.",
      },
      zipcode: {
        title: "CEPs",
        description: "Formate e valide códigos postais do Brasil, Chile, Argentina, Colômbia e Peru.",
      },
      detect: {
        title: "Detecção automática",
        description: "Passe qualquer string e o palta detecta automaticamente o país, tipo de documento e se é válido.",
      },
      typescript: {
        title: "TypeScript nativo",
        description: "Tipagem forte em toda a API. Autocomplete no editor para cada função, país e formato.",
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
```

### es.ts (Español)

```ts
export default {
  meta: {
    title: "palta — Formateo y validación de datos de América Latina",
    description: "Biblioteca TypeScript para formatear y validar RUT, CUIT, CPF, NIT, RUC, monedas, teléfonos y códigos postales. Zero dependencies, tree-shakeable.",
  },

  header: {
    docs: "Documentación",
    github: "GitHub",
    npm: "npm",
  },

  hero: {
    tagline: "npm install palta",
    title: "Formatea y valida datos de toda",
    titleHighlight: "América Latina",
    subtitle: "RUT, CUIT, CPF, NIT, RUC, monedas, teléfonos y códigos postales — todo en una biblioteca TypeScript. Zero dependencies. Tree-shakeable.",
    cta: "Comenzar ahora",
    ctaSecondary: "Ver en GitHub",
  },

  features: {
    title: "Todo lo que necesitas",
    subtitle: "Una API consistente para 5 países, 5 tipos de datos.",
    items: {
      documents: {
        title: "Documentos fiscales",
        description: "Valida y formatea RUT, CUIT, CUIL, CPF, CNPJ, NIT, CC, RUC y DNI con verificación de dígito verificador.",
      },
      currency: {
        title: "Monedas",
        description: "Formatea y parsea CLP, ARS, BRL, COP y PEN con separadores y símbolos correctos de cada país.",
      },
      phone: {
        title: "Teléfonos",
        description: "Formatea celular y fijo con código de país, prefijo y máscara correcta para cada región.",
      },
      zipcode: {
        title: "Códigos postales",
        description: "Formatea y valida códigos postales de Chile, Argentina, Brasil, Colombia y Perú.",
      },
      detect: {
        title: "Detección automática",
        description: "Pasa cualquier string y palta detecta automáticamente el país, tipo de documento y si es válido.",
      },
      typescript: {
        title: "TypeScript nativo",
        description: "Tipado fuerte en toda la API. Autocomplete en el editor para cada función, país y formato.",
      },
    },
  },

  countries: {
    title: "5 países, una API",
    brasil: {
      name: "Brasil",
      docs: "CPF · CNPJ · BRL · Teléfono · CEP",
    },
    chile: {
      name: "Chile",
      docs: "RUT · CLP · Teléfono · Código Postal",
    },
    argentina: {
      name: "Argentina",
      docs: "CUIT/CUIL · DNI · ARS · Teléfono · CPA",
    },
    colombia: {
      name: "Colombia",
      docs: "NIT · CC · COP · Teléfono · Código Postal",
    },
    peru: {
      name: "Perú",
      docs: "RUC · DNI · PEN · Teléfono · Código Postal",
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
  },
};
```

---

## Componentes — Especificação detalhada

### root.tsx

- `lang` dinâmico baseado no idioma atual (pt ou es)
- Carregar fontes Inter e JetBrains Mono via Google Fonts no `links`
- Meta tags OG e Twitter dinâmicas via i18n
- Inicializar i18next no entry client

### header.tsx

- Fixo no topo (`sticky top-0 z-50`)
- Fundo blur: `bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800`
- Logo: emoji 🥑 + "palta" em font-semibold
- Nav links: Features, Países, Instalar, API — estilo `text-neutral-400 hover:text-white`
- **Sem theme toggle** (dark-only)
- **Sem language switcher** (fica no footer)
- CTA botão "Comenzar ahora": `bg-white text-neutral-900 hover:bg-neutral-200`
- Container: `max-w-5xl mx-auto px-6`
- Mobile: hamburger menu com Sheet/Drawer

### hero.tsx

- Padding generoso: `py-32 sm:py-40`
- Fundo sutil: `bg-gradient-to-b from-palta-950/30 to-neutral-950` com grid pattern (pontos `#333`)
- Acima do título: badge/chip com `npm install palta` em monospace (`bg-neutral-800 hover:bg-neutral-700 text-neutral-300`), com botão de copiar
- Título grande: `text-4xl sm:text-6xl font-extrabold tracking-tight text-white`
- "América Latina" destacado com cor `text-palta-400` e underline `decoration-palta-700`
- Subtítulo: `text-lg text-neutral-400 max-w-2xl`
- Dois botões: CTA principal (bg-palta-600 text-white) + CTA secundário (`border border-neutral-700 hover:border-neutral-500 text-neutral-300`, link GitHub)
- Animação de entrada com motion (fade-in + slide-up)

### features.tsx

- Grid `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`
- Cada card: `bg-neutral-900 border border-neutral-800 rounded-xl p-6`
- Ícone lucide em container `w-10 h-10 bg-palta-950 rounded-lg` com cor `text-palta-400`
- Título bold + descrição em `text-neutral-400`
- Hover: `hover:border-palta-700 hover:shadow-sm transition-all`

### code-preview.tsx

Este é o componente mais importante da landing — mostra o código em ação.

- Seção com fundo alternado: `bg-neutral-900`
- Tabs no topo: Documentos | Moedas | Telefones | Detectar
- Bloco de código com fundo escuro (`bg-neutral-950 text-neutral-100 rounded-2xl shadow-2xl`)
- Font: JetBrains Mono
- Syntax highlighting manual via spans com cores:
  - Keywords (import, from, const): `text-purple-400`
  - Strings: `text-green-400`
  - Functions: `text-yellow-400`
  - Comments: `text-neutral-500`
  - Values (true/false): `text-orange-400`

Exemplos de código por tab:

**Tab Documentos:**
```ts
import { br, cl, ar } from 'palta'

// Brasil
br.cpf.format('12345678901')     // '123.456.789-01'
br.cpf.validate('12345678901')   // true
br.cnpj.format('11222333000181') // '11.222.333/0001-81'

// Chile
cl.rut.format('12345678-9')      // '12.345.678-9'
cl.rut.validate('12345678-9')    // true

// Argentina
ar.cuit.format('20123456789')    // '20-12345678-9'
ar.cuit.validate('20123456789')  // true
```

**Tab Moedas:**
```ts
import { br, cl, ar, co, pe } from 'palta'

br.currency(1234.56)   // 'R$ 1.234,56'
cl.currency(15990)      // '$15.990'
ar.currency(4500.50)    // '$ 4.500,50'
co.currency(89900)      // '$ 89.900'
pe.currency(1234.56)    // 'S/ 1,234.56'
```

**Tab Telefones:**
```ts
import { br, cl, ar } from 'palta'

br.phone.format('11999887766')
// '(11) 99988-7766'

cl.phone.format('912345678')
// '+56 9 1234 5678'

ar.phone.format('1155667788')
// '+54 9 11 5566-7788'
```

**Tab Detectar:**
```ts
import { detect } from 'palta'

detect('12.345.678-9')
// { country: 'CL', type: 'rut', valid: true }

detect('123.456.789-01')
// { country: 'BR', type: 'cpf', valid: true }

detect('20-12345678-9')
// { country: 'AR', type: 'cuit', valid: true }
```

### countries.tsx

- Título + subtítulo centralizados
- 5 cards em row horizontal scrollável no mobile, grid `lg:grid-cols-5` no desktop
- Cada card tem:
  - Bandeira do país (emoji: 🇧🇷 🇨🇱 🇦🇷 🇨🇴 🇵🇪)
  - Nome do país
  - Lista dos formatos suportados em `text-xs text-neutral-400`
  - Borda: `border border-neutral-800` + borda lateral colorida `border-l-4 border-l-brasil`, etc.

### install.tsx

- Fundo: `bg-neutral-950 text-white`
- **Interface de tabs para 6 package managers:**
  - Tabs em row horizontal: `npm` | `yarn` | `pnpm` | `bun` | `deno` | `npx`
  - Tab ativa: `bg-palta-600 text-white rounded-t-lg`
  - Tab inativa: `text-neutral-400 hover:text-white`
  - Container do comando: `bg-neutral-900 border border-neutral-800 rounded-2xl`
  - Comandos:
    ```
    npm install palta
    yarn add palta
    pnpm add palta
    bun add palta
    deno add npm:palta
    npx jsr add palta
    ```
  - Botão "Copiar" à direita do comando com feedback visual (ícone muda para checkmark por 1.5s)
  - Ao trocar de tab, mostra o comando correspondente e esconde os outros

- Abaixo: exemplo de import seletivo em `bg-neutral-900 border border-neutral-800 rounded-xl p-6`
  ```ts
  // Importe só o que precisa
  import { br } from 'palta'       // ~1.2kb
  import { cl } from 'palta'       // ~0.8kb
  import br from 'palta/br'        // alternativa
  ```
- Rodapé da seção: texto `text-xs text-neutral-500` sobre tree-shaking

### api-table.tsx

- Tabela responsiva (`overflow-x-auto`)
- Colunas: Função | Descrição | Exemplo
- Linhas agrupadas por categoria (Documentos, Moedas, Telefones, CEPs)
- Headers: `bg-neutral-900 font-semibold text-neutral-300`
- Body: `divide-y divide-neutral-800`
- Cells de descrição: `text-neutral-400`
- Código em monospace nos exemplos

### bundle-size.tsx (stats bar)

- Fundo: `bg-neutral-900/50 border-y border-neutral-800`
- Row horizontal flex-wrap centralizada com gap
- Cada item: ícone palta dot (`w-2 h-2 bg-palta-500 rounded-full`) + texto `text-sm font-medium text-neutral-400`
- Items: Zero dependencies, Tree-shakeable, TypeScript strict, 5 países, < 5kb gzipped, MIT License

### footer.tsx

- Fundo: `bg-neutral-900 border-t border-neutral-800`
- Padding: `py-8 px-6`
- Layout: logo à esquerda, links à direita
- Texto: `text-neutral-400`
- "Hecho con 🥑 para América Latina"
- Links: GitHub, npm — hover `hover:text-white`
- Copyright: `© 2026 palta · MIT`
- **Language switcher** no footer: dois botões inline simples `ES | PT` (texto `text-xs text-neutral-500`), botão ativo em `text-white`

### language-switcher.tsx

- Botão minimalista: mostra `PT` ou `ES` com bandeira (🇧🇷 / 🇪🇸)
- Ao clicar, alterna o idioma e adiciona `?lang=xx` na URL
- Transição suave no texto da página ao trocar idioma
- Estilo: `text-sm font-medium text-neutral-500 hover:text-neutral-900`

---

## Seção de Ordem (scroll da página)

1. **Header** (sticky)
2. **Hero** — título, tagline, CTAs
3. **Stats/Badges** — zero deps, tree-shakeable, typescript, etc.
4. **Features** — grid 3x2 com as 6 features
5. **Code Preview** — tabs com exemplos de código
6. **Countries** — 5 cards com bandeiras
7. **Install** — como instalar + import seletivo
8. **API Table** — referência rápida da API
9. **Footer**

---

## Regras Importantes

- **Todas as strings via i18n** — nenhum texto hardcoded nos componentes, sempre `t('chave')`
- **Mobile-first** — todo componente deve funcionar perfeitamente no celular
- **SSR habilitado** — a página deve renderizar no server para SEO
- **Performance** — sem imagens pesadas, sem JS desnecessário. Os code blocks são HTML estático, não uma lib de syntax highlighting
- **Acessibilidade** — tags semânticas (header, main, section, footer, nav), alt text, focus states nos botões
- **Smooth scroll** — links de navegação interna com scroll suave (`scroll-behavior: smooth` no CSS)
- **Copy to clipboard** — botão de copiar no `npm install palta` e nos code blocks da seção install (com feedback visual: ícone muda para ✓ por 1.5s)
- **Sem emojis nos componentes** — usar ícones Lucide para as features. Emojis APENAS para bandeiras dos países e no footer ("Feito com 🥑")
- **Animações sutis** — usar motion (framer-motion) para fade-in dos sections ao entrar no viewport. Nada exagerado
- **Padrão de container**: `max-w-5xl mx-auto px-6` em todas as sections
- **Padrão de section**: `px-6 py-24` com alternância de fundo (white / neutral-50 / neutral-950 — com variantes dark correspondentes)
- **Meta tags completas** — OG image, Twitter card, description, todos via i18n
- **Dark mode** — todas as classes devem incluir variantes `dark:` conforme tabela do Design System. Body: `transition-colors duration-300` para transição suave
- **Theme toggle** — botão no header com ícones Sun/Moon (lucide). Default: respeitar `prefers-color-scheme`, com override manual
- **Install tabs** — seção de instalação com 6 tabs (npm, yarn, pnpm, bun, deno, npx) em vez de cards separados
