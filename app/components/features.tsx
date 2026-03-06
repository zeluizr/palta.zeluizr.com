import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { FileText, DollarSign, Phone, MapPin, Search, Code2 } from "lucide-react";

const icons = [FileText, DollarSign, Phone, MapPin, Search, Code2];
const keys = ["documents", "currency", "phone", "zipcode", "detect", "typescript"] as const;

export default function Features() {
  const { t } = useTranslation();

  return (
    <section id="features" className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            {t("features.title")}
          </h2>
          <p className="mt-4 text-neutral-400 text-lg">{t("features.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {keys.map((key, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-palta-700 hover:shadow-sm transition-all"
              >
                <div className="w-10 h-10 bg-palta-950 rounded-lg flex items-center justify-center mb-4">
                  <Icon size={20} className="text-palta-400" />
                </div>
                <h3 className="font-semibold text-base mb-2">
                  {t(`features.items.${key}.title`)}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {t(`features.items.${key}.description`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
