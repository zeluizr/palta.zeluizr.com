import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";

export default function Header() {
  const { t } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "#features", label: t("header.features") },
    { href: "#countries", label: t("header.countries") },
    { href: "#install", label: t("header.install") },
    { href: "#api", label: t("header.api") },
    { href: "https://github.com/zeluizr/palta", label: "GitHub", external: true },
    { href: "https://www.npmjs.com/package/@zeluizr/palta", label: "npm", external: true },
  ];

  return (
    <header className="sticky top-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-[15px] font-semibold">
          <span className="text-xl">🥑</span> palta
        </a>

        <nav className="hidden sm:flex items-center gap-6 text-sm text-neutral-400">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-white transition-colors"
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#install"
          className="hidden sm:inline-flex bg-white text-neutral-900 text-sm font-medium px-4 py-1.5 rounded-lg hover:bg-neutral-200 transition-colors"
        >
          {t("header.cta")}
        </a>

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
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#install"
            className="bg-white text-neutral-900 text-sm font-medium px-4 py-2 rounded-lg text-center hover:bg-neutral-200 transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            {t("header.cta")}
          </a>
        </div>
      )}
    </header>
  );
}
