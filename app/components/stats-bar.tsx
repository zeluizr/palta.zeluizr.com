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
    </section>
  );
}
