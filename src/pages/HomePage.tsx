import React from 'react';
import Hero from '../components/sections/Hero';
import Highlights from '../components/sections/Highlights';

const HomePage: React.FC = () => {
  return (
    <main className="pt-16">
      <Hero />
      <Highlights />
    </main>
  );
};

export default HomePage;
