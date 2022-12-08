import i18next from "i18next";
import { initReactI18next } from "react-i18next";
// "Inline" English and Arabic translations.
// We can localize to any language and any number of languages.
const resources = {
  en: {
    translation: {
        home: "Home",
        add_to_cart:"Add to cart",
        filter_by_price:"Filter by price"
    },
  },
  sr: {
    translation: {
      home: "Naslovna",
      add_to_cart:"Dodaj u korpu",
      filter_by_price:"Filtriaj po ceni"
    },
  },
};
i18next
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false,
    },
    debug: false,
  });
export default i18next;