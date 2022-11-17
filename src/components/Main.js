import React from 'react';
import Header from './Header';
import Promo from './Main/Promo';
import NavTab from './Main/NavTab';
import AboutProject from './Main/AboutProject';
import Techs from './Main/Techs';
import Portfolio from './Main/Portfolio';
import Footer from './Footer';

function Main({ loggedIn, isOpen }) {
    return (
      <div className="page">
        <Header loggedIn={loggedIn} onClick={isOpen}/>
        <main>
          <Promo />
          <NavTab />
          <AboutProject/>
          <Techs />
          <Portfolio />
        </main>
        <Footer />
      </div>
    );
  }

  export default Main;
