import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import PrizesScreen from '../screens/PrizesScreen';
import OrdersScreen from '../screens/OrdersScreen';
import CartScreen from '../screens/CartScreen';
import CardScreen from 'modules/prizes/screens/CardScreen';

import constants from 'assets/styles/constants';
import HeaderOptions from 'components/headers/HeaderOptions';
import HeaderPopupOptions from 'components/headers/HeaderPopupOptions';

const Tab = createMaterialTopTabNavigator();

const PrizesTabs = () => (
  <Tab.Navigator initialRouteName="Prizes" tabBarOptions={constants.tabs}>
    <Tab.Screen
      name="Cart"
      component={CartScreen}
      options={{tabBarLabel: 'Корзина'}}
    />
    <Tab.Screen
      name="Prizes"
      component={PrizesScreen}
      options={{tabBarLabel: 'Витрина'}}
    />
    <Tab.Screen
      name="Orders"
      component={OrdersScreen}
      options={{tabBarLabel: 'Заказы'}}
    />
  </Tab.Navigator>
);

const Stack = createStackNavigator();

const PrizesNavigator = () => (
  <Stack.Navigator initialRouteName="PrizesTabs" screenOptions={{headerTitleAlign: 'center'}}>
    <Stack.Screen
      name="PrizesTabs"
      component={PrizesTabs}
      options={HeaderOptions}
    />
    <Stack.Screen
      name="Card"
      component={CardScreen}
      options={{title: 'Электронный сертификат', ...HeaderPopupOptions}}
      initialParams={{card: null}}
    />
  </Stack.Navigator>
);

export default PrizesNavigator;
