// src/components/AppRoutes.js
import React from 'react';
import { Router, browserHistory, hashHistory } from 'react-router';
import routes from '../routes';



export default class AppRoutes extends React.Component {
    render () {
        return (
            <Router history={hashHistory} routes={routes} onUpdate={() => window.scrollTo(0, 0)}/>
        );
    }
}
