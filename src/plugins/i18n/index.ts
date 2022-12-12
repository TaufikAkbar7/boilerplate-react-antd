// i18n
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Language
import resources from "./language-i18n";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  resources,
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
