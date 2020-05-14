import React from 'react';
import { useSelector } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';

import { RootState } from 'store/rootReducer';
import constants from 'assets/styles/constants';

import AuthNavigator from 'modules/auth/navigation/AuthNavigator';
import ProfileNavigator from 'modules/profile/navigation/ProfileNavigator';
import SettingsScreen from 'modules/profile/screens/SettingsScreen';
import CornerTransition from 'components/transitions/CornerTransition';
import NotificationsScreen from 'modules/mobile/screens/NotificationsScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const profile_id = useSelector((state: RootState) => state.auth.profile_id);

  return (
    <Stack.Navigator>
      {profile_id ? (
        <>
          <Stack.Screen name="ProfileNav" component={ProfileNavigator} options={{headerShown: false}}/>
          <Stack.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              title: 'Настройки',
              headerBackTitle: ' ',
              headerTintColor: constants.header.color,
              headerStyle: {
                backgroundColor: constants.header.backgroundColor,
              },
            }}
          />
          <Stack.Screen
            name="Notifications"
            component={NotificationsScreen}
            options={{
              title: 'Уведомления',
              headerBackTitle: ' ',
              headerTintColor: constants.header.color,
              headerStyle: {
                backgroundColor: constants.header.backgroundColor,
              },
              ...CornerTransition,
            }}
          />
        </>
      ) : (
        <Stack.Screen name="AuthNav" component={AuthNavigator} options={{headerShown: false}}/>
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;
