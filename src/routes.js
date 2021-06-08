import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Repository from './pages/Repository';
import Camilinda from './pages/Camilinda';
import Curso from './pages/Curso';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Camilinda" component={Camilinda} />
        <Route path="/" exact component={Main} />
        <Route path="/curso" component={Curso} />
        <Route path="/repository" component={Repository} />
      </Switch>
    </BrowserRouter>
  );
}
