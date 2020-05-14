import { StyleSheet } from 'react-native';

import constants from 'assets/styles/constants';

export default styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: constants.border.width,
    borderBottomColor: constants.border.color,
    height: 70,
  },
  boxColumn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  boxIcon: {
    fontSize: 25,
    color: '#444',
    marginRight: 15,
  },
  boxTitle: {
    fontSize: 20,
  },
  boxContext: {
    fontWeight: 'bold',
    fontSize: 22,
    marginRight: 5,
  },
  boxForward: {
    fontSize: 20,
    color: '#BBB',
    marginLeft: 10,
  },
});