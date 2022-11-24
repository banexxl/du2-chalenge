import { Routes, Route } from "react-router-dom";
import { HomePage, NotFoundPage, CartPage, LoginPage, Register, ItemDetails } from "pages";

function App() {
          return (


                    <Routes>
                              <Route path="/" element={<HomePage />} />
                              <Route path="/cart" element={<CartPage />} />
                              <Route path="*" element={<NotFoundPage />} />
                              <Route path="/login" element={<LoginPage />} />
                              <Route path="/register" element={<Register />} />
                              <Route path="/item/:itemId" element={<ItemDetails />} />
                    </Routes>


          );
}

export default App;
