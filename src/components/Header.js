import React from 'react';
import { NavLink } from 'react-router-dom';
import header__logo from '../images/header__logo.svg';

function Header({ handleSignOut}) {
    return (
      <header className="header">
        <img className="header__logo" src={header__logo} alt="Логотип диплома" />
        <div className='header__navigation'>
            <NavLink to="/films" className="header__register">
              Регистрация
            </NavLink>
            <button onClick={handleSignOut} className="header__login">
              Войти
            </button>
        </div>
      </header>
    );
  }
  
  export default Header;