import React, {useEffect} from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateManager";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login"
import Poultry from "./Poultry"
import Vegetable from "./Vegetable"
import Fruit from "./Fruit"

function App() {
  // get the dispatch function from StateManager so we can call it later to set the user state
  const [{ }, dispatch] = useStateValue();

  // useEffect will only run once when the app component loads
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      // if the user has logged in, tell StateManager to set the user state to the user
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }
      else {  // if the user has not logged in, tell StateManager to set the user state to null
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, [])
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/vegetable">
            <Header />
            <Vegetable />
          </Route>
          <Route path="/fruit">
            <Header />
            <Fruit />
          </Route>
          <Route path="/poultry">
            <Header />
            <Poultry />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
