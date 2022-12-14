import { Routes, Route } from "react-router-dom";
import { HomePage, NotFoundPage, CartPage, LoginPage, ItemDetails, Checkout, User, WishList, ExamplePage } from "pages";
import PrivateRoutes from "utils/PrivateRoutes"
import "./services/i18n"

function App() {

          return (
                    <Routes>
                              <Route path="/" element={<HomePage />} />
                              <Route path="/cart" element={<CartPage />} />
                              <Route path="*" element={<NotFoundPage />} />
                              <Route path="/auth/login" element={<LoginPage />} />
                              <Route path="/item/:itemId" element={<ItemDetails />} />
                              <Route path="/checkout" element={<Checkout />} />
                              <Route element={<PrivateRoutes />}>
                                        <Route path="/user" element={<User />} />
                                        <Route path="/wishlist" element={<WishList />} />
                                        <Route path="/example" element={<ExamplePage />} />
                              </Route>
                    </Routes>
          );
}

export default App;
