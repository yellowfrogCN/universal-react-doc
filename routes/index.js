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
import HTML from '../HTML';

const router = express.Router();

function renderComponentWithRoot(html, store) {
    const initialState = store.getState();
    const rootMarkup = renderToString(
        <HTML content={html} initialState={initialState} />,
    );

    return `<!doctype html>\n${rootMarkup}`;
}

function routeIsUnmatched(renderProps) {
    return renderProps.routes[renderProps.routes.length - 1].path === '*';
}
// 核心方法
function handleRoute(res, renderProps) {
    const store = configureStore();
    const status = routeIsUnmatched(renderProps) ? 404 : 200;
    // 找寻组件中是否存在 readyOnActions 这个静态方法，如果存在，则返回出来给Promise.ALL调用
    const readyOnAllActions = renderProps.components
      .filter(component => {
          return component && component.readyOnActions
      })
      .map(component => component.readyOnActions(store.dispatch, renderProps.params));
    
    // 调用 readyOnAllActions, 完成后在then里面渲染html（服务端）
    Promise
      .all(readyOnAllActions)
      .then(() => {
        // setTimeout 函数是为了测试 后台返回数据缓慢时的 前端状态
        setTimeout(() => {
            const html = renderToString(
                <Provider store={store} >
                    <RouterContext
                        {...renderProps}
                    />
                </Provider>
            )
            return (
                res.status(status).send(
                    renderComponentWithRoot(html, store)
                )
            )
        }, 0)
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
                // 核心方法
                handleRoute(res, renderProps)
            } else {
                res.status(404).send('Not found')
            }
        }
    )
});

module.exports = router;
