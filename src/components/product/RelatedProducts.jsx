import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RelatedProducts.css';

const RelatedProducts = ({ products }) => {
  const navigate = useNavigate();

  const handleViewProduct = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="related-products">
      <h2>You May Also Like</h2>
      <div className="related-grid">
        {products.map((item) => (
          <div key={item.id} className="related-item">
            <div className="related-image">
              <img src={item.image} alt={item.name} />
            </div>
            <h3>{item.name}</h3>
            <p className="price">${item.price}</p>
            <button 
              className="view-product"
              onClick={() => handleViewProduct(item.id)}
            >
              View Product
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;