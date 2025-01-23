import React, { useContext } from 'react';
import './FeaturedProducts.css';
import { messagePOPUP_Context } from '../../App';

const FeaturedProducts = ({ UPDATE_CART_COUNT }) => {
  const { setMessagePOPUP } = useContext(messagePOPUP_Context);

  const products = [
    {
      id: 1,
      name: 'Tapis Berbère Tissé à la Main',
      price: 599,
      image: 'https://rugsx.eu/204273-large_default/berber-carpet-bj1005-boujaad-hand-woven-from-morocco-boho-beige-yellow.jpg'
    },
    {
      id: 2,
      name: 'Tajine des Saveurs',
      price: 89,
      image: 'https://bramcookware.com/wp-content/uploads/2020/11/TA41-P-WHBL-MOR.jpg'
    },
    {
      id: 3,
      name: 'Pouf Douceur en Cuir',
      price: 199,
      image: 'https://houseofmoroccanrugs.com/490-large_default/leather-pouf-ottoman.jpg'
    }
  ];

  // Function to handle adding products to the cart
  const addToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const productIndex = existingCart.findIndex(item => item.id === product.id);

    if (productIndex >= 0) {
      // If the product exists, increase its quantity
      existingCart[productIndex].quantity += 1;
    } else {
      // Otherwise, add the product with quantity 1
      existingCart.push({ ...product, quantity: 1 });
    }

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(existingCart))
    UPDATE_CART_COUNT();
    setMessagePOPUP({ show: true, message: '+1 produit est ajouté a la carte :)', type: 'success' });
    setTimeout(() => {
      setMessagePOPUP({ show: false, message: '', type: '' });
    }, 1000);
  };

  return (
    <section className="featured-products">
      <h2>Collections en Vedette</h2>
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <h3>{product.name}</h3>
            <p className="price">${product.price}</p>
            <button onClick={() => addToCart(product)} className="add-to-cart">Faites-le vôtre</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
