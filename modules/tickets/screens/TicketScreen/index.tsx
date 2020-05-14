import React, { useEffect } from 'react';
import { Text, SafeAreaView, View, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import HTMLView from 'react-native-htmlview';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import mainStyles from 'assets/styles/mainStyles';
import StatusBarDark from 'components/StatusBarDark';
import { Ticket } from 'modules/tickets/store/types';

const TicketsScreen = () => {
  const dispatch = useDispatch();
  const route = useRoute();
  const {ticket}: Ticket|any = route.params;
  if (!ticket) {
    return null;
  }

  return (
    <SafeAreaView style={{...mainStyles.screen, ...styles.container}}>
      <StatusBarDark/>
      <Text>{ticket.title}</Text>
    </SafeAreaView>
  );
};

export default TicketsScreen;
