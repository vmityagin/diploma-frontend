import React from 'react';
import MoviesCard from './MoviesCard';

function MoviesCardList({ typeButton }) {
  return (
    <section className="MoviesCardList">
      <ul className="MoviesElements">
        <MoviesCard typeButton={typeButton} isLike={true} />
        <MoviesCard typeButton={typeButton} />
        <MoviesCard typeButton={typeButton} isLike={true} />
        <MoviesCard typeButton={typeButton} />
        <MoviesCard typeButton={typeButton} />
      </ul>
    </section>
  );
}

  export default MoviesCardList;
