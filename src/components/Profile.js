import React from 'react';
import Header from './Header';
import {CurrentUserContext} from '../context/CurrentUserContext';

function Movies() {
  const userContext = React.useContext(CurrentUserContext);
  return (
    <div className="page">
      <Header
        isLoggedIn="true"
      />
      <main >
        <div className="profile">
          <h1 className="profile__header">{`Привет, ${userContext.data.name}!`}</h1>
          <div className="profile__about">
            <div className="profile__box">
              <p className="profile__caption">Имя</p>
              <p className="profile__info profile__name">{userContext.data.name}</p>
            </div>
            <div className="noborder profile__box">
              <p className="profile__caption">E-mail</p>
              <p className="profile__info profile__email">{userContext.data.email}</p>
            </div>
          </div>
          <button className="profile__button">
            <p className="profile__edit">Редактировать</p>
          </button>
          <button className="profile__button">
            <p className="profile__logout">Выйти из аккаунта</p>
          </button>
        </div>
      </main>
    </div>
  );
}

  export default Movies;
