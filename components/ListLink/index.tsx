import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

interface IProps {
  navigate?: string;
  iconName?: string;
  title?: string|number|null|undefined;
  context?: string|number|null|undefined;
  subtitle?: string|number|null|undefined;
}

const ListLink: React.FC<IProps> = ({navigate, iconName, title, context, subtitle}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.box} onPress={() => navigate && navigation.navigate(navigate)}>
      <View style={styles.boxColumn}>
        {iconName && <Ionicons name={iconName} style={styles.boxIcon}/>}
        {title && <Text style={styles.boxTitle}>{title}</Text>}
      </View>
      <View style={styles.boxColumn}>
        {context && <Text style={styles.boxContext}>{context}</Text>}
        {subtitle && <Text>{subtitle}</Text>}
        <Ionicons name='ios-arrow-forward' style={styles.boxForward}/>
      </View>
    </TouchableOpacity>
  );
};

export default ListLink;