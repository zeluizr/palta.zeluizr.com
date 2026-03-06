import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { Copy, Check } from "lucide-react";
import { cn } from "~/lib/utils";

type PkgManager = "npm" | "yarn" | "pnpm" | "bun" | "deno" | "npx";

const pkgCommands: Record<PkgManager, string> = {
  npm: "npm install palta",
  yarn: "yarn add palta",
  pnpm: "pnpm add palta",
  bun: "bun add palta",
  deno: "deno add npm:palta",
  npx: "npx jsr add palta",
};

const pkgManagers: PkgManager[] = ["npm", "yarn", "pnpm", "bun", "deno", "npx"];

export default function Install() {
  const { t } = useTranslation();
  const [activePkg, setActivePkg] = useState<PkgManager>("npm");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(pkgCommands[activePkg]);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section id="install" className="px-6 py-24 bg-neutral-950">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            {t("install.title")}
          </h2>
          <p className="mt-4 text-neutral-400 text-lg">{t("install.subtitle")}</p>
        </motion.div>

        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden mb-12">
          <div className="flex border-b border-neutral-800 px-2 pt-2 gap-1 overflow-x-auto">
            {pkgManagers.map((pkg) => (
              <button
                key={pkg}
                onClick={() => setActivePkg(pkg)}
                className={cn(
                  "text-xs font-medium px-4 py-2 rounded-t-lg transition-colors whitespace-nowrap",
                  activePkg === pkg
                    ? "bg-palta-600 text-white"
                    : "text-neutral-400 hover:text-white"
                )}
              >
                {pkg}
              </button>
            ))}
          </div>

          <div className="p-6 flex items-center justify-between gap-4">
            <code className="text-sm sm:text-base font-mono text-neutral-200">
              $ {pkgCommands[activePkg]}
            </code>
            <button
              onClick={handleCopy}
              className="flex-shrink-0 text-neutral-500 hover:text-white transition-colors p-2 rounded-lg hover:bg-neutral-800"
              aria-label="Copy command"
            >
              {copied ? (
                <Check size={20} className="text-palta-400" />
              ) : (
                <Copy size={20} />
              )}
            </button>
          </div>
        </div>

        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
          <div className="text-sm text-neutral-400 mb-3 font-medium">
            {t("install.import")}
          </div>
          <pre className="text-sm font-mono leading-7">
            <span className="text-purple-400">import</span>
            {" "}
            <span className="text-neutral-100">{"{ br }"}</span>
            {" "}
            <span className="text-purple-400">from</span>
            {" "}
            <span className="text-green-400">'palta'</span>
            {"        "}
            <span className="text-neutral-500">{"// ~1.2kb"}</span>
            {"\n"}
            <span className="text-purple-400">import</span>
            {" "}
            <span className="text-neutral-100">{"{ cl }"}</span>
            {" "}
            <span className="text-purple-400">from</span>
            {" "}
            <span className="text-green-400">'palta'</span>
            {"        "}
            <span className="text-neutral-500">{"// ~0.8kb"}</span>
            {"\n"}
            <span className="text-purple-400">import</span>
            {" "}
            <span className="text-neutral-100">br</span>
            {" "}
            <span className="text-purple-400">from</span>
            {" "}
            <span className="text-green-400">'palta/br'</span>
            {"        "}
            <span className="text-neutral-500">{"// alternativa"}</span>
          </pre>
          <div className="mt-4 text-xs text-neutral-500">{t("install.treeShake")}</div>
        </div>
      </div>
    </section>
  );
}
