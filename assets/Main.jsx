/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';

import LandingPage from './components/landing-page/container/LandingPageContainer';

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route component={LandingPage} />
    </Switch>
  </HashRouter>
, document.getElementById('react-root'));
