import React from "react";
import AuthForm from "../components/AuthForm";
import authLogo from "../images/header__logo.svg";
import {NavLink} from 'react-router-dom';

function Login() {

  return (
    <section className="auth">
      <div className="auth__header">
        <NavLink to="/" className="header__register">
          <img className="auth__logo" src={authLogo} alt="логотип сайта"/>
        </NavLink>
        <h1 className="auth__title">Рады видеть!</h1>
      </div>
      <AuthForm typeName="login" buttonText="Войти" />
    </section>
  );
}

export default Login;
