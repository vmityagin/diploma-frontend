import React from "react";
import AuthForm from "../components/AuthForm";
import authLogo from "../images/header__logo.svg"

function Register() {

  return (
    <section className="auth">
      <div className="auth__header">
        <img className="auth__logo" src={authLogo} alt="логотип сайта"/>
        <h1 className="auth__title">Добро пожаловать</h1>
      </div>
      <AuthForm typeName="register" buttonText="Зарегистрироваться" />
    </section>
  );
}

export default Register;
