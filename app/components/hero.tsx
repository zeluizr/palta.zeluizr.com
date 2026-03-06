import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Copy, Check } from "lucide-react";

export default function Hero() {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("npm install @zeluizr/palta");
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section className="relative px-6 py-32 sm:py-40 overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-b from-palta-950/30 to-neutral-950"
        style={{
          backgroundImage:
            "radial-gradient(circle, #333 1px, transparent 1px), linear-gradient(to bottom, rgba(21,41,14,0.3), #0a0a0a)",
          backgroundSize: "24px 24px, 100% 100%",
        }}
      />
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="[animation:var(--animate-slide-up)]">
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-sm font-mono text-neutral-300 px-4 py-2 rounded-full mb-8 transition-colors cursor-pointer"
          >
            <span>$ npm install @zeluizr/palta</span>
            {copied ? (
              <Check size={16} className="text-palta-400" />
            ) : (
              <Copy size={16} className="text-neutral-400" />
            )}
          </button>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            {t("hero.titleLine1")}
            <br />
            {t("hero.titleLine2")}{" "}
            <span className="text-palta-400 underline decoration-palta-700 decoration-4 underline-offset-4">
              {t("hero.titleHighlight")}
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            {t("hero.subtitle")}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#install"
              className="bg-palta-600 hover:bg-palta-700 text-white font-medium px-8 py-3 rounded-xl transition-colors text-base"
            >
              {t("hero.cta")}
            </a>
            <a
              href="https://github.com/zeluizr/palta"
              className="border border-neutral-700 hover:border-neutral-500 text-neutral-300 font-medium px-8 py-3 rounded-xl transition-colors text-base flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              {t("hero.ctaSecondary")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
