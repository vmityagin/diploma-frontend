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
import api from '../../utils/MoviesApi';
import { sortShortMovies, renderMoviesPage } from '../../utils/constants';

function App() {
  const [isNavigationPopup, setIsNavigationPopup] = React.useState(false);
  const [ isCheckBox, setIsCheckBox ] = React.useState(false);
  const [ isVisible, setIsVisible ] = React.useState(false);
  const [ moviesListApi, setMoviesListApi ] = React.useState([]);
  const [ moviesListApiShort, setMoviesListApiShort ] = React.useState([]);
  const [ moviesRender, setMoviesRender ] = React.useState([]);

  function handlePopupMenuNavigation() {
    setIsNavigationPopup(true);
    document.body.classList.add('scroll');
  }

  function handleCheckBox() {
    if(isCheckBox) {
      setIsCheckBox(false);
      let copy = Object.assign([], moviesRender);
      copy = moviesListApi;
      setMoviesRender(copy);
    } else {
      setIsCheckBox(true);
      let copy = Object.assign([], moviesRender);
      copy = sortShortMovies(moviesListApi);
      setMoviesRender(copy);
    }
  }

  function handleButtonYet() {
    let copy = Object.assign([], moviesRender);
    renderMoviesPage((isCheckBox ? moviesListApiShort : moviesListApi), moviesRender).map((movie) =>
    (copy.push(movie)));
    setMoviesRender(copy);
  }

  function buttonYetCheckVisible() {
    if (isCheckBox) {
      moviesListApiShort.length === moviesRender.length ? setIsVisible(false) : setIsVisible(true);
    } else {
      moviesListApi.length === moviesRender.length ? setIsVisible(false) : setIsVisible(true);
    }
  }

  React.useEffect(() => {
    buttonYetCheckVisible();
  }, [moviesRender]);

  function handleSubmitSearchForm(searchPhrase) {
    api.loadCardMovies()
      .then((moviesList) => {
        const sortedMovies = moviesList.filter((movie) => {
          return movie.nameRU.toLowerCase().includes(searchPhrase.toLowerCase());
        })
        setMoviesListApi(sortedMovies);
        setMoviesListApiShort(sortShortMovies(sortedMovies))
        if (isCheckBox) {
          let object = sortShortMovies(sortedMovies);
          setMoviesRender(renderMoviesPage(object, moviesRender));
        } else {
          setMoviesRender(renderMoviesPage(sortedMovies, moviesRender));
        }
      })
      .catch((err) => {
        console.log(err);
      })
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
            handleSubmitSearchForm={handleSubmitSearchForm}
            handleCheckBox={handleCheckBox}
            isCheckBox={isCheckBox}
            moviesRender={moviesRender}
            handleButtonYet={handleButtonYet}
            isVisible={isVisible}
          />
        </Route>
        <Route path="/saved-movies">
          <SaviedMovies
            isOpen={handlePopupMenuNavigation}
            onClose={closePopup}
          />
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
