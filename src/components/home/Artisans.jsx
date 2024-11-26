import React from 'react';
import './Artisans.css';

const Artisans = () => {
  const artisans = [
    {
      id: 1,
      name: 'Hassan Berrada',
      craft: 'Master Weaver',
      image: 'https://thumbs.dreamstime.com/b/moroccan-craftsman-37527757.jpg',
      story: 'Third generation weaver specializing in traditional Berber patterns'
    },
    {
      id: 2,
      name: 'Fatima Zahra',
      craft: 'Ceramic Artist',
      image: 'https://thekindcraft.com/wp-content/uploads/2016/12/Moroccan-Artisans-The-Kindcraft-3.jpg',
      story: 'Blending ancient techniques with contemporary designs'
    },
    {
      id: 3,
      name: 'Omar Alami',
      craft: 'Leather Craftsman',
      image: 'https://www.littlemoroccanthings.com/wp-content/uploads/2021/10/artisan-533x800.jpg',
      story: 'Expert in traditional Moroccan leather working techniques'
    }
  ];

  return (
    <section className="artisans" id="artisans">
      <h2>Meet Our Artisans</h2>
      <p className="artisans-intro">The masters behind our masterpieces</p>
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
              <button className="meet-artisan">Meet {artisan.name.split(' ')[0]}</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Artisans;