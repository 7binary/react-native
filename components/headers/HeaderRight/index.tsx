import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import constants from 'assets/styles/constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import { userLogout } from 'modules/auth/store/actions';
import { unsetUser } from 'modules/profile/store/actions';

const HeaderRight = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const logout = () => {
    dispatch(userLogout());
    dispatch(unsetUser());
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Ionicons name='ios-cog' style={{...constants.headerIcon}}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={logout}>
        <Ionicons name='ios-log-out' style={{...constants.headerIcon}}/>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderRight;