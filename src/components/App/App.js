<<<<<<< HEAD
import React from 'react';
import { Route, Switch } from 'react-router-dom';
=======
import { Route, Switch, Redirect } from 'react-router-dom';
>>>>>>> 15e22bb9ad80f7bcc43058c9ccd0896c603aeb7b
import Main from '../Main';
import Movies from '../Movies';
import SaviedMovies from '../SaviedMovies';
import Profile from '../Profile';
import Register from '../Register';
import Login from '../Login';
import PageNotFound from '../PageNotFound';

function App() {
<<<<<<< HEAD

=======
>>>>>>> 15e22bb9ad80f7bcc43058c9ccd0896c603aeb7b
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
<<<<<<< HEAD
      <Route path="*" >
        <PageNotFound />
      </Route>
=======
      <Route path="/404" >
        <PageNotFound />
      </Route>
      <Redirect to="/404" />
>>>>>>> 15e22bb9ad80f7bcc43058c9ccd0896c603aeb7b
    </Switch>
  );
}

export default App;
