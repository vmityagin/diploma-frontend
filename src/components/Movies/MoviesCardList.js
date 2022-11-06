import React from 'react';
import MoviesCard from './MoviesCard';

function MoviesCardList({ typeButton, moviesRender, moviesRenderShort, isCheckBox }) {
  return (
    <section className="MoviesCardList">
      <ul className="MoviesElements">
      {
        moviesRender.map((movie) => (
          <MoviesCard movie={movie} key={movie.id} typeButton={typeButton} />
        ))
      }
      </ul>
    </section>
  );
}

  export default MoviesCardList;
