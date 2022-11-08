import React from 'react';
import MoviesCard from './MoviesCard';

function MoviesCardList({
  typeButton,
  moviesRender,
  handleLikeClick,
  handleDeleteLikeClick,
  savedMovies,
})
{
  return (
    <section className="MoviesCardList">
      <ul className="MoviesElements">
      {
        moviesRender.map((movie, index) => (
          <MoviesCard
            movie={movie}
            key={typeButton === 'like' ? movie.id : movie._id}
            typeButton={typeButton}
            handleLikeClick={handleLikeClick}
            handleDeleteLikeClick={handleDeleteLikeClick}
            savedMovies={savedMovies}
            index={index}
          />
        ))
      }
      </ul>
    </section>
  );
}

  export default MoviesCardList;
