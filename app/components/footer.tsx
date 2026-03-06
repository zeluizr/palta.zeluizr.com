import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="px-6 py-8 bg-neutral-900 border-t border-neutral-800">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-3 text-sm text-neutral-500">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <span className="flex items-center gap-1.5 text-neutral-400">
            {t("footer.madeWith")} <span>🥑</span> {t("footer.forLatam")}
          </span>
          <span className="hidden sm:block text-neutral-700">·</span>
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
          <span className="hidden sm:block text-neutral-700">·</span>
          <span>&copy; 2026 palta &middot; MIT</span>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-neutral-700">
          <span>{t("footer.byCommente")}</span>
          <a
            href="https://commente.me"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-400 transition-colors"
          >
            commente.me
          </a>
          <span>&middot;</span>
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
    </footer>
  );
}
