import { USER_LOGIN, USER_LOGOUT, AuthActionTypes, UserLoginType } from './types';

export function userLogin(payload: UserLoginType): AuthActionTypes {
  return {
    type: USER_LOGIN,
    payload,
  };
}

export function userLogout(): AuthActionTypes {
  return {
    type: USER_LOGOUT,
  };
}