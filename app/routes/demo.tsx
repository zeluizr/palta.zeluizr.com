import { useState } from "react";
import { Link } from "react-router";
import type { MetaFunction } from "react-router";
import { br, cl, ar, co, pe, detect } from "@zeluizr/palta";

export const meta: MetaFunction = () => [
  { title: "🥑 palta demo — Interactive playground" },
  { name: "description", content: "Try palta functions live: format, validate and detect Latin American data." },
];

interface DemoRow {
  fn: string;
  input: string;
  output: string;
}

interface DemoGroup {
  label: string;
  rows: DemoRow[];
}

interface CountrySection {
  id: string;
  flag: string;
  name: string;
  groups: DemoGroup[];
}

function outputColor(output: string): string {
  if (output === "true") return "text-palta-400";
  if (output === "false") return "text-red-400";
  return "text-amber-300";
}

function buildSections(): CountrySection[] {
  return [
    {
      id: "br",
      flag: "🇧🇷",
      name: "Brasil",
      groups: [
        {
          label: "CPF",
          rows: [
            { fn: "br.cpf.format()", input: "52998224725", output: br.cpf.format("52998224725") },
            { fn: "br.cpf.validate()", input: "529.982.247-25", output: String(br.cpf.validate("529.982.247-25")) },
            { fn: "br.cpf.validate(inválido)", input: "111.111.111-11", output: String(br.cpf.validate("111.111.111-11")) },
            { fn: "br.cpf.strip()", input: "529.982.247-25", output: br.cpf.strip("529.982.247-25") },
            { fn: "br.cpf.mask", input: "—", output: br.cpf.mask },
          ],
        },
        {
          label: "CNPJ",
          rows: [
            { fn: "br.cnpj.format()", input: "11222333000181", output: br.cnpj.format("11222333000181") },
            { fn: "br.cnpj.validate()", input: "11.222.333/0001-81", output: String(br.cnpj.validate("11.222.333/0001-81")) },
            { fn: "br.cnpj.validate(inválido)", input: "00.000.000/0000-00", output: String(br.cnpj.validate("00.000.000/0000-00")) },
            { fn: "br.cnpj.strip()", input: "11.222.333/0001-81", output: br.cnpj.strip("11.222.333/0001-81") },
            { fn: "br.cnpj.mask", input: "—", output: br.cnpj.mask },
          ],
        },
        {
          label: "Moeda (BRL)",
          rows: [
            { fn: "br.currency.format()", input: "1234567.89", output: br.currency.format(1234567.89) },
            { fn: "br.currency.format({ symbol: false })", input: "9999.99", output: br.currency.format(9999.99, { symbol: false }) },
            { fn: "br.currency.format({ decimals: 0 })", input: "1500000", output: br.currency.format(1500000, { decimals: 0 }) },
            { fn: "br.currency.parse()", input: "R$ 1.234,56", output: String(br.currency.parse("R$ 1.234,56")) },
            { fn: "br.currency.symbol", input: "—", output: br.currency.symbol },
            { fn: "br.currency.code", input: "—", output: br.currency.code },
          ],
        },
        {
          label: "Telefone",
          rows: [
            { fn: "br.phone.format() celular", input: "11987654321", output: br.phone.format("11987654321") },
            { fn: "br.phone.format() fixo", input: "1133334444", output: br.phone.format("1133334444") },
            { fn: "br.phone.format({ international: true })", input: "11987654321", output: br.phone.format("11987654321", { international: true }) },
            { fn: "br.phone.validate()", input: "11987654321", output: String(br.phone.validate("11987654321")) },
            { fn: "br.phone.countryCode", input: "—", output: br.phone.countryCode },
          ],
        },
        {
          label: "CEP",
          rows: [
            { fn: "br.zipcode.format()", input: "01310100", output: br.zipcode.format("01310100") },
            { fn: "br.zipcode.validate()", input: "01310-100", output: String(br.zipcode.validate("01310-100")) },
            { fn: "br.zipcode.validate(inválido)", input: "00000-000", output: String(br.zipcode.validate("00000-000")) },
            { fn: "br.zipcode.strip()", input: "01310-100", output: br.zipcode.strip("01310-100") },
            { fn: "br.zipcode.mask", input: "—", output: br.zipcode.mask },
          ],
        },
      ],
    },
    {
      id: "cl",
      flag: "🇨🇱",
      name: "Chile",
      groups: [
        {
          label: "RUT",
          rows: [
            { fn: "cl.rut.format()", input: "12345678K", output: cl.rut.format("12345678K") },
            { fn: "cl.rut.validate(válido)", input: "12.345.678-K", output: String(cl.rut.validate("12.345.678-K")) },
            { fn: "cl.rut.validate(inválido)", input: "12345678-0", output: String(cl.rut.validate("12345678-0")) },
            { fn: "cl.rut.strip()", input: "12.345.678-K", output: cl.rut.strip("12.345.678-K") },
            { fn: "cl.rut.getCheckDigit()", input: "12345678", output: cl.rut.getCheckDigit("12345678") },
            { fn: "cl.rut.mask", input: "—", output: cl.rut.mask },
          ],
        },
        {
          label: "Moneda (CLP)",
          rows: [
            { fn: "cl.currency.format()", input: "1500000", output: cl.currency.format(1500000) },
            { fn: "cl.currency.format({ symbol: false })", input: "250000", output: cl.currency.format(250000, { symbol: false }) },
            { fn: "cl.currency.format({ decimals: 2 })", input: "1500000", output: cl.currency.format(1500000, { decimals: 2 }) },
            { fn: "cl.currency.parse()", input: "$ 1.500.000", output: String(cl.currency.parse("$ 1.500.000")) },
            { fn: "cl.currency.symbol", input: "—", output: cl.currency.symbol },
            { fn: "cl.currency.code", input: "—", output: cl.currency.code },
          ],
        },
        {
          label: "Teléfono",
          rows: [
            { fn: "cl.phone.format() móvil", input: "912345678", output: cl.phone.format("912345678") },
            { fn: "cl.phone.format({ international: true })", input: "912345678", output: cl.phone.format("912345678", { international: true }) },
            { fn: "cl.phone.validate()", input: "912345678", output: String(cl.phone.validate("912345678")) },
            { fn: "cl.phone.countryCode", input: "—", output: cl.phone.countryCode },
          ],
        },
        {
          label: "Código Postal",
          rows: [
            { fn: "cl.zipcode.format()", input: "8320000", output: cl.zipcode.format("8320000") },
            { fn: "cl.zipcode.validate()", input: "832-0000", output: String(cl.zipcode.validate("832-0000")) },
            { fn: "cl.zipcode.strip()", input: "832-0000", output: cl.zipcode.strip("832-0000") },
            { fn: "cl.zipcode.mask", input: "—", output: cl.zipcode.mask },
          ],
        },
      ],
    },
    {
      id: "ar",
      flag: "🇦🇷",
      name: "Argentina",
      groups: [
        {
          label: "CUIT / CUIL",
          rows: [
            { fn: "ar.cuit.format()", input: "20123456789", output: ar.cuit.format("20123456789") },
            { fn: "ar.cuit.validate(válido)", input: "20-12345678-9", output: String(ar.cuit.validate("20-12345678-9")) },
            { fn: "ar.cuit.validate(inválido)", input: "20-00000000-0", output: String(ar.cuit.validate("20-00000000-0")) },
            { fn: "ar.cuit.strip()", input: "20-12345678-9", output: ar.cuit.strip("20-12345678-9") },
            { fn: "ar.cuit.mask", input: "—", output: ar.cuit.mask },
          ],
        },
        {
          label: "DNI",
          rows: [
            { fn: "ar.dni.format()", input: "12345678", output: ar.dni.format("12345678") },
            { fn: "ar.dni.validate()", input: "12345678", output: String(ar.dni.validate("12345678")) },
            { fn: "ar.dni.validate(inválido)", input: "1234", output: String(ar.dni.validate("1234")) },
            { fn: "ar.dni.strip()", input: "12.345.678", output: ar.dni.strip("12.345.678") },
            { fn: "ar.dni.mask", input: "—", output: ar.dni.mask },
          ],
        },
        {
          label: "Moneda (ARS)",
          rows: [
            { fn: "ar.currency.format()", input: "1500000.5", output: ar.currency.format(1500000.5) },
            { fn: "ar.currency.format({ symbol: false })", input: "99999.99", output: ar.currency.format(99999.99, { symbol: false }) },
            { fn: "ar.currency.parse()", input: "$ 1.500.000,50", output: String(ar.currency.parse("$ 1.500.000,50")) },
            { fn: "ar.currency.symbol", input: "—", output: ar.currency.symbol },
            { fn: "ar.currency.code", input: "—", output: ar.currency.code },
          ],
        },
        {
          label: "Teléfono",
          rows: [
            { fn: "ar.phone.format()", input: "1123456789", output: ar.phone.format("1123456789") },
            { fn: "ar.phone.format({ international: true })", input: "1123456789", output: ar.phone.format("1123456789", { international: true }) },
            { fn: "ar.phone.validate()", input: "1123456789", output: String(ar.phone.validate("1123456789")) },
            { fn: "ar.phone.countryCode", input: "—", output: ar.phone.countryCode },
          ],
        },
        {
          label: "CPA (Código Postal)",
          rows: [
            { fn: "ar.zipcode.format()", input: "C1043AAB", output: ar.zipcode.format("C1043AAB") },
            { fn: "ar.zipcode.validate()", input: "C1043AAB", output: String(ar.zipcode.validate("C1043AAB")) },
            { fn: "ar.zipcode.validate(inválido)", input: "ZZZZ", output: String(ar.zipcode.validate("ZZZZ")) },
            { fn: "ar.zipcode.strip()", input: "C1043AAB", output: ar.zipcode.strip("C1043AAB") },
            { fn: "ar.zipcode.mask", input: "—", output: ar.zipcode.mask },
          ],
        },
      ],
    },
    {
      id: "co",
      flag: "🇨🇴",
      name: "Colombia",
      groups: [
        {
          label: "NIT",
          rows: [
            { fn: "co.nit.format()", input: "9004273800", output: co.nit.format("9004273800") },
            { fn: "co.nit.validate(válido)", input: "900427380-0", output: String(co.nit.validate("900427380-0")) },
            { fn: "co.nit.validate(inválido)", input: "900427380-9", output: String(co.nit.validate("900427380-9")) },
            { fn: "co.nit.strip()", input: "900.427.380-0", output: co.nit.strip("900.427.380-0") },
            { fn: "co.nit.mask", input: "—", output: co.nit.mask },
          ],
        },
        {
          label: "Cédula de Ciudadanía (CC)",
          rows: [
            { fn: "co.cc.format()", input: "1234567890", output: co.cc.format("1234567890") },
            { fn: "co.cc.validate()", input: "1234567890", output: String(co.cc.validate("1234567890")) },
            { fn: "co.cc.validate(inválido)", input: "123", output: String(co.cc.validate("123")) },
            { fn: "co.cc.strip()", input: "1.234.567.890", output: co.cc.strip("1.234.567.890") },
            { fn: "co.cc.mask", input: "—", output: co.cc.mask },
          ],
        },
        {
          label: "Moneda (COP)",
          rows: [
            { fn: "co.currency.format()", input: "1500000", output: co.currency.format(1500000) },
            { fn: "co.currency.format({ symbol: false })", input: "75000", output: co.currency.format(75000, { symbol: false }) },
            { fn: "co.currency.parse()", input: "$ 1.500.000", output: String(co.currency.parse("$ 1.500.000")) },
            { fn: "co.currency.symbol", input: "—", output: co.currency.symbol },
            { fn: "co.currency.code", input: "—", output: co.currency.code },
          ],
        },
        {
          label: "Teléfono",
          rows: [
            { fn: "co.phone.format()", input: "3001234567", output: co.phone.format("3001234567") },
            { fn: "co.phone.format({ international: true })", input: "3001234567", output: co.phone.format("3001234567", { international: true }) },
            { fn: "co.phone.validate()", input: "3001234567", output: String(co.phone.validate("3001234567")) },
            { fn: "co.phone.countryCode", input: "—", output: co.phone.countryCode },
          ],
        },
        {
          label: "Código Postal",
          rows: [
            { fn: "co.zipcode.format()", input: "110111", output: co.zipcode.format("110111") },
            { fn: "co.zipcode.validate()", input: "110111", output: String(co.zipcode.validate("110111")) },
            { fn: "co.zipcode.validate(inválido)", input: "99999A", output: String(co.zipcode.validate("99999A")) },
            { fn: "co.zipcode.strip()", input: "110111", output: co.zipcode.strip("110111") },
            { fn: "co.zipcode.mask", input: "—", output: co.zipcode.mask },
          ],
        },
      ],
    },
    {
      id: "pe",
      flag: "🇵🇪",
      name: "Perú",
      groups: [
        {
          label: "RUC",
          rows: [
            { fn: "pe.ruc.format()", input: "20100070970", output: pe.ruc.format("20100070970") },
            { fn: "pe.ruc.validate(válido)", input: "20100070970", output: String(pe.ruc.validate("20100070970")) },
            { fn: "pe.ruc.validate(inválido)", input: "99999999999", output: String(pe.ruc.validate("99999999999")) },
            { fn: "pe.ruc.strip()", input: "20100070970", output: pe.ruc.strip("20100070970") },
            { fn: "pe.ruc.mask", input: "—", output: pe.ruc.mask },
          ],
        },
        {
          label: "DNI",
          rows: [
            { fn: "pe.dni.format()", input: "12345678", output: pe.dni.format("12345678") },
            { fn: "pe.dni.validate()", input: "12345678", output: String(pe.dni.validate("12345678")) },
            { fn: "pe.dni.validate(inválido)", input: "1234", output: String(pe.dni.validate("1234")) },
            { fn: "pe.dni.strip()", input: "12345678", output: pe.dni.strip("12345678") },
            { fn: "pe.dni.mask", input: "—", output: pe.dni.mask },
          ],
        },
        {
          label: "Moneda (PEN)",
          rows: [
            { fn: "pe.currency.format()", input: "1500.75", output: pe.currency.format(1500.75) },
            { fn: "pe.currency.format({ symbol: false })", input: "99.99", output: pe.currency.format(99.99, { symbol: false }) },
            { fn: "pe.currency.format({ decimals: 0 })", input: "1500.75", output: pe.currency.format(1500.75, { decimals: 0 }) },
            { fn: "pe.currency.parse()", input: "S/ 1,500.75", output: String(pe.currency.parse("S/ 1,500.75")) },
            { fn: "pe.currency.symbol", input: "—", output: pe.currency.symbol },
            { fn: "pe.currency.code", input: "—", output: pe.currency.code },
          ],
        },
        {
          label: "Teléfono",
          rows: [
            { fn: "pe.phone.format()", input: "987654321", output: pe.phone.format("987654321") },
            { fn: "pe.phone.format({ international: true })", input: "987654321", output: pe.phone.format("987654321", { international: true }) },
            { fn: "pe.phone.validate()", input: "987654321", output: String(pe.phone.validate("987654321")) },
            { fn: "pe.phone.countryCode", input: "—", output: pe.phone.countryCode },
          ],
        },
        {
          label: "Código Postal",
          rows: [
            { fn: "pe.zipcode.format()", input: "15001", output: pe.zipcode.format("15001") },
            { fn: "pe.zipcode.validate()", input: "15001", output: String(pe.zipcode.validate("15001")) },
            { fn: "pe.zipcode.validate(inválido)", input: "9999", output: String(pe.zipcode.validate("9999")) },
            { fn: "pe.zipcode.strip()", input: "15001", output: pe.zipcode.strip("15001") },
            { fn: "pe.zipcode.mask", input: "—", output: pe.zipcode.mask },
          ],
        },
      ],
    },
  ];
}

