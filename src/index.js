import React from "react";
import { ReactDOM, render } from "react-dom";
import "./styles/index.css";
import LandingPage from "./containers/LandingPage/LandingPage.js";
import Dashboard from "./containers/Dashboard/Dashboard.js";
import Profile from "./containers/Profile/Profile.js";

// using ES6 modules
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import routes from "routes.js";
import * as serviceWorker from "./serviceWorker";

//ROUTING
render(
  <Router>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/profile" component={Profile} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

// ReactDOM.render(<Router routes={routes} />, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
