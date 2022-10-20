import { Route, Switch } from 'react-router-dom';
import Main from '../Main';
import Movies from '../Movies';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/movies">
        <Movies />
      </Route>
    </Switch>
  );
}

export default App;
