import { Route } from 'react-router';
import React from 'react'

//Containers
import Index from './containers/Index';

const routes = (
  <Route path='/' component={Index}>
    <Route path='/1' component={Index} />
    <Route path='/2' component={Index} />
  </Route>
);

export default routes
