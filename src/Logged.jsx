import React from 'react'
import NavBarLogged from './components/NavBarLogged'
import HeroLogged from './components/HeroLogged'
import FooterLogged from './components/FooterLogged'
import Local from './components/Local';
import Information from './components/Information';
import CardLogged from './components/CardLogged';

function Logged() {
    return (
  

      <div>
        <NavBarLogged />
        <HeroLogged />
        <Information />
        <Local />
        <CardLogged />
        <FooterLogged />
      </div>
  
  
  
    );
  }
  
  export default Logged;