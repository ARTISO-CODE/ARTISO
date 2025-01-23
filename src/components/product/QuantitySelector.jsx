import React from 'react';
import './QuantitySelector.css';

const QuantitySelector = ({ quantity, onQuantityChange }) => {
  return (
    <div className="quantity-selector">
      <span>Quantity</span>
      <div className="quantity-controls">
        <button onClick={() => onQuantityChange(-1)}>-</button>
        <span>{quantity}</span>
        <button onClick={() => onQuantityChange(1)}>+</button>
      </div>
    </div>
  );
};

export default QuantitySelector;