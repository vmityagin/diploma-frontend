import React from 'react';
import apiMain from '../../utils/MainApi';

function MoviesCard({
  movie,
  handleLikeClick,
  handleDeleteLikeClick,
  savedMovies,
}) {
  const [ allApiSavedMovies, setAllApiSavedMovies ] = React.useState([]);

  function timeCalculate(duration) {
    let timeString = (duration / 60).toFixed(2).split('.');
    return timeString;
  }

  const statusLike = savedMovies.some(i => Number(i.movieId) === movie.id);

  const cardLikeButtonClassName = (
    `${statusLike ? 'moviesElement__like_active' : 'moviesElement__like'}`
  );

  React.useEffect(() => {
    console.log(statusLike);
  },[statusLike]);


  function handleLike() {
    handleLikeClick(movie);
  }

  function handleDeleteLike() {
    handleDeleteLikeClick(movie);
  }

  return (
    <li className="moviesElement">
        <div className="moviesElement__group">
          <a href={movie.trailerLink} target="_blank" rel="noreferrer" className="moviesElement__link">
            <h2 className="moviesElement__title">{movie.nameRU}</h2>
            <p className="moviesElement__duration">{`${timeCalculate(movie.duration)[0]}ч ${movie.duration - timeCalculate(movie.duration)[0]*60}м`}</p>
          </a>
          <button
            onClick={handleLike}
            className={cardLikeButtonClassName}
            type="button"
          >
          </button>
        </div>
        <a href={movie.trailerLink} target="_blank" rel="noreferrer" className="moviesElement__link">
          <img className="moviesElement__image" src={`https://api.nomoreparties.co/${movie.image.url}`} alt={movie.nameRU} />
        </a>
      </li>
  );
}

  export default MoviesCard;
