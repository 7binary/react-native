import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import RemindPasswordScreen from '../screens/RemindPasswordScreen';
import LoginHeader from '../screens/LoginScreen/components/LoginHeader';
import HeaderPopupLightOptions from 'components/headers/HeaderPopupLightOptions';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{headerTitleAlign: 'center'}}>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerTitle: () => <LoginHeader/>,
        }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{title: 'Регистрация', ...HeaderPopupLightOptions}}
      />
      <Stack.Screen
        name="RemindPassword"
        component={RemindPasswordScreen}
        options={{title: 'Восстановление пароля', ...HeaderPopupLightOptions}}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;