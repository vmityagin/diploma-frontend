import React from "react";
import Header from "./Header";
import AuthForm from "./AuthForm";
import Footer from './Footer';

function Register({name, title, buttonText, handleSubmitRegister}) {

  const[state, setState] = React.useState({
    email: '',
    password: ''
  });

  function handleSubmit(e) {
    e.preventDefault();
    const {email, password} = state;
    handleSubmitRegister(state);
  }

  function handleChange(e) {
    const {name, value} = e.target;
    setState({...state,
      [name]: value
    });
  }

  return (
    <section className="auth">
      <Header linkName="Вход" userLogin="" link="/signin" />
      <AuthForm 
      name={name} 
      title={title}
      buttonText={buttonText} 
      handleChange={handleChange} 
      handleSubmit={handleSubmit}
      stateObject={state}
      />
      <Footer />
    </section>
  );
}

export default Register;
