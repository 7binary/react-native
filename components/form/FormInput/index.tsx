import React from 'react';
import { TextInput } from 'react-native-paper';
import { View } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconFA from 'react-native-vector-icons/FontAwesome';
import ErrorMessage from '../ErrorMessage';
import constants from 'assets/styles/constants';

export interface IProps {
  field: {name: string, value: string, onChange: Function, onBlur: Function};
  form: {errors: {[s: string]: string}, touched: {[s: string]: string}};
  iconName?: string;
  iconColor?: string;
  iconSize?: number;
  phone?: boolean;
  mask?: string;
  dense?: boolean;
  props?: any;
}

const FormInput: React.FC<IProps> = ({
  field: {name, value, onChange, onBlur},
  form: {errors, touched},
  iconName,
  iconColor,
  iconSize,
  phone,
  mask,
  dense = true,
  ...props
}) => {
  iconColor = iconColor || constants.iconColor;
  iconSize = iconSize || 28;
  let LeftIcon = null;
  if (typeof iconName === 'string') {
    LeftIcon = iconName.includes('ios-') || iconName.includes('md-')
      ? <Ionicons name={iconName} size={iconSize} color={iconColor} style={styles.icon}/>
      : <IconFA name={iconName} size={iconSize} color={iconColor} style={styles.icon}/>;
  }
  const errorMsg = errors[name] && touched[name] ? errors[name] : null;
  const inputStyle = styles.input;
  const paddingLeft = iconName ? 45 : 0;

  const extraProps: any = {};
  if (phone) {
    extraProps.render = (props: any) => (
      <TextInputMask {...props} type={'custom'} options={{mask: '+7 (999) 999-9999'}}/>
    );
    if (value.length === 0) {
      value = '+7';
    }
  } else if (mask) {
    extraProps.render = (props: any) => (
      <TextInputMask {...props} type={'custom'} options={{mask}}/>
    );
  }

  return (
    <View style={styles.box}>
      <View style={styles.container}>
        {LeftIcon}
        <TextInput
          {...props}
          value={value}
          onChangeText={onChange(name)}
          onBlur={onBlur(name)}
          style={{...inputStyle, paddingLeft}}
          dense={dense}
          textAlign={'center'}
          {...extraProps}
        />
      </View>
      <ErrorMessage>{errorMsg}</ErrorMessage>
    </View>
  );
};

export default FormInput;
