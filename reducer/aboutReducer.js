// reducer/aboutReducer.js
import * as types from '../contants';
function aboutReducer (
    state = {
        title: '编程界的杀马特、摄影技术远超陈冠希的TJ大神',
        list: {}
    },
    action
) {
    switch (action.type) {
        case types.GET_TJ_INFO_SUCCESS:
            return {
                ...state,
                list: action.payload
            }
            // return Object.assign({}, state, {
            //     list: action.payload
            // })
        case types.GET_TJ_INFO_FAILED:
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

export default aboutReducer;