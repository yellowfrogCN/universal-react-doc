// routes/index.js
import express from 'express';
import React from 'react';
import {
    renderToString
} from 'react-dom/server';
import Root from '../Root';
import {
    match, RouterContext
} from 'react-router';
import routes from './configureRoute';
import { Provider } from 'react-redux';
import configureStore from '../redux';

const store = configureStore();
const router = express.Router();

function routeIsUnmatched(renderProps) {
    return renderProps.routes[renderProps.routes.length - 1].path === '*';
}

function handleRoute(res, renderProps) {
    // const store = configureStore(window.PROPS);
    const status = routeIsUnmatched(renderProps) ? 404 : 200;
    const readyOnAllActions = renderProps.components
      .filter(component => {
          return component && component.readyOnActions
        //   return component.readyOnActions
      })
      .map(component => component.readyOnActions(store.dispatch, renderProps.params));

    Promise
      .all(readyOnAllActions)
    //   .then(() => res.status(status).send(renderComponentWithRoot(RouterContext, renderProps, store)));
      .then(() => {
        const html = renderToString(
            <Provider store={store} >
                <RouterContext
                    {...renderProps}
                />
            </Provider>
        )
        return res.status(status).send(html)
      });
}

router.get('*', function (req, res) {
    // Note that req.url here should be the full URL path from
    // the original request, including the query string.
    match(
        {routes, location: req.url},
        (error, redirectLocation, renderProps) => {
            if (error) {
                res.status(500).send(error.message)
            } else if (redirectLocation) {
                res.redirect(302, redirectLocation.pathname + redirectLocation.search)
            } else if (renderProps) {
                // You can also check renderProps.components or renderProps.routes for
                // your "not found" component or route respectively, and send a 404 as
                // below, if you're using a catch-all route.
                handleRoute(res, renderProps)
            } else {
                res.status(404).send('Not found')
            }
        }
    )
});

module.exports = router;
