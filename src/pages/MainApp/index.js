import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header, Footer } from "../../components";

import Home from "../Home";

const MainApp = () => {
  return (
    <React.Fragment>
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default MainApp;
