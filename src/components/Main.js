import React from 'react';
import Header from './Header';
import Promo from './Main/Promo';
import NavTab from './Main/NavTab';
import AboutProject from './Main/AboutProject';
import Techs from './Main/Techs';
import Portfolio from './Main/Portfolio';

function Main() {
    return (
      <main className="page">
        <Header link="/signin" />
        <Promo />
        <NavTab />
        <AboutProject />
        <Techs />
        <Portfolio />
      </main>
    );
  }

  export default Main;
