import React from "react";
import AuthForm from "../components/AuthForm";
<<<<<<< HEAD
import authLogo from "../images/header__logo.svg";
import {NavLink} from 'react-router-dom';
=======
import authLogo from "../images/header__logo.svg"
>>>>>>> 15e22bb9ad80f7bcc43058c9ccd0896c603aeb7b

function Register() {

  return (
    <section className="auth">
      <div className="auth__header">
<<<<<<< HEAD
        <NavLink to="/" className="header__register">
          <img className="auth__logo" src={authLogo} alt="логотип сайта"/>
        </NavLink>
=======
        <img className="auth__logo" src={authLogo} alt="логотип сайта"/>
>>>>>>> 15e22bb9ad80f7bcc43058c9ccd0896c603aeb7b
        <h1 className="auth__title">Добро пожаловать</h1>
      </div>
      <AuthForm typeName="register" buttonText="Зарегистрироваться" />
    </section>
  );
}

export default Register;
