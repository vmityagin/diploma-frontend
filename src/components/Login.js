import React from "react";
import {NavLink} from 'react-router-dom';
import AuthForm from "../components/AuthForm";
import FormInput from "../components/FormInput";
import { inputsLogin, regularEmailRegExp } from '../utils/constants';

function Login({ buttonText, handleSubmitLogin }) {
  const [ validList, setValidList ] = React.useState({
    userEmail: false,
    userPassword: false,
  })
  const [ values, setValues ] = React.useState({
    userEmail: "",
    userPassword: "",
  })

  function validValue(e) {
    if (e.target.name === "userEmail") {
      e.target.value.match(regularEmailRegExp) ? setValidList({...validList, [e.target.name]: true }) : setValidList({...validList, [e.target.name]: false });
    } else if (e.target.name === "userPassword") {
      e.target.value.length >= 6 && e.target.value.length <= 30 ? setValidList({...validList, [e.target.name]: true }) : setValidList({...validList, [e.target.name]: false });
    }
  }

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value });
    validValue(e);
  };

  function handleSubmit(e) {
    e.preventDefault();
    handleSubmitLogin(values);
  }

  return (
    <AuthForm headText="Добро пожаловать!">
      <form className="form form__login" name="form-login" onSubmit={handleSubmit} noValidate>
        <div className="form__main">
          {inputsLogin.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
              validList={validList[input.name]}
            />
          ))
          }
        </div>

        <footer className="form__footer">
          <button
            disabled={!Object.values(validList).every(el => el)}
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
          </footer>
        </form>
      </AuthForm>
  );
}

export default Login;
