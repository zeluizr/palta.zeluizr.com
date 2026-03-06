import type { MetaFunction, LoaderFunctionArgs } from "react-router";
import { useLoaderData } from "react-router";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import Header from "~/components/header";
import Hero from "~/components/hero";
import StatsBar from "~/components/stats-bar";
import UsedBy from "~/components/used-by";
import Features from "~/components/features";
import CodePreview from "~/components/code-preview";
import Countries from "~/components/countries";
import Install from "~/components/install";
import ApiTable from "~/components/api-table";
import Roadmap from "~/components/roadmap";
import Footer from "~/components/footer";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const lang = url.searchParams.get("lang") ?? "es";
  return { lang };
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  const lang = data?.lang ?? "es";
  const title =
    lang === "pt"
      ? "palta — Formatação e validação de dados da América Latina"
      : lang === "en"
      ? "palta — Format & validate Latin American data"
      : "palta — Formateo y validación de datos de América Latina";
  const description =
    lang === "pt"
      ? "Biblioteca TypeScript para formatar e validar CPF, RUT, CUIT, NIT, RUC, moedas, telefones e CEPs. Zero dependencies, tree-shakeable."
      : lang === "en"
      ? "TypeScript library to format and validate CPF, RUT, CUIT, NIT, RUC, currencies, phones and zip codes. Zero dependencies, tree-shakeable."
      : "Biblioteca TypeScript para formatear y validar RUT, CUIT, CPF, NIT, RUC, monedas, teléfonos y códigos postales. Zero dependencies, tree-shakeable.";

  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { property: "og:url", content: "https://palta.dev" },
    { property: "og:image", content: "https://palta.dev/og-image.svg" },
    { tagName: "link", rel: "canonical", href: "https://palta.dev" },
  ];
};

export default function Home() {
  const { lang } = useLoaderData<typeof loader>();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lang && lang !== i18n.language) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <UsedBy />
        <Features />
        <CodePreview />
        <Countries />
        <Install />
        <ApiTable />
        <Roadmap />
      </main>
      <Footer />
    </>
  );
}
