import authLogo from '../images/header__logo.svg';
import {NavLink} from 'react-router-dom';

function AuthForm(props) {

  return (
    <section className="auth">
      <div className="auth__header">
        <NavLink to="/" className="header__register">
          <img className="auth__logo" src={authLogo} alt="логотип сайта"/>
        </NavLink>
        <h1 className="auth__title">{props.headText}</h1>
      </div>
      {props.children}
    </section>
  );
}

export default AuthForm;
