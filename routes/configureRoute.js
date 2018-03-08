import React from 'react';
import {
    Router, Route, browserHistory, IndexRoute
} from 'react-router';
import Root from '../Root';
import Index from '../container/Index';
import About from '../container/About';

export default (
    <Router history={browserHistory}>
        <Route path='/' component={Root}>
            <IndexRoute component={Index} />
            <Route path='/tj' component={About} />
        </Route>
    </Router>
)