// reducer/index.js
import { combineReducers } from 'redux';
import index from './indexReducer';
import about from './aboutReducer';

export default combineReducers({
    index,
    about
})