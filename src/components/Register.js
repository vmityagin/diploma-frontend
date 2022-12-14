import React from "react";
import {NavLink} from 'react-router-dom';
import AuthForm from "../components/AuthForm";

function Register({ buttonText }) {

  return (
    <AuthForm headText="Добро пожаловать!">
      <form className="form form__login" name="form-login" >

        <div className="form__main">
          <p className="form__text">Имя</p>
          <input
            id="name-input-register"
            className="form__input"
            placeholder="Виталий"
            type="text"
            name="name"
            minLength="2"
            maxLength="40"
            required
          />

          <p className="form__text">E-mail</p>
          <input
            id="email-input-register"
            className="form__input"
            placeholder="Адрес почты"
            type="email"
            name="email"
            minLength="6"
            maxLength="200"
            required
          />

          <p className="form__text">Пароль</p>
          <input
            id="password-input-register"
            className="form__input"
            placeholder="Пароль"
            type="password"
            name="password"
            minLength="6"
            maxLength="200"
            required
          />
          <span className="form__input-error name-input-error form__input-error_active">
            Что-то пошло не так...
          </span>
        </div>

        <footer className="form__footer">
          <button
            className="form__button"
            type="submit"
          >
            {buttonText}
          </button>

          <p className="form__bottom">
            Уже зарегистрированы?
            <NavLink className="form__link" to="/signin">
              Войти
            </NavLink>
          </p>
        </footer>

      </form>
    </AuthForm>
  );
}

export default Register;
