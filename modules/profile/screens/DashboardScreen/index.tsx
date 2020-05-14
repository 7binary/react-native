import React, { useEffect } from 'react';
import { SafeAreaView, View, TouchableOpacity, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import mainStyles from 'assets/styles/mainStyles';
import StatusBarDark from 'components/StatusBarDark';
import { getProfile } from 'modules/profile/store/actions';
import { getNotifications, registerFirebaseDevice } from 'modules/mobile/store/actions';
import { RootState } from 'store/rootReducer';
import FirebaseService from 'modules/mobile/services/FirebaseService';
import ListLink from 'components/ListLink';

const DashboardScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.profile.user);

  useEffect(() => {
    dispatch(getProfile());
    dispatch(getNotifications());
    dispatch(registerFirebaseDevice());
    FirebaseService.registerListeners();
  }, []);

  return (
    <SafeAreaView style={{...mainStyles.screen, ...styles.container}}>
      <StatusBarDark/>

      <ListLink
        navigate="Profile"
        iconName="ios-contact"
        title={user && user.full_name}
        subtitle="мои данные"
      />
      <ListLink
        navigate="Balance"
        iconName="md-wallet"
        title="Баланс"
        context={user && user.balance}
        subtitle="баллов"
      />
      <ListLink navigate="PrizesNav" iconName="ios-gift" title="Витрина призов"/>
      <ListLink iconName="ios-school" title="Обучение"/>

    </SafeAreaView>
  );
};

export default DashboardScreen;
