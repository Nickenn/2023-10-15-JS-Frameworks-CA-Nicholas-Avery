import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout/Checkout";
import PageNotFound from "./pages/PageNotFound";
import CheckoutSuccess from "./pages/CheckoutSuccess";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <ShoppingCartProvider>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="checkout/success" element={<CheckoutSuccess />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </ShoppingCartProvider>
  );
}
export default App;
