import React from 'react';
import { StatusBar } from 'react-native';

import constants from 'assets/styles/constants';

const StatusBarDark = () => (
  <StatusBar barStyle="light-content" backgroundColor={constants.header.backgroundColor} />
);

export default React.memo(StatusBarDark);