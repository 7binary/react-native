import { StyleSheet } from 'react-native';

import constants from 'assets/styles/constants';

export default styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: constants.colors.accent,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
});