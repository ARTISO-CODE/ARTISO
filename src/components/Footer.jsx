import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>ARTISO</h3>
          <p>Bridging Moroccan craftsmanship with contemporary design, bringing authentic artisanal pieces to your modern home.</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/shop">Shop All</a></li>
            <li><a href="/new-arrivals">New Arrivals</a></li>
            <li><a href="/bestsellers">Bestsellers</a></li>
            <li><a href="/artisans">Meet Our Artisans</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Customer Care</h4>
          <ul>
            <li><a href="/shipping">Shipping Info</a></li>
            <li><a href="/returns">Returns & Exchanges</a></li>
            <li><a href="/care">Product Care</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Connect With Us</h4>
          <div className="social-links">
            <a href="#" className="social-link">Instagram</a>
            <a href="#" className="social-link">Pinterest</a>
            <a href="#" className="social-link">Facebook</a>
          </div>
          <div className="newsletter">
            <h4>Join Our Newsletter</h4>
            <div className="newsletter-input">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 ARTISO. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;