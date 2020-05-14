import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

const TextHeader: React.FC<any> = (props) => (
  <View style={styles.container}>
    <Text style={styles.text}>{props.children}</Text>
  </View>
);

export default TextHeader;