import React from 'react';
import { StatusBar } from 'react-native';

const StatusBarLight = () => (
  <StatusBar barStyle="dark-content" backgroundColor="white" />
);

export default React.memo(StatusBarLight);