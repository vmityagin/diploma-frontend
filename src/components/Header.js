import {NavLink} from 'react-router-dom';
import header__logo from '../images/header__logo.svg';
import header__account_icon from '../images/header__account_icon.svg';
import nav__hamburger from '../images/nav__hamburger.svg';

function Header({ handleSignOut, isLoggedIn, onClick}) {

  return (
    <>
      { !isLoggedIn ?
        <header className="header">
          <NavLink to="/">
            <img className="header__logo" src={header__logo} alt="логотип дипломной работы"/>
          </NavLink>
          <nav className="header__nav nav">

            <ul className="nav__account">
              <li>
                <NavLink to="/signup" className="nav__register">Регистрация</NavLink>
              </li>
              <li>
                <NavLink to="/signin">
                  <button className="nav__enter">
                    Войти
                  </button>
                </NavLink>
              </li>
            </ul>

          </nav>
        </header>
        :
        <header className="header header_login">
          <NavLink to="/">
            <img className="header__logo" src={header__logo} alt="логотип дипломной работы"/>
          </NavLink>
          <nav className="header__nav nav_login">

            <ul className="nav__menu">
              <li>
                <NavLink to="/movies" className="nav__movies" activeClassName="nav__movies_active">Фильмы</NavLink>
              </li>
              <li>
                <NavLink to="/saved-movies" className="nav__movies" activeClassName="nav__movies_active">Сохранённые фильмы</NavLink>
              </li>
            </ul>

            <ul className="nav__account">
              <li>
                <NavLink to="/profile" className="nav__profile">
                  Аккаунт
                  <img src={header__account_icon} alt="иконка аккаунта" className="nav__icon" />
                </NavLink>
              </li>
            </ul>

          </nav>

          <button onClick={onClick} className="nav__mobile">
            <img className="nav__hamburger" src={nav__hamburger} alt="иконка меню гамбургер" />
          </button>
        </header>
      }
    </>
  );
}

  export default Header;
