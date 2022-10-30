import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../Main';
import Movies from '../Movies';
import SaviedMovies from '../SaviedMovies';
import Profile from '../Profile';
import Register from '../Register';
import Login from '../Login';
import PageNotFound from '../PageNotFound';
import NavigationPopup from '../NavigationPopup';

function App() {
  const [isNavigationPopup, setIsNavigationPopup] = React.useState(false);

  function handlePopupMenuNavigation() {
    setIsNavigationPopup(true);
    document.body.classList.add('scroll');
  }

  function closePopup() {
    setIsNavigationPopup(false);
    document.body.classList.remove('scroll');
  }


  return (
    <>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/movies">
          <Movies
            isOpen={handlePopupMenuNavigation}
            onClose={closePopup}
          />
        </Route>
        <Route path="/saved-movies">
          <SaviedMovies />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/signup">
          <Register
            buttonText="Зарегистрироваться"
          />
        </Route>
        <Route path="/signin">
          <Login
            buttonText="Войти"
          />
        </Route>
        <Route path="*" >
          <PageNotFound />
        </Route>
      </Switch>

      <NavigationPopup isOpen={isNavigationPopup} onClose={closePopup} />
    </>
  );
}

export default App;
