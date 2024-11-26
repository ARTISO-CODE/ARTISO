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
        <h1>Moroccan Heritage<br />Modern Living</h1>
        <p>Curated artisanal treasures that tell stories of tradition</p>
        <Link to="/collections"><button className="cta-button">Explore Collection</button></Link>
      </div>
    </div>
  );
};

export default Hero;