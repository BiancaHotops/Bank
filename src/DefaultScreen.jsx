import React from 'react'
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Services from './components/Services';
import Aplicativo from './components/Aplicativo';
import About from './components/About';
import Cartao from './components/Cartao';

function App() {
  return (
   

    <div>
      <NavBar />
      <Hero />
      <Services />
      <Cartao />
      <Aplicativo /> 
      <About />
    </div>

 

  );
}

export default App;