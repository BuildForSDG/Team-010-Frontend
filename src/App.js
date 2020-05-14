import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import login from './pages/login';
import homepage from './pages/homepage';
import containers from './containers';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={login} />
      <Route path="/home" component={homepage} />
      <Route path="/containers" exact component={containers} />
    </Switch>
  </BrowserRouter>
);

export default App;
