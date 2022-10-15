import React from 'react';
import Header from './Header';
import Promo from './Main/Promo';
import NavTab from './Main/NavTab';
import AboutProject from './Main/AboutProject';

function Main() {
    return (
      <main className="page">
        <Header link="/signin" />
        <Promo />
        <NavTab />
        <AboutProject />
      </main>
    );
  }

  export default Main;
