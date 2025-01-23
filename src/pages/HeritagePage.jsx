import React from 'react';
import './HeritagePage.css';

const HeritagePage = () => {
  const traditions = [
    {
      id: 1,
      title: 'Berber Weaving',
      description: 'Ancient techniques passed down through generations, each pattern telling a unique story of tribal heritage.',
      image: 'https://www.moroccoworldnews.com/wp-content/uploads/2021/03/How-Moroccan-Artisans-Preserve-Traditional-Carpet-Weaving-scaled.jpg',
      fullStory: "The art of Berber weaving is deeply rooted in Morocco's cultural heritage. Each rug tells a unique story through its patterns and symbols, representing the weaver's tribal identity and personal journey. The techniques used have remained largely unchanged for centuries, passed down from mother to daughter."
    },
    {
      id: 2,
      title: 'Ceramic Art',
      description: 'From the vibrant zellige tiles to hand-painted pottery, our ceramic traditions reflect centuries of artistic evolution.',
      image: 'https://www.visitmorocco.com/sites/default/files/thumbnails/image/poterie-safi.jpg',
      fullStory: 'Moroccan ceramic art combines geometric precision with vibrant creativity. The famous zellige tilework requires mathematical expertise to create intricate patterns, while pottery allows artists to express their creativity through unique designs and colors.'
    },
    {
      id: 3,
      title: 'Leather Crafting',
      description: 'The ancient tanneries of Fez continue to process leather using methods unchanged since medieval times.',
      image: 'https://www.thoughtco.com/thmb/YqGXfO-M9kYh0FxCcNxh8QPR4U4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-937316482-5c382f2646e0fb00012e8edf.jpg',
      fullStory: 'The tanneries of Fez are living museums where leather is processed using techniques that date back to the 9th century. Natural materials like pigeon droppings and pomegranate powder are still used in the tanning process.'
    },
    {
      id: 4,
      title: 'Metal Work',
      description: 'Intricate brass and silver work showcasing the precision of Moroccan craftsmen.',
      image: 'https://i.pinimg.com/originals/8d/95/8a/8d958a9f8632c5b0c8a8298f426616b8.jpg',
      fullStory: 'Moroccan metalwork combines functionality with decorative excellence. From ornate lamps to detailed teapots, each piece requires hours of careful hammering and engraving.'
    },
    {
      id: 5,
      title: 'Woodcarving',
      description: 'Detailed cedar wood carving, a hallmark of Moroccan architectural decoration.',
      image: 'https://www.medina-souvenirs.com/wp-content/uploads/2021/02/artisanat-bois-maroc.jpg',
      fullStory: 'Cedar wood carving is particularly associated with the Middle Atlas region. Craftsmen create intricate geometric patterns and floral designs that adorn everything from palace doors to everyday objects.'
    }
  ];

  const regions = [
    {
      id: 1,
      name: 'Fez',
      specialty: 'Leather & Ceramics',
      image: 'https://i.natgeofe.com/n/8cae45c5-927b-4344-9d77-b711d6e27容器/fez-morocco-cityscape_16x9.jpg',
      description: 'The cultural capital of Morocco, Fez is renowned for its ancient leather tanneries and intricate ceramic work. The medina of Fez is home to thousands of artisans who maintain centuries-old traditions.'
    },
    {
      id: 2,
      name: 'Atlas Mountains',
      specialty: 'Carpet Weaving',
      image: 'https://www.tripsavvy.com/thmb/wqKgHH2ICrPMVR_mFuKPX9RZgXo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/high-atlas-mountains-morocco-56a3ad745f9b58b7d0d38d78.jpg',
      description: 'The Berber communities of the Atlas Mountains are masters of carpet weaving. Each tribe has its own distinct patterns and color combinations that tell stories of their heritage.'
    },
    {
      id: 3,
      name: 'Safi',
      specialty: 'Pottery',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/f7/44/5c/pottery-hill.jpg',
      description: "Known as the pottery capital of Morocco, Safi's artisans are famous for their blue and white ceramics and innovative glazing techniques."
    },
    {
      id: 4,
      name: 'Marrakech',
      specialty: 'Metalwork & Woodcarving',
      image: 'https://www.andbeyond.com/wp-content/uploads/sites/5/Marrakech-Medina-Market-Morocco.jpg',
      description: 'The red city is a hub for metalworkers and woodcarvers. The souks are filled with workshops where artisans create everything from ornate lamps to carved furniture.'
    },
    {
      id: 5,
      name: 'Essaouira',
      specialty: 'Woodwork & Silver Jewelry',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fc/5c/essaouira.jpg',
      description: 'This coastal town is known for its thuya wood crafts and silver jewelry. The influence of various cultures can be seen in the unique designs created here.'
    }
  ];

  const [showAllTraditions, setShowAllTraditions] = React.useState(false);
  const [showAllRegions, setShowAllRegions] = React.useState(false);
  const [selectedTradition, setSelectedTradition] = React.useState(null);
  const [selectedRegion, setSelectedRegion] = React.useState(null);

  const displayedTraditions = showAllTraditions ? traditions : traditions.slice(0, 3);
  const displayedRegions = showAllRegions ? regions : regions.slice(0, 3);

  return (
    <div className="heritage-page">
      
      <div className="heritage-hero">
        <h1>Un Héritage, Une Passion</h1>
        <p>Une tradition vivante, riche de sens et de culture</p>
      </div>

      <section className="heritage-intro">
        <div className="heritage-intro-content">
          <div className="intro-text">
            <h2>Préserver la Tradition</h2>
            <p>Depuis des siècles, les artisans marocains préservent leur savoir-faire, transmettant leurs techniques et leurs secrets de génération en génération. Chaque pièce de notre collection est le témoin vivant de cet héritage riche, racontant des histoires de culture, de tradition et d’art.</p>
          </div>
          <div className="heritage-stats">
            <div className="stat">
              <span className="number">+800</span>
              <span className="label">Ans d’Histoire</span>
            </div>
            <div className="stat">
              <span className="number">+300</span>
              <span className="label">Maîtres Artisans</span>
            </div>
            <div className="stat">
              <span className="number">12</span>
              <span className="label">Traditions Artisanales</span>
            </div>
          </div>
        </div>
      </section>

      <section className="craft-traditions">
        <h2>Traditions Intemporelles</h2>
        <div className="traditions-grid">
          {displayedTraditions.map(tradition => (
            <div key={tradition.id} className="tradition-card">
              <div className="tradition-image">
                <img src={tradition.image} alt={tradition.title} />
              </div>
              <div className="tradition-content">
                <h3>{tradition.title}</h3>
                <p>{tradition.description}</p>
                <button 
                  className="read-more"
                  onClick={() => setSelectedTradition(tradition)}
                >
                  En Savoir Plus
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="section-footer">
          <button 
            className="view-all-btn"
            onClick={() => setShowAllTraditions(!showAllTraditions)}
          >
            {showAllTraditions ? 'Réduire' : 'En Savoir Plus'}
          </button>
        </div>
      </section>

      <section className="heritage-quote">
        <div className="quote-content">
          <blockquote>
            "Dans chaque fil que nous tissons, chaque motif que nous peignons et chaque pièce que nous créons, réside l'âme du Maroc - un témoignage de nos ancêtres et un cadeau pour les générations futures."
          </blockquote>
          <cite>- Maître Artisan Hassan El Glaoui</cite>
        </div>
      </section>

      <section className="craft-regions">
        <h2>Terres de Savoir-Faire</h2>
        <div className="regions-grid">
          {displayedRegions.map(region => (
            <div key={region.id} className="region-card">
              <div className="region-image">
                <img src={region.image} alt={region.name} />
                <div className="region-overlay">
                  <h3>{region.name}</h3>
                  <p className="specialty">{region.specialty}</p>
                  <button 
                    className="read-more"
                    onClick={() => setSelectedRegion(region)}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="section-footer">
          <button 
            className="view-all-btn"
            onClick={() => setShowAllRegions(!showAllRegions)}
          >
            {showAllRegions ? 'Réduire' : 'En Savoir Plus'}
          </button>
        </div>
      </section>

      {selectedTradition && (
        <div className="modal-overlay" onClick={() => setSelectedTradition(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setSelectedTradition(null)}>×</button>
            <div className="modal-image">
              <img src={selectedTradition.image} alt={selectedTradition.title} />
            </div>
            <div className="modal-text">
              <h3>{selectedTradition.title}</h3>
              <p>{selectedTradition.fullStory}</p>
            </div>
          </div>
        </div>
      )}

      {selectedRegion && (
        <div className="modal-overlay" onClick={() => setSelectedRegion(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setSelectedRegion(null)}>×</button>
            <div className="modal-image">
              <img src={selectedRegion.image} alt={selectedRegion.name} />
            </div>
            <div className="modal-text">
              <h3>{selectedRegion.name}</h3>
              <p className="specialty">{selectedRegion.specialty}</p>
              <p>{selectedRegion.description}</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default HeritagePage;