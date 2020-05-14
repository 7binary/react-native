import React, { useEffect } from 'react';
import { Text, SafeAreaView, View, FlatList, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import HTMLView from 'react-native-htmlview';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import mainStyles from 'assets/styles/mainStyles';
import StatusBarDark from 'components/StatusBarDark';
import { RootState } from 'store/rootReducer';
import { Ticket } from 'modules/tickets/store/types';
import { getTickets } from 'modules/tickets/store/actions';
import stylesHtml from 'assets/styles/stylesHtml';

const TicketItem: React.FC<{ticket: Ticket}> = ({ticket}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Ticket', {ticket})}>
      <View style={styles.itemTitleBox}>
        <Ionicons name="ios-chatboxes" style={styles.itemTitleIcon}/>
        <Text style={styles.itemTitle}>{ticket.title}</Text>
      </View>
      <View style={styles.itemBody}>
        {ticket.lastMessage &&
        <HTMLView value={ticket.lastMessage.message} stylesheet={stylesHtml} addLineBreaks={false}/>}
      </View>
      <View style={styles.itemCreatedBox}>
        {ticket.lastMessage && <Text style={styles.itemCreatedAt}>{ticket.lastMessage.created}</Text>}
      </View>
    </TouchableOpacity>
  );
};

const TicketsScreen = () => {
  const tickets = useSelector((state: RootState) => state.tickets.tickets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTickets());
  }, []);

  return (
    <SafeAreaView style={{...mainStyles.screen, ...styles.container}}>
      <StatusBarDark/>

      <View>
        <FlatList
          data={tickets}
          renderItem={({item}) => <TicketItem ticket={item}/>}
          keyExtractor={(ticket) => `ticket-${ticket.id}`}
        />
      </View>

    </SafeAreaView>
  );
};

export default TicketsScreen;
