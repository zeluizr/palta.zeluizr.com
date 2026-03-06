import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { cn } from "~/lib/utils";

const langs = [
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
  { code: "pt", label: "PT" },
];

export default function Header() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const currentLang = langs.find((l) => i18n.language.startsWith(l.code))?.code ?? "es";

  const switchLang = (lang: string) => {
    const params = new URLSearchParams(location.search);
    params.set("lang", lang);
    navigate(`${location.pathname}?${params.toString()}`, { replace: true });
    i18n.changeLanguage(lang);
  };

  const navLinks = [
    { href: "#features", label: t("header.features") },
    { href: "#countries", label: t("header.countries") },
    { href: "#install", label: t("header.install") },
    { href: "#api", label: t("header.api") },
  ];

  const LangSwitcher = ({ className }: { className?: string }) => (
    <div className={cn("flex items-center bg-neutral-900 border border-neutral-800 rounded-lg p-0.5", className)}>
      {langs.map((lang) => (
        <button
          key={lang.code}
          onClick={() => switchLang(lang.code)}
          className={cn(
            "px-2.5 py-1 rounded-md text-xs font-medium transition-colors",
            currentLang === lang.code
              ? "bg-neutral-700 text-white"
              : "text-neutral-500 hover:text-neutral-300"
          )}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );

  return (
    <header className="sticky top-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between gap-4">
        <a href="#" className="flex items-center gap-2 text-[15px] font-semibold shrink-0">
          <span className="text-xl">🥑</span> palta
        </a>

        <nav className="hidden sm:flex items-center gap-6 text-sm text-neutral-400">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden sm:flex items-center gap-3">
          <LangSwitcher />
          <a
            href="#install"
            className="bg-white text-neutral-900 text-sm font-medium px-4 py-1.5 rounded-lg hover:bg-neutral-200 transition-colors"
          >
            {t("header.cta")}
          </a>
        </div>

        <button
          className="sm:hidden text-neutral-400 hover:text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="sm:hidden border-t border-neutral-800 bg-neutral-950 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-neutral-400 hover:text-white transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center justify-between">
            <LangSwitcher />
            <a
              href="#install"
              className="bg-white text-neutral-900 text-sm font-medium px-4 py-2 rounded-lg hover:bg-neutral-200 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {t("header.cta")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
