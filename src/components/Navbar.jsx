import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Cart from './Cart';
import './Navbar.css';
import { RiShoppingCart2Fill } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";

const Navbar = ({isCartOpen, setIsCartOpen, cartCount, UPDATE_CART_COUNT}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setisMenuOpen] = useState(false);
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
    UPDATE_CART_COUNT();

  }, [cartCount]);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>

        <Link to="/" className="nav-brand-container" onClick={() => {setisMenuOpen(false)}}>
          <img src="/logo.png" alt="ARTISO Logo" className="nav-logo" />
          <div className="nav-brand">ARTISO</div>
        </Link>

        <div className="nav-links">
          <Link to="/collections">Collections</Link>
          <Link to="/heritage">Heritage</Link>
          <Link to="/artisans">Artisans</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="nav-CM">
          <span className="nav-cart" onClick={toggleCart}>
            <RiShoppingCart2Fill />
            {cartCount !== 0 && <span className="cart-count">{cartCount}</span>}
          </span>

          <span onClick={() => {setisMenuOpen(!isMenuOpen)}} className="nav-menu"><IoMenu /></span>
        </div>

        <div className={`nav-links-inMenu ${isMenuOpen ? 'show' : 'hide'}`}>
          <Link to="/collections" onClick={() => {setisMenuOpen(false)}}>Collections</Link>
          <Link to="/heritage" onClick={() => {setisMenuOpen(false)}}>Heritage</Link>
          <Link to="/artisans" onClick={() => {setisMenuOpen(false)}}>Artisans</Link>
          <Link to="/contact" onClick={() => {setisMenuOpen(false)}}>Contact</Link>
        </div>
        
      </nav>
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} UPDATE_CART_COUNT={UPDATE_CART_COUNT} />
    </>
  );
};

export default Navbar;
