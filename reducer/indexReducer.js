// reducer/indexReducer.js
import * as types from '../contants';

function indexReducer (
    state = {
        title: 'Redux 作者：Dan Abramov',
        list: {}
    },
    action
) {
    switch (action.type) {
        case types.GET_DAN_INFO_SUCCESS:
            return {
                ...state,
                list: action.payload
            }
            // return Object.assign({}, state, {
            //     list: action.payload
            // })
        case types.GET_DAN_INFO_FAILED:
            return {
                ...state,
                list: {}
            }
            // return Object.assign({}, state, {
            //     list: {}
            // }) 
        default:
            return state;
    }
}

export default indexReducer;