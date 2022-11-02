import React from 'react';
import promo__image from '../../images/promo__image.svg';

function Promo() {
  return (
    <section className="promo">
      <div className="promo__background">
          <img className="promo__image" src={promo__image} alt="Дипломная работа Яндекс.Практикум"/>
          <h1 className="promo__title">
              Учебный проект студента факультета Веб-разработки.
          </h1>
      </div>
    </section>
  );
}

  export default Promo;
