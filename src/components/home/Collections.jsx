import React from 'react';
import './Collections.css';
import { Link } from 'react-router-dom';

const Collections = () => {

  const collections = [
    {
      id: 1,
      name: 'Textiles',
      category: 'rugs',
      description: 'Handwoven rugs, blankets, and cushions',
      image: 'https://secondnatureonline.co.uk/cdn/shop/products/IMG_0889_00.jpg?v=1705687543&width=1080'
    },
    {
      id: 2,
      name: 'Ceramics',
      category: 'ceramics',
      description: 'Traditional pottery and modern designs',
      image: 'https://www.ilove-marrakech.com/blog/wp-content/uploads/2024/03/What-Makes-Moroccan-Ceramics-Pottery-Stand-Out-3.png'
    },
    {
      id: 3,
      name: 'Leather',
      category: 'leather',
      description: 'Bags, poufs, and accessories',
      image: 'https://www.keshmark.com/cdn/shop/products/regularroundpouf.jpg?v=1619786308'
    }
  ];

  return (
    <section className="collections" id="collections">
      <h2>Our Collections</h2>
      <div className="collections-grid">
        {collections.length != 0 && collections.map(collection => (
          <div key={collection.id} className="collection-card">
            <div className="collection-image">
              <img src={collection.image} alt={collection.name} />
              <div className="collection-overlay">
                <h3>{collection.name}</h3>
                <p>{collection.description}</p>
                <Link to="/collections" state={{ category: collection.category }}><button className="explore-btn">Explore</button></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collections;