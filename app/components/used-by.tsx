import { useTranslation } from "react-i18next";

export default function UsedBy() {
  const { t } = useTranslation();

  return (
    <section className="px-6 py-8 border-b border-neutral-800 bg-neutral-900/30">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-5">
        <div className="flex items-center gap-4 flex-wrap justify-center">
          <span className="text-xs text-neutral-600 uppercase tracking-widest font-medium">
            {t("usedBy.label")}
          </span>
          <a
            href="https://integram.me"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-neutral-400 hover:text-white transition-colors border border-neutral-800 hover:border-neutral-600 px-4 py-1.5 rounded-full"
          >
            integram.me
          </a>
        </div>

        <div className="flex items-center gap-4 flex-wrap justify-center">
          <span className="text-xs text-neutral-600 uppercase tracking-widest font-medium">
            {t("usedBy.sponsors")}
          </span>
          <a
            href="https://inmmerce.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-neutral-400 hover:text-white transition-colors border border-neutral-800 hover:border-neutral-600 px-4 py-1.5 rounded-full"
          >
            inmmerce
          </a>
          <a
            href="https://commente.me"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-neutral-400 hover:text-white transition-colors border border-neutral-800 hover:border-neutral-600 px-4 py-1.5 rounded-full"
          >
            commente.me
          </a>
        </div>
      </div>
    </section>
  );
}
