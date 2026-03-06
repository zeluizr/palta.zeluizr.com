import { useTranslation } from "react-i18next";

const logos = [
  {
    name: "integram.me",
    href: "https://integram.me",
    label: "usedBy.label",
  },
  {
    name: "inmmerce",
    href: "https://inmmerce.com",
    label: "usedBy.sponsors",
  },
  {
    name: "commente.me",
    href: "https://commente.me",
    label: "usedBy.sponsors",
  },
];

export default function UsedBy() {
  const { t } = useTranslation();

  return (
    <section className="px-6 py-12 border-b border-neutral-800/60">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-xs font-semibold uppercase tracking-widest text-neutral-600 mb-8">
          {t("usedBy.label")} &amp; {t("usedBy.sponsors")}
        </h2>
        <div className="mx-auto grid max-w-lg grid-cols-3 items-center gap-x-8 gap-y-6 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {logos.map((logo) => (
            <a
              key={logo.name}
              href={logo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center col-span-1"
            >
              <span className="text-neutral-500 hover:text-white transition-colors duration-200 font-semibold text-lg tracking-tight">
                {logo.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
