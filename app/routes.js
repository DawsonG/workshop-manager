import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './layouts/App';
import Dashboard from './Dashboard/Dashboard';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Dashboard} />
  </Route>
);
