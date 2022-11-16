import React from "react";
import {NavLink} from 'react-router-dom';
import AuthForm from "../components/AuthForm";
import FormInput from "../components/FormInput";
import { inputsRegister, regularEmailRegExp } from '../utils/constants';

function Register({ buttonText, handleSubmitAuthForm }) {
  const [ validList, setValidList ] = React.useState({
    userName: false,
    userEmail: false,
    userPassword: false,
  })
  const [ values, setValues ] = React.useState({
    userName: "",
    userEmail: "",
    userPassword: "",
  })

  const [ isDisabled, setIsDisabled ] = React.useState(true);

  function validValue(e) {
    console.log(validList);
    if (e.target.name === "userEmail") {
      if (e.target.value.match(regularEmailRegExp)) {
        setValidList({...validList, [e.target.name]: true });
      } else {
        setValidList({...validList, [e.target.name]: false });
        setIsDisabled(true);
      }
    } else if (e.target.name === "userName") {
      if (e.target.value.length >= 2 && e.target.value.length <= 30) {
        setValidList({...validList, [e.target.name]: true });
      }  else {
        setValidList({...validList, [e.target.name]: false });
        setIsDisabled(true);
      }
    } else if (e.target.name === "userPassword") {
      if (e.target.value.length >= 6 && e.target.value.length <= 30) {
        setValidList({...validList, [e.target.name]: true });
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
    checkStatusButton();
  };

  function handleSubmit(e) {
    e.preventDefault();
    setIsDisabled(true);
    handleSubmitAuthForm(values);
  }

  React.useEffect(() => {
    setIsDisabled(!Object.values(validList).every(el => el));
  }, [values])

  function checkStatusButton() {
    setIsDisabled(!Object.values(validList).every(el => el));
  }

  return (
    <AuthForm headText="Добро пожаловать!">
      <form className="form form__login" name="form-login" onSubmit={handleSubmit} noValidate>
        <div className="form__main">
          {inputsRegister.map((input) => (
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
            Уже зарегистрированы?
            <NavLink className="form__link" to="/signin">
              Войти
            </NavLink>
          </p>
        </footer>

      </form>
    </AuthForm>
  );
}

export default Register;
