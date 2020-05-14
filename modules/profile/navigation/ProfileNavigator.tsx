import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TicketsNavigator from 'modules/tickets/navigation/TicketsNavigator';
import DashboardNavigator from './DashboardNavigator';
import PrizesNavigator from 'modules/prizes/navigation/PrizesNavigator';
import constants from 'assets/styles/constants';

const Tab = createBottomTabNavigator();

const ProfileNavigator = () => (
  <Tab.Navigator
    initialRouteName="DashboardNav"
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color}) => {
        switch (route.name) {
          case 'DashboardNav':
            return <Ionicons name={'ios-home'} size={constants.tabbar.iconSize} color={color}/>;
          case 'PrizesNav':
            return <Ionicons name={'ios-gift'} size={constants.tabbar.iconSize} color={color}/>;
          case 'TicketsNav':
            return <Ionicons name={'ios-chatboxes'} size={constants.tabbar.iconSize} color={color}/>;
          default:
            return null;
        }
      },
    })}
    tabBarOptions={{...constants.tabbar}}
  >
    <Tab.Screen
      name="TicketsNav"
      component={TicketsNavigator}
      options={{tabBarLabel: 'Обращения'}}
    />
    <Tab.Screen
      name="PrizesNav"
      component={PrizesNavigator}
      options={{tabBarLabel: 'Призы'}}
    />
    <Tab.Screen
      name="DashboardNav"
      component={DashboardNavigator}
      options={{tabBarLabel: 'Главная'}}
    />
  </Tab.Navigator>
);

export default ProfileNavigator;

