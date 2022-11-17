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

  const [ isDisabled, setIsDisabled ] = React.useState(true);

  function checkStatusButton() {
    setIsDisabled(!Object.values(validList).every(el => el));
  }

  function validValue(e) {
    if (e.target.name === "userEmail") {
      if (e.target.value.match(regularEmailRegExp)) {
        setValidList({...validList, [e.target.name]: true })
      } else {
        setValidList({...validList, [e.target.name]: false });
        setIsDisabled(true);
      }
    } else if (e.target.name === "userPassword") {
      if (e.target.value.length >= 2 && e.target.value.length <= 30) {
        setValidList({...validList, [e.target.name]: true })
      }  else {
        setValidList({...validList, [e.target.name]: false });
        setIsDisabled(true);
      }
    }
  }

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value });
    validValue(e);
    e.target.value === '' && setIsDisabled(true);
  };

  function handleSubmit(e) {
    e.preventDefault();
    setIsDisabled(true);
    handleSubmitLogin(values);
  }

  React.useEffect(() => {
    setIsDisabled(!Object.values(validList).every(el => el));
  }, [values])

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
            disabled={isDisabled}
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
