import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import DashboardScreen from '../screens/DashboardScreen';
import PassportScreen from '../screens/PassportScreen';
import BalanceScreen from '../screens/BalanceScreen';
import ProfileScreen from '../screens/ProfileScreen';

import constants from 'assets/styles/constants';
import HeaderOptions from 'components/headers/HeaderOptions';
import HeaderPopupOptions from 'components/headers/HeaderPopupOptions';

const Tab = createMaterialTopTabNavigator();

const DashboardTabs = () => (
  <Tab.Navigator initialRouteName="Dashboard" tabBarOptions={constants.tabs}>
    <Tab.Screen
      name="Passport"
      component={PassportScreen}
      options={{tabBarLabel: 'Паспорт'}}
    />
    <Tab.Screen
      name="Dashboard"
      component={DashboardScreen}
      options={{tabBarLabel: 'Профиль'}}
    />
    <Tab.Screen
      name="Balance"
      component={BalanceScreen}
      options={{tabBarLabel: 'Баланс'}}
    />
  </Tab.Navigator>
);

const Stack = createStackNavigator();

const DashboardNavigator = () => (
  <Stack.Navigator initialRouteName="DashboardTabs" screenOptions={{headerTitleAlign: 'center'}}>
    <Stack.Screen
      name="DashboardTabs"
      component={DashboardTabs}
      options={HeaderOptions}
    />
    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{title: 'Профиль', ...HeaderPopupOptions}}
    />
  </Stack.Navigator>
);

export default DashboardNavigator;
