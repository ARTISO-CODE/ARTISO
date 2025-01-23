import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaInstagram } from "react-icons/fa";
import { messagePOPUP_Context } from '../App';

const Footer = () => {
  const [email, setEmail] = useState('');
      const { setMessagePOPUP } = useContext(messagePOPUP_Context);
  
      const handleSubmit = (e) => {
          e.preventDefault();
          // Add your form submission logic here
          setMessagePOPUP({ show: true, message: 'Thank you for subscribing', type: 'success' });
          setEmail('');
          setTimeout(() => {
              setMessagePOPUP({ show: false, message: '', type: '' });
          }, 3000);
      };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>ARTISO</h3>
          <p>Découvrez l'elegance de l'artisanat marocain, où chaque création raconte une histoire. Un pont entre traditions séculaires et modernité, pour sublimer votre quotidien</p>
        </div>
        
        <div className="footer-section">
          <h4>Liens Rapides</h4>
          <ul>
            <li><Link to="/collections">Nos Collections</Link></li>
            <li><Link to="/heritage">Notre Héritage</Link></li>
            <li><Link to="/artisans">Nos Artisans</Link></li>
            <li><Link to="/contact">Contactez-Nous</Link></li>
            {/* <li><a href="/shop">Shop All</a></li>
            <li><a href="/new-arrivals">New Arrivals</a></li>
            <li><a href="/bestsellers">Bestsellers</a></li>
            <li><a href="/artisans">Meet Our Artisans</a></li> */}
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Service Client</h4>
          <ul>
            <li><a href="/shipping">Infos de Livraison</a></li>
            <li><a href="/returns">Retours & Échanges</a></li>
            <li><a href="/care">Entretien des Produits</a></li>
            <li><a href="/faq">Questions Fréquentes</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>inspirez-vous de nos créations artisanales</h4>
          <div className="social-links">
            <a href="https://www.instagram.com/artiso.__/" className="social-link" target="_blank"><span><FaInstagram /></span></a>
          </div>
          <div className="newsletter">
            <h4>Recevez nos nouveautés</h4>
            <div className="newsletter-input">
              <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email" value={email} />
              <button onClick={handleSubmit}>Valider</button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 ARTISO. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="/privacy">Politique de Confidentialité</a>
          <a href="/terms">Conditions Générales de Vente</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;