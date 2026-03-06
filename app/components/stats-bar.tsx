import { useTranslation } from "react-i18next";

export default function StatsBar() {
  const { t } = useTranslation();

  const stats = [
    t("stats.zeroDeps"),
    t("stats.treeShakeable"),
    t("stats.typescript"),
    t("stats.countries"),
    t("stats.bundle"),
    t("stats.license"),
  ];

  return (
    <section className="px-6 py-8 border-y border-neutral-800 bg-neutral-900/50">
      <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-4 sm:gap-8">
        {stats.map((stat) => (
          <span key={stat} className="flex items-center gap-2 text-sm font-medium text-neutral-400">
            <span className="w-2 h-2 bg-palta-500 rounded-full" />
            {stat}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
        <a href="https://www.npmjs.com/package/@zeluizr/palta" target="_blank" rel="noopener noreferrer">
          <img src="https://img.shields.io/npm/v/%40zeluizr%2Fpalta?style=flat-square&color=6ab344" alt="npm" className="h-5" />
        </a>
        <a href="https://github.com/zeluizr/palta" target="_blank" rel="noopener noreferrer">
          <img src="https://img.shields.io/github/stars/zeluizr/palta?style=flat-square&color=6ab344&logo=github" alt="stars" className="h-5" />
        </a>
        <a href="https://github.com/zeluizr/palta/fork" target="_blank" rel="noopener noreferrer">
          <img src="https://img.shields.io/github/forks/zeluizr/palta?style=flat-square&color=6ab344&logo=github" alt="forks" className="h-5" />
        </a>
        <a href="https://github.com/zeluizr/palta/issues" target="_blank" rel="noopener noreferrer">
          <img src="https://img.shields.io/github/issues/zeluizr/palta?style=flat-square&color=6ab344&logo=github" alt="issues" className="h-5" />
        </a>
      </div>
    </section>
  );
}
