import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-logo">
        <img src="/logo.png" alt="ARTISO" />
      </div>
      <div className="nav-links">
        <a href="#collections">Collections</a>
        <a href="#heritage">Heritage</a>
        <a href="#artisans">Artisans</a>
        <a href="#contact">Contact</a>
      </div>
      <motion.button 
        className="nav-cta"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Explorer
      </motion.button>
    </motion.nav>
  );
};

export default Navbar