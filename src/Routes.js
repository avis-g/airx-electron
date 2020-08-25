import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./App";
import About from "./pages/about";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default Routes;
