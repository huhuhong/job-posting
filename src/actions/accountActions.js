import * as types from "./actionTypes";

export function loginSuccess(user) {
  return { type: types.LOGIN_SUCCESS, user };
}

export function logoutSuccess(user) {
  return { type: types.LOGOUT_SUCCESS, user };
}

export function login(user) {
    return function(dispatch, getState) {
      dispatch(loginSuccess(user));
      return true;
    }
}

export function logout() {
    return function(dispatch, getState) {
      dispatch(logoutSuccess(null));
      return true;
    }
}