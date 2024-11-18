import { motion } from 'framer-motion';
import { useRef } from 'react';
import '../styles/Collections.css';

const Collections = () => {
  const carouselRef = useRef(null);
  
  const collections = [
    {
      title: 'Tapis Berbères',
      image: '/images/tapis.jpg',
      description: 'Motifs ancestraux réinventés'
    },
    {
      title: 'Céramique',
      image: '/images/ceramique.jpg',
      description: 'Art de la terre moderne'
    },
    {
      title: 'Luminaires',
      image: '/images/luminaires.jpg',
      description: 'Jeux d\'ombres contemporains'
    },
    {
      title: 'Textiles',
      image: '/images/textiles.jpg',
      description: 'Tissages contemporains'
    },
    {
      title: 'Bijoux',
      image: '/images/bijoux.jpg',
      description: 'Artisanat précieux'
    }
  ];

  return (
    <section className="collections" id="collections">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Nos Collections
      </motion.h2>
      
      <motion.div 
        className="collections-carousel"
        ref={carouselRef}
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div 
          className="carousel-track"
          drag="x"
          dragConstraints={carouselRef}
          initial={{ x: 100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {collections.map((collection, index) => (
            <motion.div
              key={collection.title}
              className="collection-card"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="collection-image">
                <img src={collection.image} alt={collection.title} />
              </div>
              <h3>{collection.title}</h3>
              <p>{collection.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Collections