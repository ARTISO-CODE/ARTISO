import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="logo-container">
          <img src="/logo.png" alt="ARTISO Logo" className="rotating-logo" />
        </div>
        <div className="brand-mark">ARTISO</div>
        <h1>L'Héritage Marocain<br />Une Émotion à Partager</h1>
        <p>Une rencontre entre traditions intemporelles et art contemporain.</p>
        {/* <p>L'Élégance des Traditions Marocaines, Chez Vous!</p> */}
        <Link to="/collections"><button className="cta-button">Explorez Nos Collections</button></Link>
      </div>
    </div>
  );
};

export default Hero;