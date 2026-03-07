import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import es from "./es";

const resources = {
  es: { translation: es },
};

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    lng: "es",
    fallbackLng: "es",
    interpolation: { escapeValue: false },
  });
}

export default i18n;
