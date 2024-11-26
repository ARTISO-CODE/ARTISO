import React from 'react';
import './Heritage.css';

const Heritage = () => {
  return (
    <section className="heritage" id="heritage">
      <div className="heritage-content">
        <div className="heritage-text">
          <h2>Our Heritage</h2>
          <p className="subtitle">A Legacy of Craftsmanship</p>
          <p className="description">
            For generations, Moroccan artisans have passed down their craft, 
            preserving techniques that tell stories of our rich cultural heritage. 
            Each piece in our collection carries this legacy forward, bridging 
            traditional craftsmanship with contemporary design.
          </p>
          <div className="heritage-stats">
            <div className="stat">
              <span className="stat-number">100+</span>
              <span className="stat-label">Artisan Families</span>
            </div>
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Years of Tradition</span>
            </div>
            <div className="stat">
              <span className="stat-number">1000+</span>
              <span className="stat-label">Unique Pieces</span>
            </div>
          </div>
        </div>
        <div className="heritage-image">
          <img src="https://amboora.com/cdn/shop/articles/artisanship-618689.jpg?v=1717511247" />
        </div>
      </div>
    </section>
  );
};

export default Heritage;