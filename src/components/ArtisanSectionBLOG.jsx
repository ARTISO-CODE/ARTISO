import React from 'react';
import './ArtisanSectionBLOG.css';

function ArtisanSectionBLOG({ selectedArtisan, setSelectedArtisan }){
    return (
        <div className="artisan-modal-overlay" onClick={() => setSelectedArtisan(null)}>
          <div className="artisan-modal" onClick={e => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setSelectedArtisan(null)}>×</button>
            <div className="modal-header">
              <img src={selectedArtisan.image} alt={selectedArtisan.name} />
              <div className="modal-header-content">
                <h2>{selectedArtisan.name}</h2>
                <p className="specialty">{selectedArtisan.specialty}</p>
                <p className="location">
                  <span className="icon">📍</span> {selectedArtisan.location}
                </p>
                <p className="experience">
                  <span className="icon">✨</span> {selectedArtisan.experience} of expertise
                </p>
              </div>
            </div>
            <div className="modal-body">
              <h3>Artisan Story</h3>
              <p>{selectedArtisan.story}</p>
              <h3>Gallery</h3>
              <div className="gallery-grid">
                {selectedArtisan.gallery.map((image, index) => (
                  <div key={index} className="gallery-item">
                    <img src={image} alt={`${selectedArtisan.name}'s work ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
    );
};

export default ArtisanSectionBLOG;