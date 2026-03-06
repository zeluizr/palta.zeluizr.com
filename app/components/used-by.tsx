import { useTranslation } from "react-i18next";

export default function UsedBy() {
  const { t } = useTranslation();

  return (
    <section className="px-6 py-5 border-b border-neutral-800/60 flex items-center justify-center">
      <div className="flex items-center justify-center gap-3 flex-wrap text-sm text-neutral-500">
        <span className="text-xs uppercase tracking-widest text-neutral-700 font-medium">
          {t("usedBy.label")}
        </span>
        <a
          href="https://integram.me"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-300 font-medium hover:text-white transition-colors"
        >
          integram.me
        </a>

        <span className="text-neutral-800 select-none">·</span>

        <span className="text-xs uppercase tracking-widest text-neutral-700 font-medium">
          {t("usedBy.sponsors")}
        </span>
        <a
          href="https://inmmerce.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-300 font-medium hover:text-white transition-colors"
        >
          inmmerce
        </a>
        <span className="text-neutral-800 select-none">&</span>
        <a
          href="https://commente.me"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-300 font-medium hover:text-white transition-colors"
        >
          commente.me
        </a>
      </div>
    </section>
  );
}
