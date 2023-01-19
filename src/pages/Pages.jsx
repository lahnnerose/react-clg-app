import React from 'react';
import Home from './home';
import Cuisine from './cuisine';
import { Route, Switch, useLocation } from "react-router-dom";
import Searched from './Searched';
import Recipe from './Recipe';
import { AnimatePresence } from 'framer-motion';

function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence wait>
    <Switch Location={location} key={location.pathname}>
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
  </AnimatePresence>
  );
}

export default Pages;