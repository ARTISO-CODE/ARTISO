import { motion } from 'framer-motion';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <img src="/logo.png" alt="ARTISO" className="footer-logo" />
          <p>L'ambassadeur de l'artisanat marocain en France</p>
        </div>
        
        <div className="footer-section">
          <h3>Navigation</h3>
          <ul>
            <li><a href="#collections">Collections</a></li>
            <li><a href="#heritage">Heritage</a></li>
            <li><a href="#artisans">Artisans</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contact</h3>
          <ul>
            <li>Email: contact@artiso.fr</li>
            <li>Tél: +33 1 23 45 67 89</li>
            <li>Paris, France</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Suivez-nous</h3>
          <div className="social-links">
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Instagram
            </motion.a>
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Facebook
            </motion.a>
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              LinkedIn
            </motion.a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 ARTISO. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer