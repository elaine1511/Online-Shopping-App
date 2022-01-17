
import 'bulma/css/bulma.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './components/Home';
import Products from './components/pages/products/Products';
import Cart from './components/pages/cart/Cart';
import Checkout from './components/Checkout';
import ProductDetail from './components/pages/product-detail/ProductDetail';
import Admin from './components/Admin';
import NotFoundPage from './components/NotFoundPage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
