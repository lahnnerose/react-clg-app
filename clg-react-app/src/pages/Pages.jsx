import React from 'react';
import Home from './home';
import Cuisine from './cuisine';
import { Route, Switch } from "react-router-dom";
import Searched from './Searched';
import Recipe from './Recipe';

function Pages() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
        </Route>
        <Route path="/cuisine/:type">
        <Cuisine />
        </Route>
        <Route path="/searched/:search">
          <Searched />
        </Route>
        <Route path="/recipe/:name">
          <Recipe />
        </Route>
    </Switch>
  );
}

export default Pages;