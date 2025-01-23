import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductGallery from '../components/product/ProductGallery';
import ProductInfo from '../components/product/ProductInfo';
import ArtisanSection from '../components/product/ArtisanSection';
import RelatedProducts from '../components/product/RelatedProducts';
import './ProductDetailPage.css';
import '../components/Navbar.css';

const ProductDetailPage = ({ UPDATE_CART_COUNT }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = {
    id: 1,
    name: 'Vintage Berber Carpet',
    price: 599,
    description: 'Hand-woven by master artisans in the Atlas Mountains, this authentic Berber carpet features traditional geometric patterns passed down through generations. Each piece tells a unique story through its intricate designs and natural wool textures.',
    details: [
      'Material: 100% Natural Wool',
      'Dimensions: 200cm x 300cm',
      'Origin: Atlas Mountains, Morocco',
      'Technique: Traditional hand-knotting',
      'Age: Contemporary piece with traditional design'
    ],
    care: [
      'Professional cleaning recommended',
      'Avoid direct sunlight',
      'Rotate periodically for even wear',
      'Vacuum regularly without beater bar'
    ],
    images: [
      'https://rugsx.eu/204273-large_default/berber-carpet-bj1005-boujaad-hand-woven-from-morocco-boho-beige-yellow.jpg',
      'https://cdn.shopify.com/s/files/1/0550/6315/0851/files/moroccan-rugs-beni-ourain-handmade-wool-rug-brw-1001-1.jpg',
      'https://cdn.shopify.com/s/files/1/0550/6315/0851/files/moroccan-rugs-kilim-handmade-wool-rug-klw-1001-1.jpg',
      'https://www.moroccoworldnews.com/wp-content/uploads/2021/03/How-Moroccan-Artisans-Preserve-Traditional-Carpet-Weaving-scaled.jpg'
    ],
    artisan: {
      name: 'Hassan El Glaoui',
      image: 'https://images.squarespace-cdn.com/content/v1/5c5c8f20b10f25a6b7112c3c/1552302095671-7UKQRTC9PDLKLA6PKFHK/20190310_134552.jpg',
      experience: '35 years of experience',
      story: 'A master weaver from the Atlas Mountains, Hassan learned his craft from his mother at the age of seven. His work reflects both traditional Berber patterns and his own artistic innovations.'
    },
    related: [
      {
        id: 2,
        name: 'Atlas Mountain Rug',
        price: 799,
        image: 'https://cdn.shopify.com/s/files/1/0550/6315/0851/files/moroccan-rugs-beni-ourain-handmade-wool-rug-brw-1001-1.jpg'
      },
      {
        id: 3,
        name: 'Kilim Runner',
        price: 299,
        image: 'https://cdn.shopify.com/s/files/1/0550/6315/0851/files/moroccan-rugs-kilim-handmade-wool-rug-klw-1001-1.jpg'
      },
      {
        id: 4,
        name: 'Vintage Tribal Rug',
        price: 899,
        image: 'https://rugsx.eu/204273-large_default/berber-carpet-bj1005-boujaad-hand-woven-from-morocco-boho-beige-yellow.jpg'
      }
    ]
  };

  const handleQuantityChange = (change) => {
    const newQuantity = Math.max(1, quantity + change);
    setQuantity(newQuantity);
  };

  return (
    <div className="product-detail-page">
      
      <div className="product-container">
        <ProductGallery 
          images={product.images}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />

        <ProductInfo 
          product={product}
          quantity={quantity}
          onQuantityChange={handleQuantityChange}
          UPDATE_CART_COUNT={UPDATE_CART_COUNT}
        />
      </div>

      <ArtisanSection artisan={product.artisan} />
      <RelatedProducts products={product.related} />
    </div>
  );
};

export default ProductDetailPage;