import React from "react";
import {Link} from 'react-router-dom';

function Register() {

  return (
    <main className="error">
      <div className="error__box">
        <h1 className="error__header">404</h1>
        <p className="error__text">Страница не найдена</p>
        <Link className="error__button" to="/">Назад</Link>
      </div>
    </main>
  );
}

export default Register;
