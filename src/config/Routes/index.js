import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login, MainApp } from "../../pages";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/register">
          <p>REG</p>
        </Route>
        <Route path="/">
          <MainApp></MainApp>
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
