
import 'bulma/css/bulma.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './components/Home';
import Products from './components/pages/products/Products';
import Cart from './components/pages/cart/Cart';
import Checkout from './components/pages/chekout/Checkout';
import ProductDetail from './components/pages/product-detail/ProductDetail';
import AdminPanel from './components/pages/admin/Admin-panel';
import NotFoundPage from './components/NotFoundPage';
// import SearchPage from './components/pages/search/SearchPage';

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
          <Route path="/admin" element={<AdminPanel />} />
          {/* <Route path="/" element={<SearchPage />} /> */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
