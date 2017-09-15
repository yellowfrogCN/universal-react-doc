// Entry.js
import React from 'react';
import ReactDOM from 'react-dom';
// import Root from './Root';
import routes from './routes/configureRoute';

import { Provider } from 'react-redux';
import configureStore from './redux';

const store = configureStore(window.PROPS);

ReactDOM.render(
    <Provider store={store}>
        {routes}
    </Provider>,
    // React.createElement(Root),
    // document 可以理解为浏览器
    document
);