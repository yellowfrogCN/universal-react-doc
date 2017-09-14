// action/aboutAction/js
import request from '../utils';
import * as types from '../contants';

export const getTJ = () => {
    return (dispatch, getState) => {
        dispatch({
            type: types.GET_TJ_INFO
        })
        return request('https://api.github.com/users/tj').then(res => {
            console.log(res);
            dispatch({
                type: types.GET_TJ_INFO_SUCCESS,
                payload: res
            })
        }).catch(error => {
            dispatch({
                type: types.GET_TJ_INFO_FAILED,
                payload: error
            })
        })
    }
}