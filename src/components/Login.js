import React from 'react';
import Header from './Header';
import AuthForm from './AuthForm';
import Footer from './Footer';

function Login({name, title, buttonText, handleSubmitEnter}) {
  const [state, setState] = React.useState({});

  function handleSubmit(e) {
    e.preventDefault();
    const {email, password} = state;
    handleSubmitEnter(state);
    setState({email: '', password: ''});
  }

  function handleChange(e) {
    const {name, value} = e.target;
    setState({...state,
      [name]: value 
    });
  }

  return (
  <section className="auth">
    <Header linkName="Регистрация" userLogin="" link="/signup" />
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
export default Login;
