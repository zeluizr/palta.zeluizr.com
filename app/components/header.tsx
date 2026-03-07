import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";

export default function Header() {
  const { t } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "#features", label: t("header.features") },
    { href: "#countries", label: t("header.countries") },
    { href: "#install", label: t("header.install") },
    { href: "#api", label: t("header.api") },
    { href: "#roadmap", label: t("header.roadmap") },
    { href: "#changelog", label: t("header.changelog") },
    { href: "/demo", label: t("header.demo"), external: false },
  ];

  return (
    <header className="sticky top-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between gap-4">
        <a href="/" className="flex items-center shrink-0 text-xl leading-none">
          🥑
        </a>

        <nav className="hidden sm:flex items-center gap-6 text-sm text-neutral-400">
          {navLinks.map((link) =>
            link.external === false ? (
              <Link
                key={link.href}
                to={link.href}
                className="text-palta-400 font-medium hover:text-palta-300 transition-colors"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        <div className="hidden sm:flex items-center gap-4">
          <a
            href="#install"
            className="bg-white text-neutral-900 text-sm font-medium px-4 py-1.5 rounded-lg hover:bg-neutral-200 transition-colors min-w-[140px] text-center"
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
          {navLinks.map((link) =>
            link.external === false ? (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm text-palta-400 font-medium hover:text-palta-300 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-neutral-400 hover:text-white transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            )
          )}
          <a
            href="#install"
            className="bg-white text-neutral-900 text-sm font-medium px-4 py-2 rounded-lg hover:bg-neutral-200 transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            {t("header.cta")}
          </a>
        </div>
      )}
    </header>
  );
}
