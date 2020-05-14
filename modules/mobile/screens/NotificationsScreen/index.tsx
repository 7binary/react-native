import React, { useEffect } from 'react';
import { Text, SafeAreaView, View, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import HTMLView from 'react-native-htmlview';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import mainStyles from 'assets/styles/mainStyles';
import StatusBarDark from 'components/StatusBarDark';
import { RootState } from 'store/rootReducer';
import { getNotifications } from 'modules/mobile/store/actions';
import { Notification } from 'modules/mobile/store/types';

const NotificationItem: React.FC<{item: Notification}> = ({item}) => (
  <View style={styles.item}>
    <View style={styles.itemTitleBox}>
      <Ionicons name="ios-notifications" style={styles.itemTitleIcon}/>
      <Text style={styles.itemTitle}>{item.title}</Text>
    </View>
    <View style={styles.itemBody}>
      <HTMLView value={item.body} addLineBreaks={false}/>
    </View>
    <View style={styles.itemCreatedBox}>
      <Text style={styles.itemCreatedAt}>{item.created_at}</Text>
    </View>
  </View>
);

const NotificationsScreen = () => {
  const notifications = useSelector((state: RootState) => state.mobile.notifications);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotifications());
  }, []);

  return (
    <SafeAreaView style={{...mainStyles.screen, ...styles.container}}>
      <StatusBarDark/>

      <View>
        <FlatList
          data={notifications}
          renderItem={({item}) => <NotificationItem item={item}/>}
          keyExtractor={(item) => `notification-${item.id}`}
        />
      </View>

    </SafeAreaView>
  );
};

export default NotificationsScreen;
