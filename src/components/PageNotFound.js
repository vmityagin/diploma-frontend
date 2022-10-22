import React from "react";
import {Link} from 'react-router-dom';

function Register() {

  return (
    <section className="error">
      <h1 className="error__header">404</h1>
      <p className="error__text">Страница не найдена</p>
      <Link className="error__button" to="/">Назад</Link>
    </section>
  );
}

export default Register;
