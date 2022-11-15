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
  isLoad,
})
{
  return (
    <section className="MoviesCardList">
      {
        preloaderIsActive ?
        <div className="preloader">
          <p className="preloader__text">{textPreloader}</p>
          <div className={isLoad ? 'lds-ring lds-ring_active' : 'lds-ring'}>
            <div ></div>
            <div ></div>
            <div ></div>
            <div ></div>
          </div>
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
