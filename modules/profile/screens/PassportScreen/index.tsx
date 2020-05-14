import React from 'react';
import { Text, SafeAreaView, View } from 'react-native';

import styles from './styles';
import mainStyles from 'assets/styles/mainStyles';
import StatusBarDark from 'components/StatusBarDark';
import PassportForm from './components/PassportForm';

const PassportScreen = () => {
  return (
    <View style={{...mainStyles.screen}}>
      <StatusBarDark/>
      <PassportForm/>
    </View>
  );
};

export default PassportScreen;
