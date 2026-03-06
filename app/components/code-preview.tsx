import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { cn } from "~/lib/utils";

type Tab = "docs" | "currency" | "phone" | "detect";

const codeBlocks: Record<Tab, React.ReactNode> = {
  docs: (
    <>
      <span className="text-purple-400">import</span>
      {" "}
      <span className="text-neutral-100">{"{ br, cl, ar }"}</span>
      {" "}
      <span className="text-purple-400">from</span>
      {" "}
      <span className="text-green-400">'palta'</span>
      {"\n\n"}
      <span className="text-neutral-500">{"// Brasil"}</span>
      {"\n"}
      <span className="text-neutral-100">br.cpf.</span>
      <span className="text-yellow-400">format</span>
      <span className="text-neutral-100">{"("}</span>
      <span className="text-green-400">'12345678901'</span>
      <span className="text-neutral-100">{")"}</span>
      {"     "}
      <span className="text-neutral-500">{"// '123.456.789-01'"}</span>
      {"\n"}
      <span className="text-neutral-100">br.cpf.</span>
      <span className="text-yellow-400">validate</span>
      <span className="text-neutral-100">{"("}</span>
      <span className="text-green-400">'12345678901'</span>
      <span className="text-neutral-100">{")"}</span>
      {"   "}
      <span className="text-orange-400">{"// true"}</span>
      {"\n"}
      <span className="text-neutral-100">br.cnpj.</span>
      <span className="text-yellow-400">format</span>
      <span className="text-neutral-100">{"("}</span>
      <span className="text-green-400">'11222333000181'</span>
      <span className="text-neutral-100">{")"}</span>
      {" "}
      <span className="text-neutral-500">{"// '11.222.333/0001-81'"}</span>
      {"\n\n"}
      <span className="text-neutral-500">{"// Chile"}</span>
      {"\n"}
      <span className="text-neutral-100">cl.rut.</span>
      <span className="text-yellow-400">format</span>
      <span className="text-neutral-100">{"("}</span>
      <span className="text-green-400">'12345678-9'</span>
      <span className="text-neutral-100">{")"}</span>
      {"      "}
      <span className="text-neutral-500">{"// '12.345.678-9'"}</span>
      {"\n"}
      <span className="text-neutral-100">cl.rut.</span>
      <span className="text-yellow-400">validate</span>
      <span className="text-neutral-100">{"("}</span>
      <span className="text-green-400">'12345678-9'</span>
      <span className="text-neutral-100">{")"}</span>
      {"    "}
      <span className="text-orange-400">{"// true"}</span>
      {"\n\n"}
      <span className="text-neutral-500">{"// Argentina"}</span>
      {"\n"}
      <span className="text-neutral-100">ar.cuit.</span>
      <span className="text-yellow-400">format</span>
      <span className="text-neutral-100">{"("}</span>
      <span className="text-green-400">'20123456789'</span>
      <span className="text-neutral-100">{")"}</span>
      {"    "}
      <span className="text-neutral-500">{"// '20-12345678-9'"}</span>
      {"\n"}
      <span className="text-neutral-100">ar.cuit.</span>
      <span className="text-yellow-400">validate</span>
      <span className="text-neutral-100">{"("}</span>
      <span className="text-green-400">'20123456789'</span>
      <span className="text-neutral-100">{")"}</span>
      {"  "}
      <span className="text-orange-400">{"// true"}</span>
    </>
  ),
  currency: (
    <>
      <span className="text-purple-400">import</span>
      {" "}
      <span className="text-neutral-100">{"{ br, cl, ar, co, pe }"}</span>
      {" "}
      <span className="text-purple-400">from</span>
      {" "}
      <span className="text-green-400">'palta'</span>
      {"\n\n"}
      <span className="text-neutral-100">br.</span>
      <span className="text-yellow-400">currency</span>
      <span className="text-neutral-100">{"("}</span>
      <span className="text-orange-400">1234.56</span>
      <span className="text-neutral-100">{")"}</span>
      {"    "}
      <span className="text-neutral-500">{"// 'R$ 1.234,56'"}</span>
      {"\n"}
      <span className="text-neutral-100">cl.</span>
      <span className="text-yellow-400">currency</span>
      <span className="text-neutral-100">{"("}</span>
      <span className="text-orange-400">15990</span>
      <span className="text-neutral-100">{")"}</span>
      {"      "}
      <span className="text-neutral-500">{"// '$15.990'"}</span>
      {"\n"}
      <span className="text-neutral-100">ar.</span>
      <span className="text-yellow-400">currency</span>
      <span className="text-neutral-100">{"("}</span>
      <span className="text-orange-400">4500.50</span>
      <span className="text-neutral-100">{")"}</span>
      {"    "}
      <span className="text-neutral-500">{"// '$ 4.500,50'"}</span>
      {"\n"}
      <span className="text-neutral-100">co.</span>
      <span className="text-yellow-400">currency</span>
      <span className="text-neutral-100">{"("}</span>
      <span className="text-orange-400">89900</span>
      <span className="text-neutral-100">{")"}</span>
      {"      "}
      <span className="text-neutral-500">{"// '$ 89.900'"}</span>
      {"\n"}
      <span className="text-neutral-100">pe.</span>
      <span className="text-yellow-400">currency</span>
      <span className="text-neutral-100">{"("}</span>
      <span className="text-orange-400">1234.56</span>
      <span className="text-neutral-100">{")"}</span>
      {"    "}
      <span className="text-neutral-500">{"// 'S/ 1,234.56'"}</span>
    </>
  ),
  phone: (
    <>
      <span className="text-purple-400">import</span>
      {" "}
      <span className="text-neutral-100">{"{ br, cl, ar }"}</span>
      {" "}
      <span className="text-purple-400">from</span>
      {" "}
      <span className="text-green-400">'palta'</span>
      {"\n\n"}
      <span className="text-neutral-100">br.phone.</span>
      <span className="text-yellow-400">format</span>
      <span className="text-neutral-100">{"("}</span>
      <span className="text-green-400">'11999887766'</span>
      <span className="text-neutral-100">{")"}</span>
      {"\n"}
      <span className="text-neutral-500">{"// '(11) 99988-7766'"}</span>
      {"\n\n"}
      <span className="text-neutral-100">cl.phone.</span>
      <span className="text-yellow-400">format</span>
      <span className="text-neutral-100">{"("}</span>
      <span className="text-green-400">'912345678'</span>
      <span className="text-neutral-100">{")"}</span>
      {"\n"}
      <span className="text-neutral-500">{"// '+56 9 1234 5678'"}</span>
      {"\n\n"}
      <span className="text-neutral-100">ar.phone.</span>
      <span className="text-yellow-400">format</span>
      <span className="text-neutral-100">{"("}</span>
      <span className="text-green-400">'1155667788'</span>
      <span className="text-neutral-100">{")"}</span>
      {"\n"}
      <span className="text-neutral-500">{"// '+54 9 11 5566-7788'"}</span>
    </>
  ),
  detect: (
    <>
      <span className="text-purple-400">import</span>
      {" "}
      <span className="text-neutral-100">{"{ detect }"}</span>
      {" "}
      <span className="text-purple-400">from</span>
      {" "}
      <span className="text-green-400">'palta'</span>
      {"\n\n"}
      <span className="text-yellow-400">detect</span>
      <span className="text-neutral-100">{"("}</span>
      <span className="text-green-400">'12.345.678-9'</span>
      <span className="text-neutral-100">{")"}</span>
      {"\n"}
      <span className="text-neutral-500">{"// { country: 'CL', type: 'rut', valid: true }"}</span>
      {"\n\n"}
      <span className="text-yellow-400">detect</span>
      <span className="text-neutral-100">{"("}</span>
      <span className="text-green-400">'123.456.789-01'</span>
      <span className="text-neutral-100">{")"}</span>
      {"\n"}
      <span className="text-neutral-500">{"// { country: 'BR', type: 'cpf', valid: true }"}</span>
      {"\n\n"}
      <span className="text-yellow-400">detect</span>
      <span className="text-neutral-100">{"("}</span>
      <span className="text-green-400">'20-12345678-9'</span>
      <span className="text-neutral-100">{")"}</span>
      {"\n"}
      <span className="text-neutral-500">{"// { country: 'AR', type: 'cuit', valid: true }"}</span>
    </>
  ),
};

export default function CodePreview() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<Tab>("docs");

  const tabs: { key: Tab; label: string }[] = [
    { key: "docs", label: t("codePreview.tabs.documents") },
    { key: "currency", label: t("codePreview.tabs.currency") },
    { key: "phone", label: t("codePreview.tabs.phone") },
    { key: "detect", label: t("codePreview.tabs.detect") },
  ];

  return (
    <section className="px-6 py-24 bg-neutral-900">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            {t("codePreview.title")}
          </h2>
          <p className="mt-4 text-neutral-400 text-lg">
            {t("codePreview.subtitle")}
          </p>
        </motion.div>

        <div className="bg-neutral-950 rounded-2xl overflow-hidden shadow-2xl">
          <div className="flex border-b border-neutral-800 px-6">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={cn(
                  "px-4 py-3 text-sm font-medium transition-colors border-b-2",
                  activeTab === tab.key
                    ? "text-palta-400 border-palta-600"
                    : "text-neutral-500 border-transparent hover:text-neutral-300"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="p-6 overflow-x-auto code-block">
            <pre className="text-sm font-mono leading-7">
              {codeBlocks[activeTab]}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
