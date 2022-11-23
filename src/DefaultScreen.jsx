import React from 'react'
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Services from './components/Services';
import Aplication from './components/Aplication';
import About from './components/About';
import Card from './components/Card';
import Footer from './components/Footer';

function DefautScreen() {
  return (


    <div>
      <NavBar />
      <Hero />
      <Services />
      <Card />
      <Aplication />
      <About />
      <Footer />
    </div>



  );
}

export default DefautScreen;