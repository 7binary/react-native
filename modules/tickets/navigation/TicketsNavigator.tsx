import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TicketsScreen from '../screens/TicketsScreen';
import TicketScreen from '../screens/TicketScreen';

import HeaderOptions from 'components/headers/HeaderOptions';
import HeaderPopupOptions from 'components/headers/HeaderPopupOptions';

const Stack = createStackNavigator();

const TicketsNavigator = () => (
  <Stack.Navigator initialRouteName="Tickets" screenOptions={{headerTitleAlign: 'center'}}>
    <Stack.Screen
      name="Tickets"
      component={TicketsScreen}
      options={HeaderOptions}
    />
    <Stack.Screen
      name="Ticket"
      component={TicketScreen}
      options={{title: 'Обращение', ...HeaderPopupOptions}}
      initialParams={{ticket: null}}
    />
  </Stack.Navigator>
);

export default TicketsNavigator;
