import { Dispatch } from 'redux';
import firebase from 'react-native-firebase';
import { Platform } from 'react-native';

import { MobileActionTypes, Notification, Publication, SET_NOTIFICATIONS, SET_PUBLICATIONS } from './types';
import ax from 'utils/ax';
import { RootState } from 'store/rootReducer';

export function setPublications(payload: Publication[]): MobileActionTypes {
  return {type: SET_PUBLICATIONS, payload};
}

export function setNotifications(payload: Notification[]): MobileActionTypes {
  return {type: SET_NOTIFICATIONS, payload};
}

export function getNotifications() {
  return (dispatch: Dispatch<MobileActionTypes>, getState: () => RootState): void => {
    const profile_id = getState().auth.profile_id;
    ax().post('mobile/api/notifications', {profile_id})
      .then((response) => {
        dispatch(setNotifications(response.data.notifications));
      });
  };
}

export function getPublications() {
  return (dispatch: Dispatch<MobileActionTypes>, getState: () => RootState): void => {
    const profile_id = getState().auth.profile_id;
    ax().post('news/api/news', {profile_id})
      .then((response) => {
        dispatch(setPublications(response.data.news));
      });
  };
}

export function registerFirebaseDevice() {
  return (dispatch: Dispatch<MobileActionTypes>, getState: () => RootState): void => {
    const profile_id = getState().auth.profile_id;
    firebase.messaging().requestPermission().then(() => {
      firebase.messaging().getToken().then((token) => {
        const payload = {profile_id, token, platform: Platform.OS};
        ax().post('mobile/api/firebase/register-device', payload)
          .then(() => console.log('...FCM device registered', payload));
      });
    });
  };
}
