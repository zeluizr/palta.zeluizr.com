import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="px-6 py-8 bg-neutral-900 border-t border-neutral-800">
      <div className="max-w-5xl mx-auto flex flex-col gap-3">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-neutral-400">
            <span>{t("footer.madeWith")}</span>
            <span>🥑</span>
            <span>{t("footer.forLatam")}</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-neutral-400">
            <a
              href="https://github.com/zeluizr/palta"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              {t("footer.github")}
            </a>
            <a
              href="https://www.npmjs.com/package/@zeluizr/palta"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              {t("footer.npm")}
            </a>
            <span>&copy; 2026 palta &middot; {t("footer.license")}</span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-1 text-xs text-neutral-600">
          <span>{t("footer.byCommente")}</span>
          <a
            href="https://commente.me"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-400 transition-colors underline underline-offset-2"
          >
            commente.me
          </a>
          <span>&middot;</span>
          <span>{t("footer.builtWith")}</span>
          <a
            href="https://integram.me"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-400 transition-colors underline underline-offset-2"
          >
            integram.me
          </a>
        </div>
      </div>
    </footer>
  );
}
