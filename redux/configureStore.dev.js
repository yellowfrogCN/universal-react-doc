// configureStore.js
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducer';
import { createLogger } from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';

const logger = createLogger({
  collapsed: true
})

const composeEnhancers = composeWithDevTools({
  // 后续如需配置参数，可在这里配置
});

const middleware = [
    thunkMiddleware,
    // logger
];

const configureStore = (preloadedState = {}) => {
    const store = createStore(
        rootReducer,
        preloadedState,
        composeEnhancers(
            applyMiddleware(...middleware)
        )
    );

    if (module.hot) {
        module.hot.accept('../reducer', () => {
            store.replaceReducer(rootReducer);
        });
    }

    return store;
}

export default configureStore;