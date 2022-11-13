import React from 'react';
import MoviesCard from './MoviesCard';

function MoviesCardList({
  moviesRender,
  isLike,
  handleLikeClick,
  handleDeleteLikeClick,
  savedMovies,
  preloaderIsActive,
  textPreloader,
})
{

  return (
    <section className="MoviesCardList">
      {
        preloaderIsActive ?
        <div className="preloader">
          <p className="preloader__text">{textPreloader}</p>
        </div>
        :
          <ul className="MoviesElements">
          {
            moviesRender.map((movie, index) => (
              <MoviesCard
                movie={movie}
                key={movie.id}
                isLike={isLike}
                handleLikeClick={handleLikeClick}
                handleDeleteLikeClick={handleDeleteLikeClick}
                savedMovies={savedMovies}
              />
            ))
          }
          </ul>
      }
    </section>
  );
}

export default MoviesCardList;
