import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router";
import { cn } from "~/lib/utils";

export default function Footer() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const currentLang = i18n.language.startsWith("pt") ? "pt" : "es";

  const switchLang = (lang: string) => {
    const params = new URLSearchParams(location.search);
    params.set("lang", lang);
    navigate(`${location.pathname}?${params.toString()}`, { replace: true });
    i18n.changeLanguage(lang);
  };

  return (
    <footer className="px-6 py-8 bg-neutral-900 border-t border-neutral-800">
      <div className="max-w-5xl mx-auto flex flex-col gap-4">
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

        <div className="flex items-center justify-center gap-1 text-xs text-neutral-500">
          <button
            onClick={() => switchLang("es")}
            className={cn(
              "px-2 py-1 rounded transition-colors",
              currentLang === "es" ? "text-white" : "hover:text-neutral-300"
            )}
          >
            ES
          </button>
          <span className="text-neutral-700">|</span>
          <button
            onClick={() => switchLang("pt")}
            className={cn(
              "px-2 py-1 rounded transition-colors",
              currentLang === "pt" ? "text-white" : "hover:text-neutral-300"
            )}
          >
            PT
          </button>
        </div>
      </div>
    </footer>
  );
}
