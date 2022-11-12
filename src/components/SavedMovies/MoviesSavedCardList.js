import React from 'react';
import MoviesCard from './MoviesCard';

function MoviesSavedCardList({ handleDeleteLikeClick, savedMovies }) {

  return (
    <section className="MoviesCardList">
      <ul className="MoviesElements">
      {
        savedMovies.map((movie, index) => (
          <MoviesCard
            movie={movie}
            key={movie._id}
            handleDeleteLikeClick={handleDeleteLikeClick}
            index={index}
          />
        ))
      }
      </ul>
    </section>
  );
}

  export default MoviesSavedCardList;
