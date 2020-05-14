import axios from 'axios';
import { USER_LOGIN, USER_LOGOUT, AuthState, AuthActionTypes } from './types';

const initialState: AuthState = {
  profile_id: null,
  token: null,
};

export default function authReducer(state = initialState, action: AuthActionTypes): AuthState {
  switch (action.type) {

    case USER_LOGIN:
      const {token, profile_id} = action.payload;
      axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : null;
      return {profile_id, token};

    case USER_LOGOUT:
      axios.defaults.headers.common['Authorization'] = null;
      return {profile_id: null, token: null};
  }

  return state;
};
