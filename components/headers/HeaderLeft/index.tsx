import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import constants from 'assets/styles/constants';
import BadgeIcon from 'components/BadgeIcon';
import { RootState } from 'store/rootReducer';

const HeaderLeft = () => {
  const navigation = useNavigation();
  const cart = useSelector((state: RootState) => state.prizes.cart);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
        <Ionicons name='ios-notifications-outline' style={{...constants.headerIcon}}/>
      </TouchableOpacity>

      {cart.length > 0 &&
      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <BadgeIcon
          name='ios-cart'
          style={{...constants.headerIcon}}
          badge={cart.length}
          badgeTheme="dark"
        />
      </TouchableOpacity>}
    </View>
  );
};

export default HeaderLeft;