import { useState } from "react";
import { Link } from "react-router";
import type { MetaFunction } from "react-router";
import { br, cl, ar, co, pe, detect } from "@zeluizr/palta";

export const meta: MetaFunction = () => [
  { title: "🥑 palta demo — Interactive playground" },
  { name: "description", content: "Try palta functions live: format, validate and detect Latin American data." },
];

type TabId = "br" | "cl" | "ar" | "co" | "pe" | "detect";

interface DemoRow {
  fn: string;
  input: string;
  output: string;
}

function getBrRows(): DemoRow[] {
  return [
    { fn: "br.cpf.format()", input: "52998224725", output: br.cpf.format("52998224725") },
    { fn: "br.cpf.validate()", input: "529.982.247-25", output: String(br.cpf.validate("529.982.247-25")) },
    { fn: "br.cpf.validate(invalid)", input: "111.111.111-11", output: String(br.cpf.validate("111.111.111-11")) },
    { fn: "br.cnpj.format()", input: "11222333000181", output: br.cnpj.format("11222333000181") },
    { fn: "br.cnpj.validate()", input: "11.222.333/0001-81", output: String(br.cnpj.validate("11.222.333/0001-81")) },
    { fn: "br.currency.format()", input: "1234567.89", output: br.currency.format(1234567.89) },
    { fn: "br.currency.format({ symbol: false })", input: "9999.99", output: br.currency.format(9999.99, { symbol: false }) },
    { fn: "br.currency.parse()", input: "R$ 1.234,56", output: String(br.currency.parse("R$ 1.234,56")) },
    { fn: "br.phone.format()", input: "11987654321", output: br.phone.format("11987654321") },
    { fn: "br.phone.format({ international: true })", input: "1133334444", output: br.phone.format("1133334444", { international: true }) },
    { fn: "br.phone.validate(mobile)", input: "11987654321", output: String(br.phone.validate("11987654321")) },
    { fn: "br.zipcode.format()", input: "01310100", output: br.zipcode.format("01310100") },
    { fn: "br.zipcode.validate()", input: "01310-100", output: String(br.zipcode.validate("01310-100")) },
  ];
}

function getClRows(): DemoRow[] {
  return [
    { fn: "cl.rut.format()", input: "12345678K", output: cl.rut.format("12345678K") },
    { fn: "cl.rut.validate(valid)", input: "12.345.678-K", output: String(cl.rut.validate("12.345.678-K")) },
    { fn: "cl.rut.validate(invalid)", input: "12345678-0", output: String(cl.rut.validate("12345678-0")) },
    { fn: "cl.rut.strip()", input: "12.345.678-K", output: cl.rut.strip("12.345.678-K") },
    { fn: "cl.currency.format()", input: "1500000", output: cl.currency.format(1500000) },
    { fn: "cl.currency.format({ symbol: false })", input: "250000", output: cl.currency.format(250000, { symbol: false }) },
    { fn: "cl.currency.parse()", input: "$ 1.500.000", output: String(cl.currency.parse("$ 1.500.000")) },
    { fn: "cl.phone.format()", input: "912345678", output: cl.phone.format("912345678") },
    { fn: "cl.phone.format({ international: true })", input: "912345678", output: cl.phone.format("912345678", { international: true }) },
    { fn: "cl.phone.validate()", input: "912345678", output: String(cl.phone.validate("912345678")) },
    { fn: "cl.zipcode.format()", input: "8320000", output: cl.zipcode.format("8320000") },
    { fn: "cl.zipcode.validate()", input: "832-0000", output: String(cl.zipcode.validate("832-0000")) },
  ];
}

