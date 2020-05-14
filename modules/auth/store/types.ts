export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';

export type UserLoginType = {
  profile_id: number,
  token: string,
};

export interface AuthState {
  profile_id: number | null;
  token: string | null;
}

interface UserLoginAction {
  type: typeof USER_LOGIN;
  payload: UserLoginType;
}

interface UserLogoutAction {
  type: typeof USER_LOGOUT;
}

export type AuthActionTypes = UserLoginAction | UserLogoutAction;
