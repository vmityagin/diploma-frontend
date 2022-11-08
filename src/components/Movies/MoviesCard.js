import { computeHeadingLevel } from '@testing-library/react';
import React from 'react';
import {Link} from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import moviesPoster from '../../images/moviesElement__image.jpg';


function MoviesCard({ movie, typeButton, handleLikeClick, handleDeleteLikeClick, savedMovies, index }) {
  const [ isLike, setIsLike ] = React.useState(false);
  const userContext = React.useContext(CurrentUserContext);

  function timeCalculate(duration) {
    let timeString = (duration / 60).toFixed(2).split('.');
    return timeString;
  }

  function handleLike() {
    handleLikeClick(movie);
    setIsLike(true);
  }

  function handleDeleteLike() {
    handleDeleteLikeClick(movie, index);
    setIsLike(false);
  }

  React.useEffect(() => {
    if(typeButton === 'like') {
      checkStatusLike(savedMovies, movie);
    }
  }, [savedMovies]);

  function checkStatusLike(savedMovies, movie) {
    savedMovies.forEach(element => {
      if (Number(element.movieId) === movie.id) {
        setIsLike(true);
      }
    });
  }

  return (
    <li className="moviesElement">
        <div className="moviesElement__group">
          <a href={movie.trailerLink} target="_blank" rel="noreferrer" className="moviesElement__link">
            <h2 className="moviesElement__title">{movie.nameRU}</h2>
            <p className="moviesElement__duration">{`${timeCalculate(movie.duration)[0]}ч ${movie.duration - timeCalculate(movie.duration)[0]*60}м`}</p>
          </a>
          { typeButton === 'like' ?
            <button
              onClick={`${isLike}` === 'true' ? handleDeleteLike : handleLike}
              className={`${isLike}` === 'true' ? 'moviesElement__like_active' : 'moviesElement__like'}
              type="button"
            >
            </button>
            :
            movie.owner === userContext.data._id &&
            <button className="moviesElement__cross" type="button" onClick={handleDeleteLike}></button>
          }
        </div>
        <a href={movie.trailerLink} target="_blank" rel="noreferrer" className="moviesElement__link">
          <img className="moviesElement__image" src={typeButton === 'like' ? `https://api.nomoreparties.co/${movie.image.url}` : movie.image} alt={movie.nameRU} />
        </a>
      </li>
  );
}

  export default MoviesCard;
