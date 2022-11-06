import React from 'react';
import {Link} from 'react-router-dom';
import moviesPoster from '../../images/moviesElement__image.jpg';


function MoviesCard({ movie, typeButton }) {
  const [ isLike, setIsLike ] = React.useState(false);

  function timeCalculate(duration) {
    let timeString = (duration / 60).toFixed(2).split('.');
    return timeString;
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
            onClick={() => isLike ? setIsLike(false) : setIsLike(true)}
            className={`${isLike}` === 'true' ? 'moviesElement__like_active' : 'moviesElement__like'}
            type="button"
            >
            </button>
            :
            <button className="moviesElement__cross" type="button"></button>
          }
        </div>
        <a href={movie.trailerLink} target="_blank" rel="noreferrer" className="moviesElement__link">
          <img className="moviesElement__image" src={`https://api.nomoreparties.co/${movie.image.url}`} alt={movie.nameRU} />
        </a>
      </li>
  );
}

  export default MoviesCard;
