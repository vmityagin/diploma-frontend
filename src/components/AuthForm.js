import React from "react";
import {NavLink} from 'react-router-dom';

function AuthForm({ typeName, buttonText }) {

  return (
    <form className={`form form__${typeName}`} name={`form-${typeName}`} >

      <div className="form__main">
        {typeName === "register" ?
          <>
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
          </>
          : <></>
        }

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

        {typeName === "register" ?
          <>
            <p className="form__bottom">
              Уже зарегистрированы?
              <NavLink className="form__link" to="/signin">
                Войти
              </NavLink>
            </p>
          </>
          :
          <>
            <p className="form__bottom">
              Ещё не зарегистрированы?
              <NavLink className="form__link" to="/signup">
                Регистрация
              </NavLink>
            </p>
          </>
        }
      </div>

    </form>
  );
}

export default AuthForm;
