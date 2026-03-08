import { useTranslation } from "react-i18next";
import { GitPullRequestArrow, CheckCircle2, Code2 } from "lucide-react";

const contributionTypes = [
  {
    key: "bugfix",
    icon: Code2,
  },
  {
    key: "newdoc",
    icon: GitPullRequestArrow,
  },
  {
    key: "tests",
    icon: CheckCircle2,
  },
] as const;

export default function Roadmap() {
  const { t } = useTranslation();

  return (
    <section id="roadmap" className="px-6 py-24 bg-neutral-950">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-palta-400 mb-4">
            Roadmap
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            {t("roadmap.title")}
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            {t("roadmap.subtitle")}
          </p>
        </div>

        {/* Big number display */}
        <div className="text-center mb-16">
          <div className="inline-flex flex-col items-center gap-4 bg-neutral-900/60 border border-neutral-800 rounded-2xl p-12">
            <span className="text-8xl font-bold text-palta-500">23</span>
            <p className="text-neutral-300 text-lg font-medium">
              {t("roadmap.allCountries")}
            </p>
          </div>
        </div>

        {/* Contribution section */}
        <div className="mb-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold mb-3">{t("roadmap.contribute")}</h3>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              {t("roadmap.contributeSubtitle")}
            </p>
          </div>

          {/* Contribution type cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {contributionTypes.map((type) => {
              const Icon = type.icon;
              const typeData = t(`roadmap.contributionTypes.${type.key}`, {
                returnObjects: true,
              }) as {
                title: string;
                description: string;
              };

              return (
                <div
                  key={type.key}
                  className="bg-neutral-900/40 border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-2.5 bg-palta-500/10 rounded-lg">
                      <Icon size={20} className="text-palta-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-100 mb-2">
                        {typeData.title}
                      </h4>
                      <p className="text-sm text-neutral-500 leading-relaxed">
                        {typeData.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://github.com/zeluizr/palta/issues/new"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-palta-600 hover:bg-palta-700 text-white text-sm font-medium px-5 py-2.5 rounded-xl transition-colors"
          >
            <GitPullRequestArrow size={16} />
            {t("roadmap.cta")}
          </a>
          <a
            href="https://github.com/zeluizr/palta"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-neutral-700 hover:border-neutral-500 text-neutral-300 hover:text-white text-sm font-medium px-5 py-2.5 rounded-xl transition-colors"
          >
            <Code2 size={16} />
            {t("roadmap.ctaSecondary")}
          </a>
        </div>
      </div>
    </section>
  );
}
