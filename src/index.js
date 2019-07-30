import React from 'react';
import ReactDOM from 'react-dom';
import Login from './auth/Login';
import { Router, Route, Switch } from 'react-router';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <Switch>
        <Route path="/" component={Login} />
    </Switch>
    </Router>,
    document.getElementById('root')
);

serviceWorker.unregister();