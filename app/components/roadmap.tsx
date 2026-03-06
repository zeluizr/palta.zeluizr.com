import { useTranslation } from "react-i18next";
import { GitPullRequestArrow, Clock, CalendarClock, Users } from "lucide-react";

type PhaseKey = "next" | "planned" | "community";

const phases: {
  key: PhaseKey;
  icon: React.ElementType;
  accent: string;
  badge: string;
  countries: string[];
  flags: Record<string, string>;
}[] = [
  {
    key: "next",
    icon: Clock,
    accent: "border-palta-600 bg-palta-950/40",
    badge: "bg-palta-600 text-white",
    countries: ["mexico", "uruguay", "ecuador"],
    flags: { mexico: "🇲🇽", uruguay: "🇺🇾", ecuador: "🇪🇨" },
  },
  {
    key: "planned",
    icon: CalendarClock,
    accent: "border-neutral-600 bg-neutral-900/40",
    badge: "bg-neutral-700 text-neutral-200",
    countries: ["venezuela", "bolivia", "paraguay", "dominicana", "costarica"],
    flags: { venezuela: "🇻🇪", bolivia: "🇧🇴", paraguay: "🇵🇾", dominicana: "🇩🇴", costarica: "🇨🇷" },
  },
  {
    key: "community",
    icon: Users,
    accent: "border-neutral-700 bg-neutral-900/20",
    badge: "bg-neutral-800 text-neutral-400",
    countries: ["guatemala", "honduras", "elsalvador", "nicaragua", "panama", "cuba"],
    flags: { guatemala: "🇬🇹", honduras: "🇭🇳", elsalvador: "🇸🇻", nicaragua: "🇳🇮", panama: "🇵🇦", cuba: "🇨🇺" },
  },
];

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
          <a
            href="https://github.com/zeluizr/palta/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 bg-palta-600 hover:bg-palta-700 text-white text-sm font-medium px-5 py-2.5 rounded-xl transition-colors"
          >
            <GitPullRequestArrow size={16} />
            {t("roadmap.cta")}
          </a>
        </div>

        {/* Phases */}
        <div className="flex flex-col gap-10">
          {phases.map((phase) => {
            const Icon = phase.icon;
            const phaseData = t(`roadmap.phases.${phase.key}`, { returnObjects: true }) as {
              label: string;
              description: string;
            };

            return (
              <div key={phase.key} className={`rounded-2xl border ${phase.accent} p-6`}>
                {/* Phase header */}
                <div className="flex items-start gap-3 mb-6">
                  <div className="flex items-center gap-2">
                    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${phase.badge}`}>
                      <Icon size={12} />
                      {phaseData.label}
                    </span>
                  </div>
                  <p className="text-sm text-neutral-500 leading-relaxed pt-0.5">
                    {phaseData.description}
                  </p>
                </div>

                {/* Countries grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {phase.countries.map((key) => {
                    const country = t(`roadmap.countries.${key}`, { returnObjects: true }) as {
                      name: string;
                      docs: string;
                    };
                    return (
                      <div
                        key={key}
                        className="flex items-start gap-3 bg-neutral-900/60 border border-neutral-800 rounded-xl p-4"
                      >
                        <span className="text-2xl leading-none mt-0.5">
                          {phase.flags[key]}
                        </span>
                        <div>
                          <div className="font-semibold text-sm text-neutral-100 mb-1">
                            {country.name}
                          </div>
                          <div className="text-xs text-neutral-500 leading-relaxed">
                            {country.docs}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-neutral-500 text-sm mb-3">{t("roadmap.contribute")}</p>
          <a
            href="https://github.com/zeluizr/palta/issues/new"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-neutral-700 hover:border-neutral-500 text-neutral-300 hover:text-white text-sm font-medium px-5 py-2.5 rounded-xl transition-colors"
          >
            <GitPullRequestArrow size={16} />
            {t("roadmap.cta")}
          </a>
        </div>
      </div>
    </section>
  );
}
