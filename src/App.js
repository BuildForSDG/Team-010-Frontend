import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import market from './pages/market';
import './App.css';
import login from './pages/login';
import homepage from './pages/homepage';
import containers from './containers';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={login} />
      <Route path="/market" exact component={market} />
      <Route path="/home" component={homepage} />
    </Switch>
  </BrowserRouter>
);

export default App;