import {
  MobileActionTypes,
  MobileState,
  Notification,
  Publication,
  SET_NOTIFICATIONS,
  SET_PUBLICATIONS,
} from './types';

const initialState: MobileState = {
  notifications: [],
  publications: [],
};

export default function mobileReducer(state = initialState, action: MobileActionTypes): MobileState {
  switch (action.type) {

    case SET_NOTIFICATIONS: {
      const notifications: Notification[] = action.payload;
      return {...state, notifications};
    }

    case SET_PUBLICATIONS: {
      const publications: Publication[] = action.payload;
      return {...state, publications};
    }
  }

  return state;
};
