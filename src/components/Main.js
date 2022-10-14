import React from 'react';
import Header from './Header';
import Promo from './Main/Promo';

function Main() {
    return (
      <main className="page">
        <Header link="/signin" />
        <Promo />
      </main>
    );
  }
  
  export default Main;