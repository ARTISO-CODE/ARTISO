import React, { useEffect, useState } from 'react';
import './Cart.css';

const Cart = ({ isOpen, onClose, UPDATE_CART_COUNT }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Retrieve the cart from localStorage when the component mounts
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setItems(storedCart);
  }, [localStorage.getItem('cart')]);

  // Update the quantity of an item in the cart
  const updateQuantity = (id, change) => {
    const myItem = items.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + change); // Prevent going below 1
        return { ...item, quantity: newQuantity };
      }
      return item;
    })
    setItems(myItem);
    localStorage.setItem('cart', JSON.stringify(myItem));
    UPDATE_CART_COUNT();
  };

  // Remove an item from the cart
  const removeItem = (id) => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
    // Update localStorage
    localStorage.setItem('cart', JSON.stringify(updatedItems));
    UPDATE_CART_COUNT();
  };

  // Calculate the total price for a given item
  const calculateItemTotal = (price, quantity) => {
    return price * quantity;
  };

  // Calculate the total price of all items in the cart
  const calculateTotal = () => {
    return items.reduce((total, item) => total + calculateItemTotal(item.price, item.quantity), 0);
  };

  return (
    <>
      {isOpen && <div className="cart-overlay" onClick={onClose}></div>}
      <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>Votre panier</h2>
          <button className="close-cart" onClick={onClose}>×</button>
        </div>

        <div className="cart-items">
          {items.length === 0 ? (
            <div className="empty-cart">
              <span className="empty-cart-icon">🛒</span>
              <p>Votre Panier est Vide</p>
              <button className="start-shopping" onClick={onClose}>
                Explorer notre heritage
              </button>
            </div>
          ) : (
            items.map(item => (
              <div key={item.id} className="cart-item">
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p className="item-price">${calculateItemTotal(item.price, item.quantity)}</p>
                  <div className="quantity-controls">
                    <button 
                      className="quantity-btn"
                      onClick={() => updateQuantity(item.id, -1)}
                    >
                      -
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button 
                      className="quantity-btn"
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button 
                  className="remove-item"
                  onClick={() => removeItem(item.id)}
                >
                  ×
                </button>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total</span>
              <span className="total-amount">${calculateTotal()}</span>
            </div>
            <button className="checkout-btn">Valider la Commande</button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
