import {
  Passport,
  ProfileActionTypes,
  ProfileState,
  SET_PASSPORT,
  SET_TRANSACTIONS,
  SET_USER,
  Transaction,
  UNSET_USER,
  User,
} from './types';

const initialState: ProfileState = {
  user: null,
  transactions: [],
  passport: null,
};

export default function profileReducer(state = initialState, action: ProfileActionTypes): ProfileState {
  switch (action.type) {

    case SET_USER: {
      const user: User = action.payload;
      return {...state, user};
    }

    case UNSET_USER:
      return {...state, user: null};

    case SET_TRANSACTIONS:
      const transactions: Transaction[] = action.payload;
      return {...state, transactions};

    case SET_PASSPORT:
      const passport: Passport = action.payload;
      return {...state, passport};
  }

  return state;
};
