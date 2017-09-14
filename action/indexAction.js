// action/indexAction.js
import request from '../utils';
import * as types from '../contants';

export const getDan = () => {
    return (dispatch, getState) => {
        dispatch({
            type: types.GET_DAN_INFO
        })
        // https://api.github.com/users/tj
        return request('https://api.github.com/users/gaearon').then(res => {
            console.log(res);
            dispatch({
                type: types.GET_DAN_INFO_SUCCESS,
                payload: res
            })
        }).catch(error => {
            dispatch({
                type: types.GET_DAN_INFO_FAILED,
                payload: error
            })
        })
    }
}