import React from 'react';
import moviesPoster from '../../images/moviesElement__image.jpg';


function MoviesCard() {
  return (
    <li className="moviesElement">
      <div className="moviesElement__group">
        <h2 className="moviesElement__title">В погоне за Бенкси</h2>
        <p className="moviesElement__duration">1ч 42м</p>
        <button className="moviesElement__like" type="button"></button>
      </div>
      <img className="moviesElement__image" src={moviesPoster} alt="Кнопка лайк фильма" />
    </li>
  );
}

  export default MoviesCard;
