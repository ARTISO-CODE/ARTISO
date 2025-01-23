import React from 'react';
import Hero from '../components/home/Hero';
import Collections from '../components/home/Collections';
import Heritage from '../components/home/Heritage';
import Artisans from '../components/home/Artisans';
import FeaturedProducts from '../components/home/FeaturedProducts';
import NewsLetter from '../components/home/NewsLetter';

function Home({UPDATE_CART_COUNT}) {
  return (
    <div className="home">
      <Hero />
      <Heritage />
      <Collections />
      <FeaturedProducts UPDATE_CART_COUNT={UPDATE_CART_COUNT} />
      <Artisans />
      <NewsLetter />
    </div>
  );
}

export default Home;