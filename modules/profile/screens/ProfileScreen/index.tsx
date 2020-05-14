import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import mainStyles from 'assets/styles/mainStyles';
import styles from './styles';
import ProfileForm from './components/ProfileForm';
import DropdownAlertService from 'services/DropdownAlertService';
import StatusBarDark from 'components/StatusBarDark';

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{...mainStyles.screen, ...styles.container}}>
      <StatusBarDark/>
      <ProfileForm onSuccess={() => {
        navigation.navigate('Dashboard');
        DropdownAlertService.alert('success', 'Ваш профиль обновлен!');
      }}/>
    </View>
  );
};

export default ProfileScreen;
