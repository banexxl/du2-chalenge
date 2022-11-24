import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/cart/CartProvider";
// this is example provider
import { CounterProvider } from "./context/counter/CounterProvider";
import { HomePage, ExamplePage, NotFoundPage, CartPage, LoginPage, Register, ItemDetails } from "pages";

function App() {
          return (

                    <CounterProvider>
                              <CartProvider>
                                        <Routes>
                                                  <Route path="/" element={<HomePage />} />
                                                  <Route path="/example" element={<ExamplePage />} />
                                                  <Route path="/cart" element={<CartPage />} />
                                                  <Route path="*" element={<NotFoundPage />} />
                                                  <Route path="/login" element={<LoginPage />} />
                                                  <Route path="/register" element={<Register />} />
                                                  <Route path="/item/:itemId" element={<ItemDetails />} />
                                        </Routes>
                              </CartProvider>
                    </CounterProvider>

          );
}

export default App;
