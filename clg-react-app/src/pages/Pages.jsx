import React from 'react';
import Home from './home';
import Cuisine from './cuisine';
import { Route, Switch } from "react-router-dom";

function Pages() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
        </Route>
        <Route path="/cuisine/:type">
        <Cuisine />
        </Route>
    </Switch>
  );
}

export default Pages;