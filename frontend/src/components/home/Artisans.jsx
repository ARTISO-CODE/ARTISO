import React, { useState } from 'react';
import './Artisans.css';
import ArtisanSectionBLOG from '../ArtisanSectionBLOG';

const Artisans = () => {
  const [selectedArtisan, setSelectedArtisan] = useState(null);

  const artisans = [
    {
      id: 1,
      name: 'Hassan Berrada',
      craft: 'Maître Tisserand',
      image: 'https://thumbs.dreamstime.com/b/moroccan-craftsman-37527757.jpg',
      story: 'Tisserand de troisième génération, il perpétue avec passion les motifs berbères traditionnels'
    },
    {
      id: 2,
      name: 'Fatima Zahra',
      craft: 'Artiste Céramiste',
      image: 'https://thekindcraft.com/wp-content/uploads/2016/12/Moroccan-Artisans-The-Kindcraft-3.jpg',
      story: 'Elle mêle techniques ancestrales et designs modernes pour des créations uniques'
    },
    {
      id: 3,
      name: 'Omar Alami',
      craft: 'Artisan du Cuir',
      image: 'https://www.littlemoroccanthings.com/wp-content/uploads/2021/10/artisan-533x800.jpg',
      story: 'Expert dans le travail du cuir marocain, il crée des pièces qui racontent une histoire'
    }
  ];

  return (
    <section className="artisans" id="artisans">
      <h2>Rencontrez nos artisans</h2>
      <p className="artisans-intro">Les Mains Qui Donnent Vie à Nos Créations</p>
      <div className="artisans-grid">
        {artisans.map(artisan => (
          <div key={artisan.id} className="artisan-card">
            <div className="artisan-image">
              <img src={artisan.image} alt={artisan.name} />
            </div>
            <div className="artisan-info">
              <h3>{artisan.name}</h3>
              <span className="craft">{artisan.craft}</span>
              <p>{artisan.story}</p>
              <button className="meet-artisan" onClick={() => setSelectedArtisan(artisan)}>Rencontrez {artisan.name.split(' ')[0]}</button>
            </div>
          </div>
        ))}
      </div>

      {selectedArtisan && <ArtisanSectionBLOG selectedArtisan={selectedArtisan} setSelectedArtisan={setSelectedArtisan} />}

    </section>
  );
};

export default Artisans;