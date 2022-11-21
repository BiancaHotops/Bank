import React from 'react'
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Services from './components/Services';
import Aplicativo from './components/Aplicativo';
import About from './components/About';
import Card from './components/Card';
import Footer from './components/Footer';

function App() {
  return (
   

    <div>
      <NavBar />
      <Hero />
      <Services />
      <Card />
      <Aplicativo /> 
      <About />
      <Footer />
    </div>

 

  );
}

export default App;