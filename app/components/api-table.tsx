import { useTranslation } from "react-i18next";

type Row = {
  fn: string;
  desc: { es: string; pt: string };
  example: string;
};

const rows: Row[] = [
  {
    fn: ".format()",
    desc: { es: "Formatea con puntuación", pt: "Formata com pontuação" },
    example: "'12345678901' → '123.456.789-01'",
  },
  {
    fn: ".strip()",
    desc: { es: "Remueve formato", pt: "Remove formatação" },
    example: "'123.456.789-01' → '12345678901'",
  },
  {
    fn: ".validate()",
    desc: { es: "Valida dígito verificador", pt: "Valida dígito verificador" },
    example: "true | false",
  },
  {
    fn: ".mask",
    desc: { es: "Máscara para inputs", pt: "Máscara para inputs" },
    example: "'###.###.###-##'",
  },
  {
    fn: "currency()",
    desc: { es: "Formatea número en moneda", pt: "Formata número em moeda" },
    example: "1234.56 → 'R$ 1.234,56'",
  },
  {
    fn: "currency.parse()",
    desc: { es: "Moneda a número", pt: "Moeda para número" },
    example: "'R$ 1.234,56' → 1234.56",
  },
  {
    fn: "detect()",
    desc: { es: "Detecta país y tipo", pt: "Detecta país e tipo" },
    example: "{ country, type, valid }",
  },
];

export default function ApiTable() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.startsWith("pt") ? "pt" : "es";

  return (
    <section id="api" className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            {t("api.title")}
          </h2>
          <p className="mt-4 text-neutral-400 text-lg">{t("api.subtitle")}</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="border-b border-neutral-700 bg-neutral-900">
                <th className="px-4 py-3 font-semibold text-neutral-300">
                  {t("api.headers.function")}
                </th>
                <th className="px-4 py-3 font-semibold text-neutral-300">
                  {t("api.headers.description")}
                </th>
                <th className="px-4 py-3 font-semibold text-neutral-300">
                  {t("api.headers.example")}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800">
              {rows.map((row) => (
                <tr key={row.fn}>
                  <td className="px-4 py-3 font-mono text-xs text-palta-700">
                    {row.fn}
                  </td>
                  <td className="px-4 py-3 text-neutral-400">
                    {row.desc[lang]}
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-neutral-500">
                    {row.example}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
