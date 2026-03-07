import { useTranslation } from "react-i18next";

const countries = [
  { key: "brasil",    flag: "🇧🇷", borderColor: "border-l-brasil"    },
  { key: "chile",     flag: "🇨🇱", borderColor: "border-l-chile"     },
  { key: "argentina", flag: "🇦🇷", borderColor: "border-l-argentina" },
  { key: "colombia",  flag: "🇨🇴", borderColor: "border-l-colombia"  },
  { key: "peru",      flag: "🇵🇪", borderColor: "border-l-peru"      },
  { key: "mexico",    flag: "🇲🇽", borderColor: "border-l-mexico"    },
  { key: "uruguay",   flag: "🇺🇾", borderColor: "border-l-uruguay"   },
  { key: "venezuela", flag: "🇻🇪", borderColor: "border-l-venezuela" },
  { key: "ecuador",   flag: "🇪🇨", borderColor: "border-l-ecuador"   },
] as const;

export default function Countries() {
  const { t } = useTranslation();

  return (
    <section id="countries" className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            {t("countries.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {countries.map(({ key, flag, borderColor }, i) => (
            <div
              key={key}
              className={`border border-neutral-800 rounded-xl p-5 border-l-4 ${borderColor} hover:shadow-sm transition-all`}
            >
              <div className="text-2xl mb-2">{flag}</div>
              <h3 className="font-semibold mb-1">{t(`countries.${key}.name`)}</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {t(`countries.${key}.docs`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