function getArRows(): DemoRow[] {
  return [
    { fn: "ar.cuit.format()", input: "20123456789", output: ar.cuit.format("20123456789") },
    { fn: "ar.cuit.validate(valid)", input: "20-12345678-9", output: String(ar.cuit.validate("20-12345678-9")) },
    { fn: "ar.dni.format()", input: "12345678", output: ar.dni.format("12345678") },
    { fn: "ar.dni.validate()", input: "12345678", output: String(ar.dni.validate("12345678")) },
    { fn: "ar.currency.format()", input: "1500000.5", output: ar.currency.format(1500000.5) },
    { fn: "ar.currency.format({ symbol: false })", input: "99999.99", output: ar.currency.format(99999.99, { symbol: false }) },
    { fn: "ar.currency.parse()", input: "$ 1.500.000,50", output: String(ar.currency.parse("$ 1.500.000,50")) },
    { fn: "ar.phone.format()", input: "1123456789", output: ar.phone.format("1123456789") },
    { fn: "ar.phone.format({ international: true })", input: "1123456789", output: ar.phone.format("1123456789", { international: true }) },
    { fn: "ar.phone.validate()", input: "1123456789", output: String(ar.phone.validate("1123456789")) },
    { fn: "ar.zipcode.format()", input: "C1043AAB", output: ar.zipcode.format("C1043AAB") },
    { fn: "ar.zipcode.validate()", input: "C1043AAB", output: String(ar.zipcode.validate("C1043AAB")) },
  ];
}

function getCoRows(): DemoRow[] {
  return [
    { fn: "co.nit.format()", input: "9004273800", output: co.nit.format("9004273800") },
    { fn: "co.nit.validate(valid)", input: "900427380-0", output: String(co.nit.validate("900427380-0")) },
    { fn: "co.cc.format()", input: "1234567890", output: co.cc.format("1234567890") },
    { fn: "co.cc.validate()", input: "1234567890", output: String(co.cc.validate("1234567890")) },
    { fn: "co.currency.format()", input: "1500000", output: co.currency.format(1500000) },
    { fn: "co.currency.format({ symbol: false })", input: "75000", output: co.currency.format(75000, { symbol: false }) },
    { fn: "co.currency.parse()", input: "$ 1.500.000", output: String(co.currency.parse("$ 1.500.000")) },
    { fn: "co.phone.format()", input: "3001234567", output: co.phone.format("3001234567") },
    { fn: "co.phone.format({ international: true })", input: "3001234567", output: co.phone.format("3001234567", { international: true }) },
    { fn: "co.phone.validate()", input: "3001234567", output: String(co.phone.validate("3001234567")) },
    { fn: "co.zipcode.format()", input: "110111", output: co.zipcode.format("110111") },
    { fn: "co.zipcode.validate()", input: "110111", output: String(co.zipcode.validate("110111")) },
  ];
}

function getPeRows(): DemoRow[] {
  return [
    { fn: "pe.ruc.format()", input: "20100070970", output: pe.ruc.format("20100070970") },
    { fn: "pe.ruc.validate(valid)", input: "20100070970", output: String(pe.ruc.validate("20100070970")) },
    { fn: "pe.dni.format()", input: "12345678", output: pe.dni.format("12345678") },
    { fn: "pe.dni.validate()", input: "12345678", output: String(pe.dni.validate("12345678")) },
    { fn: "pe.currency.format()", input: "1500.75", output: pe.currency.format(1500.75) },
    { fn: "pe.currency.format({ symbol: false })", input: "99.99", output: pe.currency.format(99.99, { symbol: false }) },
    { fn: "pe.currency.parse()", input: "S/ 1,500.75", output: String(pe.currency.parse("S/ 1,500.75")) },
    { fn: "pe.phone.format()", input: "987654321", output: pe.phone.format("987654321") },
    { fn: "pe.phone.format({ international: true })", input: "987654321", output: pe.phone.format("987654321", { international: true }) },
    { fn: "pe.phone.validate()", input: "987654321", output: String(pe.phone.validate("987654321")) },
    { fn: "pe.zipcode.format()", input: "15001", output: pe.zipcode.format("15001") },
    { fn: "pe.zipcode.validate()", input: "15001", output: String(pe.zipcode.validate("15001")) },
  ];
}

const TABS: { id: TabId; label: string; flag: string }[] = [
  { id: "br", label: "BR", flag: "🇧🇷" },
  { id: "cl", label: "CL", flag: "🇨🇱" },
  { id: "ar", label: "AR", flag: "🇦🇷" },
  { id: "co", label: "CO", flag: "🇨🇴" },
  { id: "pe", label: "PE", flag: "🇵🇪" },
  { id: "detect", label: "Detect", flag: "🔍" },
];

function outputColor(output: string): string {
  if (output === "true") return "text-palta-400";
  if (output === "false") return "text-red-400";
  return "text-amber-300";
}

