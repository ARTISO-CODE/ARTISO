import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CollectionsPage from './pages/CollectionsPage';
import HeritagePage from './pages/HeritagePage';
import ArtisansPage from './pages/ArtisansPage';
import ContactPage from './pages/ContactPage';
import ProductDetailPage from './pages/ProductDetailPage';
import Footer from './components/Footer';
import MessageAlert from './components/MessageAlert';
import './App.css';

import AddProduct from './components/admin/AddProduct';

export const messagePOPUP_Context = createContext();

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [messagePOPUP, setMessagePOPUP] = useState({ show: false, message: '', type: '' });

  useEffect(() => {
    setMessagePOPUP({ show: true, message: 'Bienvenue sur ARTISO', type: '' });
    setTimeout(() => {
      setMessagePOPUP({ show: false, message: '', type: '' });
    }, 3000);
  }, []);

  function UPDATE_CART_COUNT(){
    const COUNT = JSON.parse(localStorage.getItem('cart')) || [];
    setCartCount(COUNT.reduce((total, item) => total + item.quantity, 0))
  }

  return (
    <Router>
      <div className="app">
        <messagePOPUP_Context.Provider value={{ messagePOPUP, setMessagePOPUP }}>
          
          <ScrollToTop />

          <MessageAlert show={messagePOPUP.show} message={messagePOPUP.message} type={messagePOPUP.type} />

          <Navbar isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} cartCount={cartCount} UPDATE_CART_COUNT={UPDATE_CART_COUNT} />

          {/* <Routes /> */}
          <Routes>
            <Route exact path="/" element={<Home UPDATE_CART_COUNT={UPDATE_CART_COUNT} />} />
            <Route exact path="/collections" element={<CollectionsPage UPDATE_CART_COUNT={UPDATE_CART_COUNT} />} />
            <Route exact path="/heritage" element={<HeritagePage />} />
            <Route exact path="/artisans" element={<ArtisansPage />} />
            <Route exact  path="/contact" element={<ContactPage />} />
            <Route exact path="/product/:id" element={<ProductDetailPage UPDATE_CART_COUNT={UPDATE_CART_COUNT} />} />
            <Route exact path='/add_product' element={<AddProduct />} /> 
          </Routes>

          <Footer />

        </messagePOPUP_Context.Provider>
      </div>
    </Router>
  );
}

export default App;