import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import login from './pages/login';
import homepage from './pages/homepage';
import market from './pages/market';
import containers from './containers';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={login} />
      <Route path="/home" component={homepage} />
      <Route path="/containers" exact component={containers} />
      <Route path="/market" exact component={market} />
    </Switch>
  </BrowserRouter>
);

export default App;
