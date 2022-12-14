import authLogo from '../images/header__logo.svg';
import {NavLink} from 'react-router-dom';

function AuthForm(props) {

  return (
    <div className="auth">
      <header className="auth__header">
        <NavLink to="/" className="header__register">
          <img className="auth__logo" src={authLogo} alt="логотип сайта"/>
        </NavLink>
        <h1 className="auth__title">{props.headText}</h1>
      </header>
      <main>
        {props.children}
      </main>
    </div>
  );
}

export default AuthForm;
