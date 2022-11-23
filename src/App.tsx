import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/cart/CartProvider";
// this is example provider
import { CounterProvider } from "./context/counter/CounterProvider";
import { AuthProvider } from "context/auth/authcontext";
import { HomePage, ExamplePage, NotFoundPage, CartPage, LoginPage, Register } from "pages";

function App() {
          return (
                    <AuthProvider>
                              <CounterProvider>
                                        <CartProvider>
                                                  <Routes>
                                                            <Route path="/" element={<HomePage />} />
                                                            <Route path="/example" element={<ExamplePage />} />
                                                            <Route path="/cart" element={<CartPage />} />
                                                            <Route path="*" element={<NotFoundPage />} />
                                                            <Route path="/login" element={<LoginPage />} />
                                                            <Route path="/register" element={<Register />} />
                                                  </Routes>
                                        </CartProvider>
                              </CounterProvider>
                    </AuthProvider>
          );
}

export default App;
