// configureStore.js
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducer';
import { createLogger } from 'redux-logger';

const logger = createLogger({
  collapsed: false
})

const createStoreWithMiddleware = applyMiddleware(
  logger,
  thunkMiddleware,
)(createStore);

const initReduxDevTool = (typeof window === 'object' && typeof window.devToolsExtension !== 'undefined') ? window.devToolsExtension() : f => f;

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(
    rootReducer,
    initialState,
    initReduxDevTool
  );

  return store;
}