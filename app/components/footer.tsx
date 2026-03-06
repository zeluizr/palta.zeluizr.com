import { useTranslation } from "react-i18next";
import { Heart, Coffee } from "lucide-react";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="px-6 py-8 bg-neutral-900 border-t border-neutral-800">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-4">

        {/* Links principais */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-neutral-400">
          <span className="flex items-center gap-1.5">
            {t("footer.madeWith")} <span>🥑</span> {t("footer.forLatam")}
          </span>
          <span className="text-neutral-700">·</span>
          <a
            href="https://github.com/zeluizr/palta"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.npmjs.com/package/@zeluizr/palta"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            npm
          </a>
          <span className="text-neutral-700">·</span>
          <span>&copy; 2026 palta &middot; MIT</span>
        </div>

        {/* Créditos */}
        <div className="flex flex-col items-center gap-1.5 text-sm text-neutral-500">
          <div className="flex items-center gap-1.5 flex-wrap justify-center">
            <span>{t("footer.loveAndCoffee1")}</span>
            <Heart size={14} className="text-pink-500 fill-pink-500" />
            <span>{t("footer.loveAnd")}</span>
            <Coffee size={14} className="text-neutral-400" />
            <span>{t("footer.coffee")}</span>
            <a
              href="https://commente.me"
              target="_blank"
              rel="noopener noreferrer"
              className="text-palta-400 font-semibold hover:text-palta-300 transition-colors"
            >
              commente.me
            </a>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-neutral-600 flex-wrap justify-center">
            <span>{t("footer.devBy")}</span>
            <a
              href="https://github.com/zeluizr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-400 transition-colors"
            >
              zeluizr
            </a>
            <span className="text-neutral-700">·</span>
            <span>{t("footer.builtWith")}</span>
            <a
              href="https://integram.me"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-400 transition-colors"
            >
              integram.me
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
