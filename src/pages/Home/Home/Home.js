import React from 'react';
import Contact from '../Contact/Contact';
import Hero from '../Hero/Hero';
import Projects from '../Projects/Projects';

const Home = () => {
  return (
    <div>
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;