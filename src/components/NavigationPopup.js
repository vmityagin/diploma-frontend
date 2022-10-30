import {NavLink} from 'react-router-dom';
import header__account_icon from '../images/header__account_icon.svg'
import popup__cross from '../images/popup__cross.svg'

function NavigationPopup({ isOpen, onClose }) {

  return (
    <section onClick={onClose} className={`popup popup_type_navigation ${isOpen ? `popup_active` : ''}`}>
      <nav className="popup__nav">
        <img onClick={onClose} src={popup__cross} className="popup__cross" alt="иконка крестика"/>

        <ul className="popup__menu">
          <li className="popup__element">
            <NavLink to="/movies" className="popup__text">Главная</NavLink>
          </li>
          <li className="popup__element">
            <NavLink to="/movies" className="popup__text">Фильмы</NavLink>
          </li>
          <li className="popup__element">
            <NavLink to="/saved-movies" className="popup__text">Сохранённые фильмы</NavLink>
          </li>
        </ul>

        <ul className="popup__account">
          <li>
            <NavLink to="/profile" className="popup__profile nav__profile">
              Аккаунт
              <img src={header__account_icon} alt="иконка аккаунта" className="nav__icon" />
            </NavLink>
          </li>
        </ul>

      </nav>
    </section>
  );
}

export default NavigationPopup;
