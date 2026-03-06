import { useTranslation } from "react-i18next";
import { Sparkles, TrendingUp, Wrench } from "lucide-react";
import { cn } from "~/lib/utils";

type ChangeType = "new" | "improved" | "fixed";

const badgeConfig: Record<ChangeType, { icon: React.ElementType; className: string }> = {
  new: { icon: Sparkles, className: "bg-palta-950 text-palta-400 border border-palta-800" },
  improved: { icon: TrendingUp, className: "bg-blue-950/50 text-blue-400 border border-blue-900/50" },
  fixed: { icon: Wrench, className: "bg-orange-950/50 text-orange-400 border border-orange-900/50" },
};

export default function Changelog() {
  const { t } = useTranslation();

  const releases = t("changelog.releases", { returnObjects: true }) as Array<{
    version: string;
    date: string;
    tag: string;
    changes: Array<{ type: ChangeType; text: string }>;
  }>;

  const badge = t("changelog.badge", { returnObjects: true }) as Record<ChangeType, string>;

  return (
    <section id="changelog" className="px-6 py-24">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-neutral-600 mb-4">
            Changelog
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            {t("changelog.title")}
          </h2>
          <p className="text-neutral-400 text-lg">{t("changelog.subtitle")}</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 bottom-0 w-px bg-neutral-800" />

          <div className="flex flex-col gap-12">
            {releases.map((release) => (
              <div key={release.version} className="relative pl-8">
                {/* Dot */}
                <div className={cn(
                  "absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-neutral-950",
                  release.tag === "latest" ? "bg-palta-500" : "bg-neutral-700"
                )} />

                {/* Version header */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-xl font-bold font-mono text-white">
                    {release.version}
                  </span>
                  {release.tag === "latest" && (
                    <span className="text-xs font-semibold bg-palta-600 text-white px-2 py-0.5 rounded-full">
                      latest
                    </span>
                  )}
                  <span className="text-sm text-neutral-600 ml-auto">{release.date}</span>
                </div>

                {/* Changes */}
                <ul className="flex flex-col gap-3">
                  {release.changes.map((change, i) => {
                    const { icon: Icon, className } = badgeConfig[change.type] ?? badgeConfig.new;
                    return (
                      <li key={i} className="flex items-start gap-3">
                        <span className={cn(
                          "inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-md shrink-0 mt-0.5",
                          className
                        )}>
                          <Icon size={10} />
                          {badge[change.type]}
                        </span>
                        <span className="text-sm text-neutral-300 leading-relaxed">
                          {change.text}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
