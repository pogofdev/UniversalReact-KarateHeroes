// src/routes.js
import React from 'react';
import { Route, IndexRoute, Switch } from 'react-router';
import Layout from './components/Layout';
import IndexPage from './components/IndexPage';
import AthletePage from './components/AthletePage';
import NotFoundPage from './components/NotFoundPage';
import Authentication from './shared/Authentication';
import SignIn from './containers/SignIn';

const routes = (
    <Route path="/" component={Layout}>
        <IndexRoute component={IndexPage}/>
        <Route path="sign-in" component={SignIn}/>
        <Route path="athlete/:id" component={AthletePage}/>
        <Route path="*" component={NotFoundPage}/>
    </Route>

);

export default routes;
