import React from "react";
import {NavLink} from 'react-router-dom';
import AuthForm from "../components/AuthForm";

function Login({ buttonText }) {

  return (
      <AuthForm headText="Рады видеть" >
        <form className="form form__login" name="form-login" >

          <div className="form__main">

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

          <div className="form__footer">
            <button
              className="form__button"
              type="submit"
            >
              {buttonText}
            </button>

            <p className="form__bottom">
              Ещё не зарегистрированы?
              <NavLink className="form__link" to="/signup">
                Регистрация
              </NavLink>
            </p>
          </div>

        </form>
      </AuthForm>
  );
}

export default Login;
