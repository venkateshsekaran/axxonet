import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-locize-backend";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init({
    debug: true,
    fallbackLng: "en",
    saveMissing: true,
    backend: {
      projectId: "8d5f7f1c-0a41-454f-a6a5-61c2e5efc692",
      apiKey: "e81e3866-902b-4dc9-a384-ca7bc81360ec",
    },
  });
