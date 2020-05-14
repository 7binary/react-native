import { Dispatch } from 'redux';

import {
  Passport,
  ProfileActionTypes,
  SET_PASSPORT,
  SET_TRANSACTIONS,
  SET_USER,
  Transaction,
  UNSET_USER,
  User,
} from './types';
import ax from 'utils/ax';
import { RootState } from 'store/rootReducer';

export function setUser(payload: User): ProfileActionTypes {
  return {type: SET_USER, payload};
}

export function unsetUser(): ProfileActionTypes {
  return {type: UNSET_USER};
}

export function setTransactions(payload: Transaction[]): ProfileActionTypes {
  return {type: SET_TRANSACTIONS, payload};
}

export function setPassport(payload: Passport): ProfileActionTypes {
  return {type: SET_PASSPORT, payload};
}

export function getProfile() {
  return (dispatch: Dispatch<ProfileActionTypes>, getState: () => RootState): void => {
    const profile_id = getState().auth.profile_id;
    ax().post('profiles/api/auth/get-profile', {profile_id})
      .then((response) => {
        dispatch(setUser(response.data.profile));
      });
  };
}

export function getTransactions() {
  return (dispatch: Dispatch<ProfileActionTypes>, getState: () => RootState): void => {
    const profile_id = getState().auth.profile_id;
    ax().post('profiles/api/transaction/list', {profile_id})
      .then((response) => {
        dispatch(setTransactions(response.data.transactions));
      });
  };
}

export function getPassport() {
  return (dispatch: Dispatch<ProfileActionTypes>, getState: () => RootState): void => {
    const profile_id = getState().auth.profile_id;
    ax().post('taxes/api/ndfl/ndfl-info', {profile_id})
      .then((response) => {
        dispatch(setPassport(response.data.form));
      });
  };
}
