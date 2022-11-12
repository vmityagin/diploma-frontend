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
import { renderMoviesPage, checkWidthScreen } from '../../utils/constants';
import {CurrentUserContext} from '../../context/CurrentUserContext';

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isNavigationPopup, setIsNavigationPopup] = React.useState(false);
  const [ isCheckBox, setIsCheckBox ] = React.useState(false);
  const [ isCheckBoxSaved, setIsCheckBoxSaved ] = React.useState(false);

  const [ query, setQuery ] = React.useState('');
  const [ querySaved, setQuerySaved ] = React.useState('');
  const [ isVisible, setIsVisible ] = React.useState(false);

  const [ savedMovies, setSavedMovies ] = React.useState([]);
  const [ moviesRender, setMoviesRender ] = React.useState([]);

  const [ initialMoviesApi, setInitialMoviesApi ] = React.useState([]);
  const [ initialSavedMoviesApi, setInitialSavedMoviesApi ] = React.useState([]);

  const [ submitMovies, setSubmitMovies ] = React.useState([]);

  const [ filteredMovies, setFilteredMovies ] = React.useState([]);
  const [ filteredSavedMovies, setFilteredSavedMovies ] = React.useState([]);


  const location = useLocation();
  const history = useHistory();

  /* ФУНКЦИОНАЛ ОТРИСОВКИ КАРТОЧЕК НА СТРАНИЦЕ "ФИЛЬМЫ" */

  // Получаем при входе все фильмы по API
  React.useEffect(() => {
    getApiMovies();
  }, []);

  // Функция, которая запрашивает фильмы по API
  function getApiMovies() {
    api.loadCardMovies()
      .then((moviesList) => {
        setInitialMoviesApi(moviesList);
      })
      .catch((err) => console.log(err));

    apiMain.loadUserCardMovies()
      .then((movies) => {
        setInitialSavedMoviesApi(movies.data);
      })
      .catch(err => console.log(err));
  }

  // Функция, срабатывающая после успешного сабмита. Сохраняет массив фильмов отфильтрованный по фразе
  function handleSubmitSearchForm(searchPhrase) {
    setQuery(searchPhrase);
    const filtered = initialMoviesApi.filter((movie) => {
      let rusFilm = movie.nameRU.toLowerCase().includes(searchPhrase.toLowerCase());
      if (rusFilm) {
        return movie;
      }
      return movie.nameEN.toLowerCase().includes(searchPhrase.toLowerCase());
    });
    setSubmitMovies(filtered);
  }

  // Первая отрисовка карточек после сабмита.
  // Отрисовка происходит с условием по чекбоксу
  // И по числу numberCards, которое считается от разрешения экрана
  React.useEffect(() => {
    const numberCards = checkWidthScreen();
    if (isCheckBox === false) {
      setMoviesRender(submitMovies.slice(0,numberCards));
      buttonYetCheckVisible();
      return;
    }

    const shortMoviesSubmit = submitMovies.filter((element) => {
      return element.duration <= 40;
    })
    setFilteredMovies(shortMoviesSubmit);
    setMoviesRender(shortMoviesSubmit.slice(0,numberCards));
  }, [isCheckBox, query]);


  // Функция, которая изменяется state бегунка короткометражки
  // на странице "Фильмы"
  function handleCheckBox() {
    setIsCheckBox(!isCheckBox);
  }

  // Функция, которая добавляет карточки в список,
  // Когда пользователь нажал кнопку "Еще"
  function handleButtonYet() {
    if (isCheckBox === false) {
      let newPart = moviesRender.concat(renderMoviesPage(submitMovies, moviesRender));
      setMoviesRender(newPart);
      return;
    }
    let newShortPart = moviesRender.concat(renderMoviesPage(filteredMovies, moviesRender));
    setMoviesRender(newShortPart);
  }

  // Вызов функции в момент, когда отрисовываются карточки.
  // Проверка нужно ли отрисовывать карточку.
  React.useEffect(() => {
    buttonYetCheckVisible();
  }, [moviesRender]);

  // Функция, которая устанавливает видимость кнопки "Ещё".
  function buttonYetCheckVisible() {
    if (isCheckBox) {
      filteredMovies.length === moviesRender.length ? setIsVisible(false) : setIsVisible(true);
    } else {
      submitMovies.length === moviesRender.length ? setIsVisible(false) : setIsVisible(true);
    }
  }


  /* ФУНКЦИОНАЛ ОТРИСОВКИ КАРТОЧЕК НА СТРАНИЦЕ "СОХРАНЕННЫЕ ФИЛЬМЫ" */
  React.useEffect(() => {
    if(querySaved) {
      if (isCheckBoxSaved) {
        const shortMoviesSavedSubmit = filteredSavedMovies.filter((element) => {
          return element.duration <= 40;
        })
        setSavedMovies(shortMoviesSavedSubmit);
        return;
      }
      setSavedMovies(filteredSavedMovies);
      return;
    }

    if (isCheckBoxSaved) {
      const shortMoviesSavedSubmit = initialSavedMoviesApi.filter((element) => {
        return element.duration <= 40;
      })
      setSavedMovies(shortMoviesSavedSubmit);
      return;
    }
    setSavedMovies(initialSavedMoviesApi);
  }, [isCheckBoxSaved, querySaved])


  function submitSavedForm(searchPhrase) {
    setQuerySaved(searchPhrase);
    const filtered = initialSavedMoviesApi.filter((movie) => {
      let rusFilm = movie.nameRU.toLowerCase().includes(searchPhrase.toLowerCase());
      if (rusFilm) {
        return movie;
      }
      return movie.nameEN.toLowerCase().includes(searchPhrase.toLowerCase());
    })
    setFilteredSavedMovies(filtered);
  }

  function handleCheckBoxSaved() {
    setIsCheckBoxSaved(!isCheckBoxSaved);
  }

  React.useEffect(() => {
    setSavedMovies(initialSavedMoviesApi);
    setQuerySaved('');
    setIsCheckBoxSaved(false);
  }, [location]);


  /* ФУНКЦИОНАЛ ЛАЙКОВ */

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
          savedMovies={savedMovies}
          isPhrase={query}
        />
        <ProtectedRoute
          path="/saved-movies"
          component={SaviedMovies}
          savedMovies={savedMovies}
          loggedIn={loggedIn}
          isOpen={handlePopupMenuNavigation}
          onClose={closePopup}
          handleDeleteLikeClick={handleDeleteLikeClick}
          submitSavedForm={submitSavedForm}
          handleCheckBox={handleCheckBoxSaved}
          isCheckBoxSaved={isCheckBoxSaved}
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
