import React from "react";
import {Link, useHistory} from 'react-router-dom';

function Register() {
  const history = useHistory();

  function goBack() {
    history.goBack();
  }

  return (
    <main className="error">
      <div className="error__box">
        <h1 className="error__header">404</h1>
        <p className="error__text">Страница не найдена</p>
        <button className="error__button" onClick={goBack}>Назад</button>
      </div>
    </main>
  );
}

export default Register;
