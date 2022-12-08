import { Routes, Route } from "react-router-dom";
import { HomePage, NotFoundPage, CartPage, LoginPage, ItemDetails, Checkout, User, WishList } from "pages";
import { useState } from "react";
import "./services/i18n"

function App() {

          // const [locale, setLocale] = useState(i18.language);

          // i18.on('languageChanged', (lng) => setLocale(i18.language))



          return (

                    <Routes>
                              <Route path="/" element={<HomePage />} />
                              <Route path="/cart" element={<CartPage />} />
                              <Route path="*" element={<NotFoundPage />} />
                              <Route path="/auth/login" element={<LoginPage />} />
                              <Route path="/item/:itemId" element={<ItemDetails />} />
                              <Route path="/checkout" element={<Checkout />} />
                              <Route path="/user" element={<User />} />
                              <Route path="/wishlist" element={<WishList />} />
                    </Routes>

          );
}

export default App;
