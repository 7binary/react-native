import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';

import styles from './styles';
import mainStyles from 'assets/styles/mainStyles';
import LoginForm from './components/LoginForm';
import constants from 'assets/styles/constants';
import StatusBarLight from 'components/StatusBarLight';

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{...mainStyles.screen, ...styles.container}}>
      <StatusBarLight/>
      <Text style={styles.title}>Вход в программу</Text>
      <LoginForm/>
      <View style={styles.buttonsContainer}>
        <Button onPress={() => navigation.navigate('Register')}>
          Зарегистрироваться
        </Button>
        <Button onPress={() => navigation.navigate('RemindPassword')} color={constants.colors.accent}>
          Забыли пароль?
        </Button>
      </View>
    </View>
  );
};

export default LoginScreen;
