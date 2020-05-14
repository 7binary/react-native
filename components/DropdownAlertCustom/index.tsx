import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import DropdownAlert from 'react-native-dropdownalert';
import DropdownAlertService from 'services/DropdownAlertService';
import constants from 'assets/styles/constants';
import styles from './styles';

export default function DropdownAlertCustom() {
  return (
    <DropdownAlert
      ref={(ref: DropdownAlert) => DropdownAlertService.set(ref)}
      closeInterval={2500}
      inactiveStatusBarStyle={'light-content'}
      inactiveStatusBarBackgroundColor={constants.header.backgroundColor}
      infoColor="steelblue"
      successColor="teal"
      renderImage={(props, state) => {
        switch (state.type) {
          case 'success':
            return <Ionicons name="ios-checkmark" style={styles.leftIcon}/>;
          case 'info':
            return <Ionicons name="ios-information-circle-outline" style={styles.leftIcon}/>;
          default:
            return <Ionicons name="ios-warning" style={styles.leftIcon}/>;
        }
      }}
      renderCancel={() => {
        return <Ionicons name="ios-close" style={styles.closeIcon}/>;
      }}
      showCancel={true}
      titleNumOfLines={2}
      messageNumOfLines={0}
    />
  )
}
