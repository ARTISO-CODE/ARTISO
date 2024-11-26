import React from 'react';
import './ProductGallery.css';

const ProductGallery = ({ images, selectedImage, setSelectedImage }) => {
  return (
    <div className="product-gallery">
      <div className="main-image">
        <img src={images[selectedImage]} alt="Product main view" />
      </div>
      <div className="thumbnail-grid">
        {images.map((image, index) => (
          <div 
            key={index} 
            className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
            onClick={() => setSelectedImage(index)}
          >
            <img src={image} alt={`Product view ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;