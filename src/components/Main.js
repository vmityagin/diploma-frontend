import React from 'react';
import Header from './Header';
import Promo from './Main/Promo';
import NavTab from './Main/NavTab';

function Main() {
    return (
      <main className="page">
        <Header link="/signin" />
        <Promo />
        <NavTab />
      </main>
    );
  }

  export default Main;
