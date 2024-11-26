import React from 'react';
import Hero from '../components/home/Hero';
import Collections from '../components/home/Collections';
import Heritage from '../components/home/Heritage';
import Artisans from '../components/home/Artisans';
import FeaturedProducts from '../components/home/FeaturedProducts';

function Home() {
  return (
    <div className="home">
      <Hero />
      <Heritage />
      <Collections />
      <FeaturedProducts />
      <Artisans />
    </div>
  );
}

export default Home;