function GroupTable({ group }: { group: DemoGroup }) {
  return (
    <div>
      <div className="px-4 py-2 bg-neutral-900 border-b border-neutral-800">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-neutral-500">
          {group.label}
        </span>
      </div>
      {group.rows.map((row, i) => (
        <div
          key={i}
          className="grid grid-cols-[2fr_1fr_1fr] border-b border-neutral-800/50 last:border-0 hover:bg-neutral-800/20 transition-colors"
        >
          <div className="px-4 py-2.5 font-mono text-palta-300 text-xs">{row.fn}</div>
          <div className="px-4 py-2.5 font-mono text-neutral-500 text-xs">{row.input}</div>
          <div className={`px-4 py-2.5 font-mono text-xs font-semibold ${outputColor(row.output)}`}>
            {row.output}
          </div>
        </div>
      ))}
    </div>
  );
}

function DetectPlayground() {
  const [input, setInput] = useState("");
  const result = input.trim() ? detect(input.trim()) : null;

  const examples = [
    "529.982.247-25",
    "11.222.333/0001-81",
    "12.345.678-K",
    "20-12345678-9",
    "900427380-0",
    "1.234.567.890",
    "20100070970",
    "12345678",
    "111.111.111-11",
  ];

  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <label className="block text-sm text-neutral-400 font-medium">
          Ingresa cualquier documento para detectar su tipo y país
        </label>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ej: 529.982.247-25, 12.345.678-K, 20-12345678-9 ..."
          className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 text-white placeholder-neutral-600 font-mono text-sm focus:outline-none focus:border-palta-500 transition-colors"
        />
      </div>

      <div className="rounded-xl border border-neutral-800 overflow-hidden">
        <div className="bg-neutral-900/60 border-b border-neutral-800 px-4 py-2.5">
          <span className="text-xs text-neutral-500 font-mono">detect("{input || "..."}")</span>
        </div>
        <div className="p-4">
          {!input.trim() ? (
            <p className="text-neutral-600 text-sm font-mono">// Escribe algo arriba...</p>
          ) : result === null ? (
            <p className="text-red-400 text-sm font-mono">null <span className="text-neutral-600">// No se pudo detectar</span></p>
          ) : (
            <div className="space-y-1 font-mono text-sm">
              <div className="text-neutral-500">{"{"}</div>
              <div className="pl-4 space-y-1">
                {(["country", "type", "valid", "formatted"] as const).map((key) => (
                  <div key={key}>
                    <span className="text-blue-400">{key}</span>
                    <span className="text-neutral-500">: </span>
                    {key === "valid" ? (
                      <span className={result.valid ? "text-palta-400" : "text-red-400"}>{String(result[key])}</span>
                    ) : (
                      <span className="text-amber-300">"{result[key]}"</span>
                    )}
                    <span className="text-neutral-500">,</span>
                  </div>
                ))}
              </div>
              <div className="text-neutral-500">{"}"}</div>
            </div>
          )}
        </div>
      </div>

      <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-4">
        <p className="text-xs text-neutral-500 font-medium mb-3">Ejemplos para probar:</p>
        <div className="flex flex-wrap gap-2">
          {examples.map((ex) => (
            <button
              key={ex}
              onClick={() => setInput(ex)}
              className="text-xs font-mono bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white px-3 py-1.5 rounded-lg transition-colors border border-neutral-700 hover:border-neutral-600"
            >
              {ex}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Demo() {
  const sections = buildSections();

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center shrink-0 text-xl leading-none">
              🥑
            </Link>
            <span className="text-neutral-600">/</span>
            <span className="text-[15px] text-neutral-400">demo</span>
          </div>
          {/* Jump links */}
          <nav className="hidden sm:flex items-center gap-1">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="flex items-center gap-1 text-xs text-neutral-500 hover:text-white px-2.5 py-1.5 rounded-lg hover:bg-neutral-800 transition-colors"
              >
                <span>{s.flag}</span>
                <span>{s.id.toUpperCase()}</span>
              </a>
            ))}
            <a
              href="#detect"
              className="flex items-center gap-1 text-xs text-neutral-500 hover:text-white px-2.5 py-1.5 rounded-lg hover:bg-neutral-800 transition-colors"
            >
              <span>🔍</span>
              <span>detect</span>
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-16">
        {/* Page title */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Demo interactiva</h1>
          <p className="text-neutral-400 text-base">
            Todas las funciones de{" "}
            <code className="text-palta-400 font-mono text-sm bg-palta-950/60 px-1.5 py-0.5 rounded">
              @zeluizr/palta
            </code>{" "}
            ejecutadas en tiempo real con datos de ejemplo.
          </p>
        </div>

        {/* Country sections */}
        {sections.map((section) => (
          <section key={section.id} id={section.id}>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-3xl">{section.flag}</span>
              <h2 className="text-xl font-bold">{section.name}</h2>
              <code className="text-xs font-mono text-neutral-500 bg-neutral-900 border border-neutral-800 px-2 py-1 rounded-lg">
                import {"{"} {section.id} {"}"} from '@zeluizr/palta'
              </code>
            </div>

            <div className="rounded-xl border border-neutral-800 overflow-hidden">
              {/* Table header */}
              <div className="grid grid-cols-[2fr_1fr_1fr] bg-neutral-900/80 border-b border-neutral-800">
                <div className="px-4 py-2.5 text-xs text-neutral-500 font-medium">Función</div>
                <div className="px-4 py-2.5 text-xs text-neutral-500 font-medium">Input</div>
                <div className="px-4 py-2.5 text-xs text-neutral-500 font-medium">Output</div>
              </div>
              {section.groups.map((group) => (
                <GroupTable key={group.label} group={group} />
              ))}
            </div>
          </section>
        ))}

        {/* Detect section */}
        <section id="detect">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-3xl">🔍</span>
            <h2 className="text-xl font-bold">detect()</h2>
            <code className="text-xs font-mono text-neutral-500 bg-neutral-900 border border-neutral-800 px-2 py-1 rounded-lg">
              import {"{"} detect {"}"} from '@zeluizr/palta'
            </code>
          </div>
          <DetectPlayground />
        </section>

        {/* Footer note */}
        <div className="pt-8 border-t border-neutral-800 flex items-center justify-between">
          <p className="text-xs text-neutral-600">
            Resultados calculados en tiempo real usando{" "}
            <code className="text-neutral-500 font-mono">@zeluizr/palta</code> importado directamente.
          </p>
          <a
            href="https://github.com/zeluizr/palta"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-neutral-500 hover:text-white transition-colors font-mono"
          >
            GitHub →
          </a>
        </div>
      </main>
    </div>
  );
}
