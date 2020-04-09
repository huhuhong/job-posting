import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function accountReducer(state = initialState.account, action) {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                isLogin: true,
                user: action.user,
            }
        case types.LOGOUT_SUCCESS:
            return {
                ...state,
                isLogin: false,
                user: null,
            }
        default:
            return state;
    }
}