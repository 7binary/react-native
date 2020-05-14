import { Notification } from 'react-native-firebase/notifications';
import firebase from 'react-native-firebase';

import DropdownAlertService from 'services/DropdownAlertService';

type FirebaseListenerType = null | (() => void);

export default class FirebaseService {
  static removeOnNotification: FirebaseListenerType = null;
  static removeOnNotificationDisplayed: FirebaseListenerType = null;

  static registerListeners(): void {
    if (!this.removeOnNotification) {
      this.removeOnNotification = firebase.notifications().onNotification((notification: Notification) => {
        console.log('...PUSH onNotification'); // внешний пуш - отправляем на отображение
        const localNotification = new firebase.notifications.Notification()
          .setTitle(notification.title)
          .setBody(notification.body)
          .setData(notification.data)
          .setSound('default')
          .setNotificationId(new Date().valueOf().toString())
          .android.setChannelId('@string/default_notification_channel_id')
          .android.setLargeIcon('ic_launcher')
          .android.setSmallIcon('ic_launcher')
          .android.setPriority(firebase.notifications.Android.Priority.High);
        console.log(localNotification);
        firebase.notifications().displayNotification(localNotification);
      });
    }

    if (!this.removeOnNotificationDisplayed) {
      this.removeOnNotificationDisplayed =
        firebase.notifications().onNotificationDisplayed((notification: Notification) => {
          console.log('...PUSH onNotificationDisplayed'); // отображение пуша в приложении
          const {title, body} = notification;
          DropdownAlertService.alert('info', title, body, undefined, 15000);
        });
    }
  }

  static removeListeners(): void {
    if (typeof this.removeOnNotification === 'function') {
      this.removeOnNotification();
      this.removeOnNotification = null;
    }
    if (typeof this.removeOnNotificationDisplayed === 'function') {
      this.removeOnNotificationDisplayed();
      this.removeOnNotificationDisplayed = null;
    }
  }
}
