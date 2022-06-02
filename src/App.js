import './App.css';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Subreddit from "./pages/subreddit/Subreddit";

function App() {

  return (
      <>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/subreddit/r/:id">
          <Subreddit/>
        </Route>
      </Switch>
      </>
  );
}

export default App;
