import { StyleSheet } from 'react-native';

import constants from 'assets/styles/constants';

export default styles = StyleSheet.create({
  container: {
    padding: 0,
  },
  item: {
    padding: 20,
    paddingBottom: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#DDD',
  },
  itemTitleBox: {
    flexDirection: 'row',
  },
  itemTitleIcon: {
    marginTop: -2,
    fontSize: 24,
    marginRight: 10,
    color: constants.colors.accent,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemCreatedBox: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  itemCreatedAt: {
    fontSize: 12,
    color: 'gray',
  },
  itemBody: {
    marginTop: 5,
    marginBottom: 10,
  },
});