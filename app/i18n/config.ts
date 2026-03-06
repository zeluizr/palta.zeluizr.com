import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import pt from "./pt";
import es from "./es";
import en from "./en";

const resources = {
  pt: { translation: pt },
  es: { translation: es },
  en: { translation: en },
};

const baseConfig = {
  resources,
  fallbackLng: "es",
  interpolation: { escapeValue: false },
};

if (!i18n.isInitialized) {
  if (typeof window !== "undefined") {
    i18n
      .use(LanguageDetector)
      .use(initReactI18next)
      .init({
        ...baseConfig,
        detection: {
          order: ["querystring", "navigator", "htmlTag"],
          lookupQuerystring: "lang",
        },
      });
  } else {
    i18n.use(initReactI18next).init(baseConfig);
  }
}

export default i18n;
