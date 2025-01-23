import React, { useContext } from 'react';
import QuantitySelector from './QuantitySelector';
import './ProductInfo.css';
import { messagePOPUP_Context } from '../../App';

function ProductInfo({ product, quantity, onQuantityChange, UPDATE_CART_COUNT }){
  
  const { setMessagePOPUP } = useContext(messagePOPUP_Context);

  // Function to handle adding products to the cart
  const addToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const productIndex = existingCart.findIndex(item => item.id === product.id);

    if (productIndex >= 0) {
      // If the product exists, increase its quantity
      existingCart[productIndex].quantity += quantity;
    } else {
      // Otherwise, add the product with quantity 1
      existingCart.push({ ...product, quantity: quantity });
    }

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(existingCart))
    UPDATE_CART_COUNT();
    setMessagePOPUP({ show: true, message: `+${quantity} produits est ajouté a la carte :)`, type: 'success' });
    setTimeout(() => {
      setMessagePOPUP({ show: false, message: '', type: '' });
    }, 1000);
  };

  return (
    <div className="product-info">
      <h1>{product.name}</h1>
      <p className="price">${product.price}</p>
      <p className="description">{product.description}</p>
      
      <QuantitySelector 
        quantity={quantity} 
        onQuantityChange={onQuantityChange} 
      />

      <button onClick={() => addToCart(product)} className="add-to-cart-btn">Add to Cart</button>
      
      <div className="product-details">
        <h2>Product Details</h2>
        <ul>
          {product.details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>

      <div className="care-instructions">
        <h2>Care Instructions</h2>
        <ul>
          {product.care.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductInfo;