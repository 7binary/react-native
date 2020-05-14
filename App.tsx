import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

import configureStore from './store/configureStore';
import AppNavigator from './navigation/AppNavigator';
import constants from 'assets/styles/constants';
import DropdownAlertCustom from 'components/DropdownAlertCustom';
import StatusBarLight from './components/StatusBarLight';

Ionicons.loadFont();

const {store, persistor} = configureStore();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...constants.colors,
  },
};

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={theme}>
          <StatusBarLight/>
          <NavigationContainer>
            <AppNavigator/>
          </NavigationContainer>
          <DropdownAlertCustom/>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
};


