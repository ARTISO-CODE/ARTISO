import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ArtisansPage.css';
import ArtisanSectionBLOG from '../components/ArtisanSectionBLOG';

const ArtisansPage = () => {
  const [selectedArtisan, setSelectedArtisan] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const artisans = [
    {
      id: 1,
      name: 'Hassan El Glaoui',
      category: 'weaving',
      specialty: 'Master Carpet Weaver',
      location: 'Atlas Mountains',
      experience: '35 years',
      image: 'https://images.squarespace-cdn.com/content/v1/5c5c8f20b10f25a6b7112c3c/1552302095671-7UKQRTC9PDLKLA6PKFHK/20190310_134552.jpg',
      story: 'Born into a family of weavers in the Atlas Mountains, Hassan learned the art of carpet weaving from his mother at the age of seven. Today, he leads a cooperative of 30 artisans, preserving ancient Berber patterns and techniques.',
      gallery: [
        'https://www.moroccoworldnews.com/wp-content/uploads/2021/03/How-Moroccan-Artisans-Preserve-Traditional-Carpet-Weaving-scaled.jpg',
        'https://www.visitmorocco.com/sites/default/files/styles/thumbnail_destination_background_1920x800/public/thumbnails/image/artisanat-crafts.jpg'
      ]
    },
    {
      id: 2,
      name: 'Fatima Zahra',
      category: 'ceramics',
      specialty: 'Master Potter',
      location: 'Safi',
      experience: '28 years',
      image: 'https://thekindcraft.com/wp-content/uploads/2016/12/Moroccan-Artisans-The-Kindcraft-3.jpg',
      story: 'Fatima revolutionized traditional pottery in Safi by introducing contemporary designs while maintaining authentic techniques. Her workshop has trained over 50 young artisans, ensuring the continuation of this craft.',
      gallery: [
        'https://www.visitmorocco.com/sites/default/files/thumbnails/image/poterie-safi.jpg',
        'https://www.thesoukmorocco.co.uk/cdn/shop/products/IMG_8645.jpg'
      ]
    },
    {
      id: 3,
      name: 'Omar Alami',
      category: 'leather',
      specialty: 'Master Leather Craftsman',
      location: 'Fez',
      experience: '40 years',
      image: 'https://www.littlemoroccanthings.com/wp-content/uploads/2021/10/artisan-533x800.jpg',
      story: 'A third-generation leather craftsman, Omar works in the historic tanneries of Fez. His innovative designs have earned him recognition worldwide, while his commitment to traditional tanning methods keeps ancient practices alive.',
      gallery: [
        'https://www.thoughtco.com/thmb/YqGXfO-M9kYh0FxCcNxh8QPR4U4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-937316482-5c382f2646e0fb00012e8edf.jpg',
        'https://www.keshmark.com/cdn/shop/products/regularroundpouf.jpg'
      ]
    },
    {
      id: 4,
      name: 'Amina Benali',
      category: 'textiles',
      specialty: 'Embroidery Artist',
      location: 'Rabat',
      experience: '25 years',
      image: 'https://www.mei.edu/sites/default/files/styles/featured_image/public/Morocco_Women_Artisans.jpg',
      story: 'Amina specializes in fine embroidery, creating intricate patterns that blend traditional Moroccan motifs with contemporary designs. She leads an all-women cooperative that supports rural artisans.',
      gallery: [
        'https://www.mei.edu/sites/default/files/styles/featured_image/public/Morocco_Women_Artisans.jpg',
        'https://www.visitmorocco.com/sites/default/files/styles/thumbnail_destination_background_1920x800/public/thumbnails/image/artisanat-crafts.jpg'
      ]
    },
    {
      id: 5,
      name: 'Karim Moussaoui',
      category: 'metalwork',
      specialty: 'Master Metalsmith',
      location: 'Marrakech',
      experience: '30 years',
      image: 'https://www.moroccoworldnews.com/wp-content/uploads/2018/04/moroccoworldnews.com_wp-content_uploads_2015_04_Moroccan-craftsman.jpg',
      story: 'Karim creates stunning brass and silver pieces, from intricate lamps to decorative panels. His workshop in the Marrakech medina is a living museum of traditional metalworking techniques.',
      gallery: [
        'https://i.pinimg.com/originals/8d/95/8a/8d958a9f8632c5b0c8a8298f426616b8.jpg',
        'https://www.visitmorocco.com/sites/default/files/styles/thumbnail_destination_background_1920x800/public/thumbnails/image/artisanat-crafts.jpg'
      ]
    }
  ];

  const filteredArtisans = selectedCategory === 'all' 
    ? artisans 
    : artisans.filter(artisan => artisan.category === selectedCategory);

  return (
    <div className="artisans-page">
      
      <div className="artisans-hero">
        <h1>Rencontrez nos Artisans</h1>
        <p>Les maîtres artisans qui font vivre nos traditions.</p>
      </div>

      <section className="artisans-intro">
        <div className="intro-content">
          <h2>les Gardiens de la Tradition</h2>
          <p>Nos artisans ne sont pas seulement des créateurs – ce sont des conteurs, préservant des techniques séculaires tout en innovant pour l’avenir. Chaque pièce qu’ils confectionnent porte leur signature unique et leur expertise acquise au fil des années.</p>
          <div className="craft-categories">
            <button 
              className={`category-btn ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              All Crafts
            </button>
            <button 
              className={`category-btn ${selectedCategory === 'weaving' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('weaving')}
            >
              Weaving
            </button>
            <button 
              className={`category-btn ${selectedCategory === 'ceramics' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('ceramics')}
            >
              Ceramics
            </button>
            <button 
              className={`category-btn ${selectedCategory === 'leather' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('leather')}
            >
              Leather
            </button>
            <button 
              className={`category-btn ${selectedCategory === 'textiles' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('textiles')}
            >
              Textiles
            </button>
            <button 
              className={`category-btn ${selectedCategory === 'metalwork' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('metalwork')}
            >
              Metalwork
            </button>
          </div>
        </div>
      </section>

      <section className="artisans-grid">
        {filteredArtisans.map(artisan => (
          <div key={artisan.id} className="artisan-card">
            <div className="artisan-image">
              <img src={artisan.image} alt={artisan.name} />
              <div className="artisan-overlay">
                <span className="specialty">{artisan.specialty}</span>
                <span className="location">{artisan.location}</span>
                <button 
                  className="meet-btn"
                  onClick={() => setSelectedArtisan(artisan)}
                >
                  Rencontrez {artisan.name.split(' ')[0]}
                </button>
              </div>
            </div>
            <div className="artisan-info">
              <h3>{artisan.name}</h3>
              <p className="experience">{artisan.experience} of expertise</p>
            </div>
          </div>
        ))}
      </section>

      {selectedArtisan && <ArtisanSectionBLOG selectedArtisan={selectedArtisan} setSelectedArtisan={setSelectedArtisan} />}

      <section className="join-artisan">
        <div className="join-content">
          <h2>Un artisan? et souhaitez nous rejoindre ?</h2>
          <p>Vous êtes un artisan talentueux souhaitant faire découvrir votre art au monde entier ? Nous recherchons toujours des créateurs passionnés partageant notre engagement pour préserver l’héritage marocain. Collaborons ensemble pour donner vie à des créations uniques.</p>
          <Link to="/contact"><button className="contact-btn">Contactez-Nous</button></Link>
        </div>
      </section>

    </div>
  );
};

export default ArtisansPage;