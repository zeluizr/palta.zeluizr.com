import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { cn } from "~/lib/utils";

// Hardcoded display values (previously computed from palta lib)
const cpfFormatted = "123.456.789-09";
const cpfValid = true;
const cnpjFormatted = "11.222.333/0001-81";
const rutFormatted = "12.345.678-5";
const rutValid = true;
const cuitFormatted = "20-12345678-6";
const cuitValid = true;
const brlFormatted = "R$ 1.234,56";
const clpFormatted = "$ 15.990";
const arsFormatted = "$ 4.500,50";
const copFormatted = "$ 89.900";
const penFormatted = "S/ 1.234,56";
const brPhone = "(11) 99988-7766";
const clPhone = "+56 9 1234 5678";
const arPhone = "+54 9 11 5566-7788";
const detectCpf = { country: "BR", type: "CPF", valid: true };
const detectRut = { country: "CL", type: "RUT", valid: true };
const detectCuit = { country: "AR", type: "CUIT", valid: true };

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
      <span className="text-green-400">'12345678909'</span>
      <span className="text-neutral-100">{")"}</span>
      {"     "}
      <span className="text-neutral-500">{`// '${cpfFormatted}'`}</span>
      {"\n"}
      <span className="text-neutral-100">br.cpf.</span>
      <span className="text-yellow-400">validate</span>
      <span className="text-neutral-100">{"("}</span>
      <span className="text-green-400">'12345678909'</span>
      <span className="text-neutral-100">{")"}</span>
      {"   "}
      <span className="text-orange-400">{`// ${cpfValid}`}</span>
      {"\n"}
      <span className="text-neutral-100">br.cnpj.</span>
      <span className="text-yellow-400">format</span>
      <span className="text-neutral-100">{"("}</span>
      <span className="text-green-400">'11222333000181'</span>
      <span className="text-neutral-100">{")"}</span>
      {" "}
      <span className="text-neutral-500">{`// '${cnpjFormatted}'`}</span>
      {"\n\n"}
      <span className="text-neutral-500">{"// Chile"}</span>
      {"\n"}
      <span className="text-neutral-100">cl.rut.</span>
      <span className="text-yellow-400">format</span>
      <span className="text-neutral-100">{"("}</span>
      <span className="text-green-400">'12345678-5'</span>
      <span className="text-neutral-100">{")"}</span>
      {"      "}
      <span className="text-neutral-500">{`// '${rutFormatted}'`}</span>
      {"\n"}
      <span className="text-neutral-100">cl.rut.</span>
      <span className="text-yellow-400">validate</span>
      <span className="text-neutral-100">{"("}</span>
      <span className="text-green-400">'12345678-5'</span>
      <span className="text-neutral-100">{")"}</span>
      {"    "}
      <span className="text-orange-400">{`// ${rutValid}`}</span>
      {"\n\n"}
      <span className="text-neutral-500">{"// Argentina"}</span>
      {"\n"}
      <span className="text-neutral-100">ar.cuit.</span>
      <span className="text-yellow-400">format</span>
      <span className="text-neutral-100">{"("}</span>
      <span className="text-green-400">'20123456786'</span>
      <span className="text-neutral-100">{")"}</span>
      {"    "}
      <span className="text-neutral-500">{`// '${cuitFormatted}'`}</span>
      {"\n"}
      <span className="text-neutral-100">ar.cuit.</span>
      <span className="text-yellow-400">validate</span>
      <span className="text-neutral-100">{"("}</span>
      <span className="text-green-400">'20123456786'</span>
      <span className="text-neutral-100">{")"}</span>
      {"  "}
      <span className="text-orange-400">{`// ${cuitValid}`}</span>
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
      <span className="text-neutral-100">br.currency.</span>
      <span className="text-yellow-400">format</span>
      <span className="text-neutral-100">{"("}</span>
      <span className="text-orange-400">1234.56</span>
      <span className="text-neutral-100">{")"}</span>
      {"    "}
      <span className="text-neutral-500">{`// '${brlFormatted}'`}</span>
      {"\n"}
      <span className="text-neutral-100">cl.currency.</span>
      <span className="text-yellow-400">format</span>
      <span className="text-neutral-100">{"("}</span>
      <span className="text-orange-400">15990</span>
      <span className="text-neutral-100">{")"}</span>
      {"      "}
      <span className="text-neutral-500">{`// '${clpFormatted}'`}</span>
      {"\n"}
      <span className="text-neutral-100">ar.currency.</span>
      <span className="text-yellow-400">format</span>
      <span className="text-neutral-100">{"("}</span>
      <span className="text-orange-400">4500.50</span>
      <span className="text-neutral-100">{")"}</span>
      {"    "}
      <span className="text-neutral-500">{`// '${arsFormatted}'`}</span>
      {"\n"}
      <span className="text-neutral-100">co.currency.</span>
      <span className="text-yellow-400">format</span>
      <span className="text-neutral-100">{"("}</span>
      <span className="text-orange-400">89900</span>
      <span className="text-neutral-100">{")"}</span>
      {"      "}
      <span className="text-neutral-500">{`// '${copFormatted}'`}</span>
      {"\n"}
      <span className="text-neutral-100">pe.currency.</span>
      <span className="text-yellow-400">format</span>
      <span className="text-neutral-100">{"("}</span>
      <span className="text-orange-400">1234.56</span>
      <span className="text-neutral-100">{")"}</span>
      {"    "}
      <span className="text-neutral-500">{`// '${penFormatted}'`}</span>
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
      <span className="text-neutral-500">{`// '${brPhone}'`}</span>
      {"\n\n"}
      <span className="text-neutral-100">cl.phone.</span>
      <span className="text-yellow-400">format</span>
      <span className="text-neutral-100">{"("}</span>
      <span className="text-green-400">'912345678'</span>
      <span className="text-neutral-100">{")"}</span>
      {"\n"}
      <span className="text-neutral-500">{`// '${clPhone}'`}</span>
      {"\n\n"}
      <span className="text-neutral-100">ar.phone.</span>
      <span className="text-yellow-400">format</span>
      <span className="text-neutral-100">{"("}</span>
      <span className="text-green-400">'91155667788'</span>
      <span className="text-neutral-100">{")"}</span>
      {"\n"}
      <span className="text-neutral-500">{`// '${arPhone}'`}</span>
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
      <span className="text-green-400">'111.444.777-35'</span>
      <span className="text-neutral-100">{")"}</span>
      {"\n"}
      <span className="text-neutral-500">{`// { country: '${detectCpf?.country}', type: '${detectCpf?.type}', valid: ${detectCpf?.valid} }`}</span>
      {"\n\n"}
      <span className="text-yellow-400">detect</span>
      <span className="text-neutral-100">{"("}</span>
      <span className="text-green-400">'76.354.771-K'</span>
      <span className="text-neutral-100">{")"}</span>
      {"\n"}
      <span className="text-neutral-500">{`// { country: '${detectRut?.country}', type: '${detectRut?.type}', valid: ${detectRut?.valid} }`}</span>
      {"\n\n"}
      <span className="text-yellow-400">detect</span>
      <span className="text-neutral-100">{"("}</span>
      <span className="text-green-400">'20-20123456-6'</span>
      <span className="text-neutral-100">{")"}</span>
      {"\n"}
      <span className="text-neutral-500">{`// { country: '${detectCuit?.country}', type: '${detectCuit?.type}', valid: ${detectCuit?.valid} }`}</span>
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
