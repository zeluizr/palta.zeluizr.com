import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router";
import { Menu, X, ChevronsUpDown, Check } from "lucide-react";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";

const langs = [
  { code: "es", flag: "🇪🇸", label: "Español" },
  { code: "en", flag: "🇺🇸", label: "English" },
  { code: "pt", flag: "🇧🇷", label: "Português" },
];

export default function Header() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const currentLang =
    langs.find((l) => i18n.language.startsWith(l.code)) ?? langs[0];

  const switchLang = (lang: typeof langs[0]) => {
    const params = new URLSearchParams(location.search);
    params.set("lang", lang.code);
    navigate(`${location.pathname}?${params.toString()}`, { replace: true });
    i18n.changeLanguage(lang.code);
  };

  const navLinks = [
    { href: "#features", label: t("header.features") },
    { href: "#countries", label: t("header.countries") },
    { href: "#install", label: t("header.install") },
    { href: "#api", label: t("header.api") },
  ];

  const LangSelect = () => (
    <Listbox value={currentLang} onChange={switchLang}>
      <div className="relative">
        <ListboxButton className="flex items-center gap-1.5 text-sm text-neutral-400 hover:text-white transition-colors cursor-pointer">
          <span>{currentLang.flag}</span>
          <span className="font-medium">{currentLang.code.toUpperCase()}</span>
          <ChevronsUpDown size={14} className="text-neutral-600" />
        </ListboxButton>
        <ListboxOptions className="absolute right-0 mt-2 w-40 rounded-xl bg-neutral-900 border border-neutral-800 shadow-xl outline-none overflow-hidden z-50">
          {langs.map((lang) => (
            <ListboxOption
              key={lang.code}
              value={lang}
              className="group flex items-center gap-3 px-3 py-2.5 text-sm cursor-pointer text-neutral-400 data-[focus]:bg-neutral-800 data-[focus]:text-white"
            >
              <span className="text-base">{lang.flag}</span>
              <span className="flex-1">{lang.label}</span>
              <Check
                size={14}
                className="text-palta-400 opacity-0 group-data-[selected]:opacity-100"
              />
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
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

        <div className="hidden sm:flex items-center gap-4">
          <LangSelect />
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
            <LangSelect />
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
