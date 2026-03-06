import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import pt from "./pt";
import es from "./es";

const resources = {
  pt: { translation: pt },
  es: { translation: es },
};

const baseConfig = {
  resources,
  fallbackLng: "es",
  interpolation: { escapeValue: false },
};

if (!i18n.isInitialized) {
  if (typeof window !== "undefined") {
    // Client: use browser language detector (imported synchronously here,
    // bundler will tree-shake on server)
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const LanguageDetector = require("i18next-browser-languagedetector").default;
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
