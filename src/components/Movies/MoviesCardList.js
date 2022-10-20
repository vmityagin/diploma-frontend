import React from 'react';
import MoviesCard from './MoviesCard';

function MoviesCardList() {
  return (
    <section className="MoviesCardList">
      <ul className="MoviesElements">
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </ul>
    </section>
  );
}

  export default MoviesCardList;
