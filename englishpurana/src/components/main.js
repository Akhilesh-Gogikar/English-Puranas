import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './home';
import Signup from './login';
import Puranas from './puranas';
// import Analytics from './Stats';
import PuranaIndex from './index';
import About from './about';

const Main = () => {
  return (
    <BrowserRouter>
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/login' component={Signup}></Route>
      <Route exact path='/puranas' component={Puranas}></Route>
      <Route exact path='/index' component={PuranaIndex}></Route>
      <Route exact path='/about' component={About}></Route>
    </Switch>
    </BrowserRouter>
  );
}

export default Main;
