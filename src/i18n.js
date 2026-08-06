import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      LoginTitle: "Login",
      emailLabel: "Email Address",
      passwordLabel: "Password",
      btn: "Sign In",
      switchLang: "فارسی",
    },
  },
  fa: {
    translation: {
      LoginTitle: "ورود به حساب",
      emailLabel: "آدرس ایمیل",
      passwordLabel: "رمز عبور",
      btn: "ورود",
      switchLang: "English",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "fa",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;