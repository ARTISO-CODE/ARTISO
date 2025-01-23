import React, { useState, useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './CollectionsPage.css';
import { messagePOPUP_Context } from '../App';

function CollectionsPage({ UPDATE_CART_COUNT }){
  const navigate = useNavigate();

  const allProducts = [
    { id: 1, name: 'Berber Carpet', price: 599, category: 'rugs', collection: 'heritage', image: 'https://rugsx.eu/204273-large_default/berber-carpet-bj1005-boujaad-hand-woven-from-morocco-boho-beige-yellow.jpg' },
    { id: 2, name: 'Atlas Mountain Rug', price: 799, category: 'rugs', collection: 'modern', image: 'https://cdn.shopify.com/s/files/1/0550/6315/0851/files/moroccan-rugs-beni-ourain-handmade-wool-rug-brw-1001-1.jpg' },
    { id: 3, name: 'Kilim Runner', price: 299, category: 'rugs', collection: 'essentials', image: 'https://cdn.shopify.com/s/files/1/0550/6315/0851/files/moroccan-rugs-kilim-handmade-wool-rug-klw-1001-1.jpg' },
    { id: 4, name: 'Decorative Tagine', price: 129, category: 'ceramics', collection: 'heritage', image: 'https://bramcookware.com/wp-content/uploads/2020/11/TA41-P-WHBL-MOR.jpg' },
    { id: 5, name: 'Ceramic Vase Set', price: 189, category: 'ceramics', collection: 'modern', image: 'https://www.ilove-marrakech.com/blog/wp-content/uploads/2024/03/What-Makes-Moroccan-Ceramics-Pottery-Stand-Out-3.png' },
    { id: 6, name: 'Serving Bowl', price: 79, category: 'ceramics', collection: 'essentials', image: 'https://www.thesoukmorocco.co.uk/cdn/shop/products/IMG_8645.jpg' },
    { id: 7, name: 'Leather Pouf', price: 199, category: 'leather', collection: 'heritage', image: 'https://www.keshmark.com/cdn/shop/products/regularroundpouf.jpg' },
    { id: 8, name: 'Handmade Bag', price: 159, category: 'leather', collection: 'modern', image: 'https://www.medina-souvenirs.com/wp-content/uploads/2021/02/sac-cuir-marocain.jpg' },
    { id: 9, name: 'Leather Ottoman', price: 249, category: 'leather', collection: 'essentials', image: 'https://houseofmoroccanrugs.com/490-large_default/leather-pouf-ottoman.jpg' }
  ];

  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCollection, setSelectedCollection] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const { setMessagePOPUP } = useContext(messagePOPUP_Context);

  useEffect(() => {
    location.state?.category ? setSelectedCategory(location.state?.category) : setSelectedCategory('all');
  }, [location.state?.category]);

  const filterProducts = () => {
    let filtered = [...allProducts];

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    if (selectedCollection !== 'all') {
      filtered = filtered.filter(product => product.collection === selectedCollection);
    }

    if (priceRange !== 'all') {
      switch (priceRange) {
        case 'under100':
          filtered = filtered.filter(product => product.price < 100);
          break;
        case '100to300':
          filtered = filtered.filter(product => product.price >= 100 && product.price <= 300);
          break;
        case 'over300':
          filtered = filtered.filter(product => product.price > 300);
          break;
      }
    }

    switch (sortBy) {
      case 'priceLow':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'priceHigh':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // 'featured' sorting maintains original order
        break;
    }

    return filtered;
  };

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
    localStorage.setItem('cart', JSON.stringify(existingCart));
    UPDATE_CART_COUNT();
    setMessagePOPUP({ show: true, message: '+1 produit est ajouté a la carte :)', type: 'success' });
    setTimeout(() => {
      setMessagePOPUP({ show: false, message: '', type: '' });
    }, 1000);
  };

  const handleExplore = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="collections-page">
      <div className="collections-hero">
        <h1>Notre trésor</h1>
        <p>Trouvez la pièce parfaite pour sublimer vos espaces</p>
      </div>
      
      <div className="collections-container">
        <div className="filters-section">
          <div className="filter-group">
            <label>Catégorie</label>
            <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
              <option value="all">All Categories</option>
              <option value="rugs">Rugs & Carpets</option>
              <option value="ceramics">Ceramics & Pottery</option>
              <option value="leather">Leather Goods</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Collection</label>
            <select value={selectedCollection} onChange={(e) => setSelectedCollection(e.target.value)}>
              <option value="all">All Collections</option>
              <option value="heritage">Heritage</option>
              <option value="modern">Modern</option>
              <option value="essentials">Essentials</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Gamme de Prix</label>
            <select value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
              <option value="all">All Prices</option>
              <option value="under100">Under $100</option>
              <option value="100to300">$100 - $300</option>
              <option value="over300">Over $300</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Trier Par</label>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="featured">Featured</option>
              <option value="priceLow">Price: Low to High</option>
              <option value="priceHigh">Price: High to Low</option>
              <option value="name">Name</option>
            </select>
          </div>
        </div>

        <div className="products-grid">
          {filterProducts().map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <div className="product-overlay">
                  <button className="quick-view" onClick={() => handleExplore(product.id)}>View</button>
                </div>
              </div>
              <div className="product-info">
                <div className="product-tags">
                  <span className="collection-tag">{product.collection}</span>
                  <span className="category-tag">{product.category}</span>
                </div>
                <h3>{product.name}</h3>
                <p className="price">${product.price}</p>
                <button onClick={() => addToCart(product)} className="add-to-cart">Faites-le vôtre</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionsPage;