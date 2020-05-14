import React from 'react';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';

export interface IProps {
  phone: string | null | undefined,
  onReset: Function,
}

const ResetPhone: React.FC<IProps> = ({phone, onReset}) => {
  if (!phone) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text>{phone}</Text>
      <Ionicons style={styles.icon} name='ios-backspace' size={26} color='#444' onPress={() => onReset()}/>
    </View>
  );
};

export default ResetPhone;
