import React from 'react';
import './ArtisanSection.css';

const ArtisanSection = ({ artisan }) => {
  return (
    <div className="artisan-section">
      <div className="artisan-content">
        <div className="artisan-image">
          <img src={artisan.image} alt={artisan.name} />
        </div>
        <div className="artisan-info">
          <h2>Meet the Artisan</h2>
          <h3>{artisan.name}</h3>
          <p className="experience">{artisan.experience}</p>
          <p className="story">{artisan.story}</p>
        </div>
      </div>
    </div>
  );
};

export default ArtisanSection;