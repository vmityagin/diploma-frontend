import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Main from '../Main';
import Movies from '../Movies';
import SaviedMovies from '../SaviedMovies';
import Profile from '../Profile';
import Register from '../Register';
import Login from '../Login';
import PageNotFound from '../PageNotFound';
import NavigationPopup from '../NavigationPopup';
import api from '../../utils/MoviesApi';
import apiMain from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute';
import { sortShortMovies, renderMoviesPage } from '../../utils/constants';
import {CurrentUserContext} from '../../context/CurrentUserContext';

function App() {
  const [currentUser, setCurrentUser] = React.useState('');
  const [loggedIn, setLoggedIn] = React.useState(true);
  const [isNavigationPopup, setIsNavigationPopup] = React.useState(false);
  const [ isCheckBox, setIsCheckBox ] = React.useState(false);
  const [ isPhrase, setPhrase ] = React.useState(false);
  const [ isVisible, setIsVisible ] = React.useState(false);

  const [ savedMovies, setSavedMovies ] = React.useState([]);

  const [ moviesListApi, setMoviesListApi ] = React.useState([]);
  const [ moviesListApiShort, setMoviesListApiShort ] = React.useState([]);
  const [ moviesRender, setMoviesRender ] = React.useState([]);
  const [ initialState, setinitialState ] = React.useState([]);

  React.useEffect(() => {
    apiMain.loadCardMovies()
    .then((movies) => {
      setSavedMovies(movies.data);
    })
  }, []);

  function handlePopupMenuNavigation() {
    setIsNavigationPopup(true);
    document.body.classList.add('scroll');
  }

  function handleCheckBox() {

    setMoviesRender(initialState);

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
    setPhrase(searchPhrase);
    setMoviesRender(initialState);

    api.loadCardMovies()
      .then((moviesList) => {
        const filtredMovies = moviesList.filter((movie) => {
          return movie.nameRU.toLowerCase().includes(searchPhrase.toLowerCase());
        })

        setMoviesListApi(filtredMovies);
        setMoviesListApiShort(sortShortMovies(filtredMovies));

        if (isCheckBox) {
          let object = sortShortMovies(filtredMovies);
          setMoviesRender(object);
        } else {
          setMoviesRender(filtredMovies);
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

 React.useEffect(() => {
    apiMain.getInfromationUser()
      .then((info) => {
        setCurrentUser(info);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])

  function handleLikeClick(card) {
    apiMain.savedMovieInUserList(card)
      .then((movie) => {
        setSavedMovies([...savedMovies, movie.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function checkIdCard(card) {
    let idCard;
    if (!card.movieId) {
      return idCard = savedMovies.find(movie => Number(movie.movieId) === card.id)._id;
    } else {
      return idCard = card._id;
    }
  }

  function handleDeleteLikeClick(card, index) {
    apiMain.deleteMovieFromUserList(checkIdCard(card))
      .then((message) => {
        setSavedMovies([...savedMovies.slice(0, index), ...savedMovies.slice(index + 1)])
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <ProtectedRoute
          path="/movies"
          component={Movies}
          loggedCheck={loggedIn}
          isOpen={handlePopupMenuNavigation}
          onClose={closePopup}
          handleSubmitSearchForm={handleSubmitSearchForm}
          handleCheckBox={handleCheckBox}
          isCheckBox={isCheckBox}
          moviesRender={moviesRender}
          handleButtonYet={handleButtonYet}
          isVisible={isVisible}
          handleLikeClick={handleLikeClick}
          handleDeleteLikeClick={handleDeleteLikeClick}
          savedMovies={savedMovies}
        />
        <ProtectedRoute
          path="/saved-movies"
          component={SaviedMovies}
          loggedCheck={loggedIn}
          isOpen={handlePopupMenuNavigation}
          onClose={closePopup}
          savedMovies={savedMovies}
          handleDeleteLikeClick={handleDeleteLikeClick}
        />
        <ProtectedRoute
          path="/profile"
          component={Profile}
          loggedCheck={loggedIn}
        />
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
    </CurrentUserContext.Provider>
  );
}

export default App;
