import React from 'react';
import moviesPoster from '../../images/moviesElement__image.jpg';


function MoviesCard({ typeButton }) {
  const [ isLike, setIsLike ] = React.useState(false);

  return (
    <li className="moviesElement">
      <div className="moviesElement__group">
        <h2 className="moviesElement__title">В погоне за Бенкси</h2>
        <p className="moviesElement__duration">1ч 42м</p>
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
      <img className="moviesElement__image" src={moviesPoster} alt="Кнопка лайк фильма" />
    </li>
  );
}

  export default MoviesCard;