function CountryTable({ rows }: { rows: DemoRow[] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-neutral-800">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-neutral-800 bg-neutral-900/60">
            <th className="text-left px-4 py-3 text-neutral-500 font-medium w-1/3">Función</th>
            <th className="text-left px-4 py-3 text-neutral-500 font-medium w-1/3">Input</th>
            <th className="text-left px-4 py-3 text-neutral-500 font-medium w-1/3">Output</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className="border-b border-neutral-800/50 last:border-0 hover:bg-neutral-800/30 transition-colors"
            >
              <td className="px-4 py-3 font-mono text-palta-300 text-xs">{row.fn}</td>
              <td className="px-4 py-3 font-mono text-neutral-400 text-xs">{row.input}</td>
              <td className={`px-4 py-3 font-mono text-xs font-semibold ${outputColor(row.output)}`}>
                {row.output}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function DetectPlayground() {
  const [input, setInput] = useState("");
  const result = input.trim() ? detect(input.trim()) : null;

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="block text-sm text-neutral-400 font-medium">
          Ingresa cualquier documento o número para detectar su tipo y país
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
        <div className="bg-neutral-900/60 border-b border-neutral-800 px-4 py-2.5 flex items-center gap-2">
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
              <div className="pl-4">
                <span className="text-blue-400">country</span>
                <span className="text-neutral-500">: </span>
                <span className="text-amber-300">"{result.country}"</span>
                <span className="text-neutral-500">,</span>
              </div>
              <div className="pl-4">
                <span className="text-blue-400">type</span>
                <span className="text-neutral-500">: </span>
                <span className="text-amber-300">"{result.type}"</span>
                <span className="text-neutral-500">,</span>
              </div>
              <div className="pl-4">
                <span className="text-blue-400">valid</span>
                <span className="text-neutral-500">: </span>
                <span className={result.valid ? "text-palta-400" : "text-red-400"}>{String(result.valid)}</span>
                <span className="text-neutral-500">,</span>
              </div>
              <div className="pl-4">
                <span className="text-blue-400">formatted</span>
                <span className="text-neutral-500">: </span>
                <span className="text-amber-300">"{result.formatted}"</span>
              </div>
              <div className="text-neutral-500">{"}"}</div>
            </div>
          )}
        </div>
      </div>

      <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-4">
        <p className="text-xs text-neutral-500 font-medium mb-3">Ejemplos para probar:</p>
        <div className="flex flex-wrap gap-2">
          {[
            "529.982.247-25",
            "12.345.678-K",
            "20-12345678-9",
            "900427380-0",
            "20100070970",
            "11.222.333/0001-81",
            "12345678",
            "111.111.111-11",
          ].map((example) => (
            <button
              key={example}
              onClick={() => setInput(example)}
              className="text-xs font-mono bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white px-3 py-1.5 rounded-lg transition-colors border border-neutral-700 hover:border-neutral-600"
            >
              {example}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Demo() {
  const [activeTab, setActiveTab] = useState<TabId>("br");

  const rows: Record<Exclude<TabId, "detect">, DemoRow[]> = {
    br: getBrRows(),
    cl: getClRows(),
    ar: getArRows(),
    co: getCoRows(),
    pe: getPeRows(),
  };

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
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Page title */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            Demo interactiva
          </h1>
          <p className="text-neutral-400 text-base">
            Explora todas las funciones de <code className="text-palta-400 font-mono text-sm bg-palta-950/60 px-1.5 py-0.5 rounded">@zeluizr/palta</code> con datos reales. Selecciona un país o usa el detector automático.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-8 bg-neutral-900/60 p-1 rounded-xl border border-neutral-800 w-fit">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-neutral-800 text-white shadow-sm"
                  : "text-neutral-500 hover:text-neutral-300"
              }`}
            >
              <span>{tab.flag}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div>
          {activeTab === "detect" ? (
            <DetectPlayground />
          ) : (
            <CountryTable rows={rows[activeTab]} />
          )}
        </div>

        {/* Footer note */}
        <div className="mt-12 pt-8 border-t border-neutral-800 flex items-center justify-between">
          <p className="text-xs text-neutral-600">
            Todos los resultados se calculan en tiempo real usando{" "}
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
