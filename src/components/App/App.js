import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../Main';
import Movies from '../Movies';
import SaviedMovies from '../SaviedMovies';
import Profile from '../Profile';
import Register from '../Register';
import Login from '../Login';
import PageNotFound from '../PageNotFound';

function App() {

  return (
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/movies">
        <Movies />
      </Route>
      <Route path="/saved-movies">
        <SaviedMovies />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/signup">
        <Register />
      </Route>
      <Route path="/signin">
        <Login />
      </Route>
      <Route path="*" >
        <PageNotFound />
      </Route>
    </Switch>
  );
}

export default App;
