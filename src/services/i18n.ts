import i18next from "i18next";
import { initReactI18next } from "react-i18next";
// "Inline" English and Arabic translations.
// We can localize to any language and any number of languages.
const resources = {
          en: {
                    translation: {
                              "home": "Home",
                              "add_to_cart": "Add to cart",
                              "filter_by_price": "Filter by price",
                              "not_found": "404 not found",
                              "user": "User",
                              "cart": "Cart",
                              "wish_list": "Wish List",
                              "login": "Log in",
                              "checkout": "Checkout",
                              "item_details": "Item Details",
                              "clear_filters": "Clear filters",
                              "rating": "Rating",
                              "price": "Price",
                              "category": "Category",
                              "description": "Description",
                              "clear_cart": "Clear cart",
                              "cart_totals": "Cart totals",
                              "subtotal": "Subtotal",
                              "shipping": "Shipping",
                              "flat_rate": "Flat rate",
                              "remove_from_wishlist": "Remove from wishlist",
                              "clear_wishlist": "Clear wish list",
                              "user_details": "User details",
                              "first_name": "First name",
                              "last_name": "Last name",
                              "city": "City",
                              "zip": "ZIP",
                              "street": "Street",
                              "email": "Email",
                              "phone": "Phone",
                              "submit": "Submit",
                              "thank_you": "Thank you!",
                              "package_confirm_message": "We will inform when package is on its way!"
                    },
          },
          sr: {
                    translation: {
                              "home": "Naslovna",
                              "add_to_cart": "Dodaj u korpu",
                              "filter_by_price": "Filtriaj po ceni",
                              "not_found": "404 stranica nije pronadjena",
                              "user": "Korisnik",
                              "cart": "Korpa",
                              "wish_list": "Omiljeni proizvodi",
                              "login": "Prijava",
                              "checkout": "Kupi",
                              "item_details": "Detalji",
                              "clear_filters": "Resetuj filtere",
                              "rating": "Ocena",
                              "price": "Cena",
                              "category": "Kategorija",
                              "description": "Opis",
                              "clear_cart": "Isprazni korpu",
                              "cart_totals": "Ukupan racun",
                              "subtotal": "Ukupno",
                              "shipping": "Transport",
                              "flat_rate": "Pausal",
                              "remove_from_wishlist": "Ukloni sa liste",
                              "clear_wishlist": "Resetuj listu",
                              "user_details": "Korisnicki podaci",
                              "first_name": "Ime",
                              "last_name": "Prezime",
                              "city": "Grad",
                              "zip": "Postanski broj",
                              "street": "Ulica",
                              "email": "Email",
                              "phone": "Telefon",
                              "submit": "Potvrdi",
                              "thank_you": "Hvala Vam!",
                              "package_confirm_message": "Obavesticemo vas kad posaljemo paket!"
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