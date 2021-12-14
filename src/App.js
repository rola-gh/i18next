import "./App.css";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import ar from "./lang/ar.json";
import en from "./lang/en.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: ar,
    },
    ar: {
      translation: en,
    },
  },
  lng: "ar",
  fallbackLng: "ar",
  interpolation: {
    escapeValue: false,
  },
});
function App() {
  const { t } = useTranslation();
  return (
      <div dir={i18n.dir()}>
        <h2>{t("Welcome to React")}</h2>
        <button
            onClick={() => {
              i18n.changeLanguage("en");
            }}
        >
          english
        </button>
        <button
            onClick={() => {
              i18n.changeLanguage("ar");
            }}
        >
          العربية
        </button>
      </div>
  );
}
export default App;