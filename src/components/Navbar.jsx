import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Cart from './Cart';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0); // State to hold the cart count
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Get card count
    const COUNT = JSON.parse(localStorage.getItem('cart')) || [];
    setCartCount(COUNT.reduce((total, item) => total + item.quantity, 0))

  }, [localStorage.getItem('cart')]);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-brand-container">
          <img src="/logo.png" alt="ARTISO Logo" className="nav-logo" />
          <Link to="/" className="nav-brand">ARTISO</Link>
        </div>
        <div className="nav-links">
          <Link to="/collections">Collections</Link>
          <Link to="/heritage">Heritage</Link>
          <Link to="/artisans">Artisans</Link>
          <Link to="/contact">Contact</Link>
          <div className="nav-cart" onClick={toggleCart}>
            <span className="cart-icon">🛒</span>
            {/* {cartCount !== 0 && <span className="cart-count">{cartCount}</span>} */}
          </div>
        </div>
      </nav>
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navbar;
