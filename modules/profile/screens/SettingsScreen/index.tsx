import React from 'react';
import { Text, SafeAreaView } from 'react-native';

import styles from './styles';
import mainStyles from 'assets/styles/mainStyles';
import StatusBarDark from 'components/StatusBarDark';

const SettingsScreen = () => {
  return (
    <SafeAreaView style={{...mainStyles.screen, ...styles.container}}>
      <StatusBarDark/>
      <Text>SettingsScreen</Text>
    </SafeAreaView>
  );
};

export default SettingsScreen;
