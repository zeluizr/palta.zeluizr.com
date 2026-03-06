import { useTranslation } from "react-i18next";
import { Heart, Coffee } from "lucide-react";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="px-6 py-12 bg-neutral-900 border-t border-neutral-800">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-6 text-center">

        {/* Logo */}
        <a href="/" className="text-3xl leading-none">🥑</a>

        {/* Links */}
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-neutral-400">
          <a href="https://github.com/zeluizr/palta" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
          <a href="https://www.npmjs.com/package/@zeluizr/palta" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">npm</a>
          <a href="https://commente.me" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">commente.me</a>
          <a href="https://integram.me" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">integram.me</a>
          <a href="https://github.com/zeluizr" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">zeluizr</a>
        </nav>

        {/* Copyright */}
        <div className="flex items-center gap-2 text-xs text-neutral-600">
          <span>&copy; 2026 palta &middot; MIT</span>
          <span>·</span>
          <span className="flex items-center gap-1">
            {t("footer.loveAndCoffee1")} <Heart size={12} className="text-pink-500 fill-pink-500 mx-0.5" /> {t("footer.loveAnd")} <Coffee size={12} className="text-neutral-400 mx-0.5" /> {t("footer.coffee")}
          </span>
          <span>·</span>
          <span>{t("footer.devBy")} <a href="https://github.com/zeluizr" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-400 transition-colors">zeluizr</a></span>
        </div>

      </div>
    </footer>
  );
}
