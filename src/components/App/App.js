import React from 'react';
import { Route, Switch, useHistory, useLocation, Redirect } from 'react-router-dom';
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
import * as Auth from '../Auth';
import ProtectedRoute from '../ProtectedRoute';
import { sortShortMovies, renderMoviesPage } from '../../utils/constants';
import {CurrentUserContext} from '../../context/CurrentUserContext';
import { filterList } from '../../utils/filteredSavedMovies';

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isNavigationPopup, setIsNavigationPopup] = React.useState(false);
  const [ isCheckBox, setIsCheckBox ] = React.useState(false);

  const [ isPhrase, setPhrase ] = React.useState('');
  const [ isPhraseSaved, setPhraseSaved ] = React.useState('');
  const [ isVisible, setIsVisible ] = React.useState(false);

  const [ savedMoviesRender, setSavedMoviesRender ] = React.useState([]);
  const [ savedMovies, setSavedMovies ] = React.useState([]);

  const [ moviesListApi, setMoviesListApi ] = React.useState([]);
  const [ moviesListApiShort, setMoviesListApiShort ] = React.useState([]);
  const [ moviesRender, setMoviesRender ] = React.useState([]);

  const [ initialState, setinitialState ] = React.useState([]);

  const location = useLocation();
  const history = useHistory();

  /* ФУНКЦИОНАЛ ОТРИСОВКИ КАРТОЧЕК */
  React.useEffect(() => {
    updateCardSavedList();
  }, [location]);

  React.useEffect(() => {
    getSavedCardMovies()
  }, [loggedIn]);

  function handleSubmitSearchForm(searchPhrase, typePage) {

    setMoviesRender(initialState);
    if (typePage === "movie") {

      renderCardMovies(searchPhrase);
      setPhrase(searchPhrase);

    } else if (typePage === "savedMovie") {
      getSavedCardMovies();
      setPhraseSaved(searchPhrase);
      let copy = Object.assign([], savedMoviesRender);
      copy = filterList(searchPhrase, savedMovies);
      setSavedMoviesRender(copy);

    }
  }

  function renderCardMovies(searchPhrase) {
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

  function updateCardSavedList() {
    let copy = Object.assign([], savedMoviesRender);
    copy = savedMovies;
    setSavedMoviesRender(copy);
  }

  function getSavedCardMovies() {
    apiMain.loadUserCardMovies()
    .then((movies) => {
      setSavedMoviesRender(movies.data);
      setSavedMovies(movies.data);
    })
    .catch(err => console.log(err));
  }

  function handleLikeClick(card) {
    apiMain.savedMovieInUserList(card)
      .then((movie) => {
        setSavedMoviesRender([...savedMoviesRender, movie.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function checkIdCard(card) {
    let idCard;
    if (!card.movieId) {
      return idCard = savedMoviesRender.find(movie => Number(movie.movieId) === card.id)._id;
    } else {
      return idCard = card._id;
    }
  }

  function handleDeleteLikeClick(card, index) {
    apiMain.deleteMovieFromUserList(checkIdCard(card))
      .then((message) => {
        setSavedMoviesRender([...savedMoviesRender.slice(0, index), ...savedMoviesRender.slice(index + 1)])
      })
      .catch((err) => {
        console.log(err);
      })
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

  /* ФУНКЦИОНАЛ РЕГИСТРАЦИИ И АВТОРИЗАЦИИ */

  React.useEffect(() => {
    tokenCheck();
  }, [loggedIn]);

  function tokenCheck() {
    const token = localStorage.getItem('token');
    if (token) {
      setLoggedIn(true);
      apiMain.getInfromationUser()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch(err => console.log(err));
    } else {
      setLoggedIn(false);
      history.push('/signin');
    }
  }

  function handleSubmitRegisterForm(data) {
    if(data.userName) {
      Auth.register(data)
        .then((res) => {
          if (res) {
            history.push('/signin');
          } else {
            alert('Что-то пошло не так');
          }
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }

  function handleSubmitLogin(data) {
    return Auth.authorize(data)
    .then((data) => {
      if (data.token) {
        setLoggedIn(true);
        localStorage.setItem('token', data.token);
        history.push('/movies');
      } else {
        alert('Что-то пошло не так');
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }

  React.useEffect(() => {
    apiMain.getInfromationUser()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch(err => console.log(err));
  }, [loggedIn]);

  function signOut() {
    localStorage.removeItem('token');
    setLoggedIn(false);
    history.push('./signin');
  }

  function successChangeUserData(newData) {
    apiMain.changeUserData(newData)
      .then((res) => {
        setCurrentUser(res);
      })
      .catch(err => console.log(err));
  }

  /* ФУНКЦИОНАЛ НАВИГАЦИИ */

  function handlePopupMenuNavigation() {
    setIsNavigationPopup(true);
    document.body.classList.add('scroll');
  }

  function closePopup() {
    setIsNavigationPopup(false);
    document.body.classList.remove('scroll');
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
          loggedIn={loggedIn}
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
          savedMovies={savedMoviesRender}
          isPhrase={isPhrase}
        />
        <ProtectedRoute
          path="/saved-movies"
          component={SaviedMovies}
          loggedIn={loggedIn}
          isOpen={handlePopupMenuNavigation}
          onClose={closePopup}
          savedMovies={savedMoviesRender}
          handleDeleteLikeClick={handleDeleteLikeClick}
          handleSubmitSearchForm={handleSubmitSearchForm}
          isPhrase={isPhraseSaved}
        />
        <ProtectedRoute
          path="/profile"
          component={Profile}
          loggedIn={loggedIn}
          signOut={signOut}
          successChangeUserData={successChangeUserData}
        />
        <Route path="/signup">
          <Register
            buttonText="Зарегистрироваться"
            handleSubmitAuthForm={handleSubmitRegisterForm}
          />
        </Route>
        <Route path="/signin">
          {loggedIn ? <Redirect to="/movies" /> : <Login buttonText="Войти" handleSubmitLogin={handleSubmitLogin} />}
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
