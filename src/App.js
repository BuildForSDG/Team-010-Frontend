import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import login from './pages/login';
import market from './pages/market';
import homepage from './pages/homepage';

const App = () => (
  <BrowserRouter>
  
    <Switch>
      <Route path="/market" component={market} />
      <Route path="/login" component={login} />
      <Route path="/" component={homepage} />
    </Switch>
  </BrowserRouter>
);

export default App;
