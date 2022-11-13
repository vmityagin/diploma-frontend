import { computeHeadingLevel } from '@testing-library/react';
import React from 'react';
import {Link} from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import moviesPoster from '../../images/moviesElement__image.jpg';


function MoviesCard({
  movie,
  handleDeleteLikeClick,
  index,
}) {
  const userContext = React.useContext(CurrentUserContext);

  const isOwn = movie.owner === userContext.data._id;

  function timeCalculate(duration) {
    let timeString = (duration / 60).toFixed(2).split('.');
    return timeString;
  }

  function handleDeleteLike() {
    handleDeleteLikeClick(movie, index);
  }

  return (
    <li className="moviesElement">
        <div className="moviesElement__group">
          <a href={movie.trailerLink} target="_blank" rel="noreferrer" className="moviesElement__link">
            <h2 className="moviesElement__title">{movie.nameRU}</h2>
            <p className="moviesElement__duration">{`${timeCalculate(movie.duration)[0]}ч ${movie.duration - timeCalculate(movie.duration)[0]*60}м`}</p>
          </a>
          {
            isOwn &&
            <button className="moviesElement__cross" type="button" onClick={handleDeleteLike}></button>
          }
        </div>
        <a href={movie.trailerLink} target="_blank" rel="noreferrer" className="moviesElement__link">
          <img className="moviesElement__image" src={movie.image} alt={movie.nameRU} />
        </a>
      </li>
  );
}

  export default MoviesCard;
