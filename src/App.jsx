import React from 'react'
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Cards from './components/Cards';
import Aplicativo from './components/Aplicativo';
// import Login from './components/Login'
// import Cadastro from './components/Cadastro';
import About from './components/About';

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Cards />
      <About />
      <Aplicativo />
      
      {/* <Login />
      <Cadastro /> */}

    </div>

  );
}

export default App;
