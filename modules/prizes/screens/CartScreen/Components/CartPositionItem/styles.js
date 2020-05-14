import { StyleSheet } from 'react-native';
import constants from 'assets/styles/constants';

export default styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 5,
    borderBottomWidth: constants.border.width,
    borderBottomColor: constants.border.color,
  },
  imageBox: {
    width: '28%',
  },
  image: {
    width: '100%',
    minHeight: 75,
  },
  info: {
    width: '72%',
    paddingLeft: 12,
  },
  header: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  nominal: {
    marginLeft: 5,
    color: '#999',
  },
  remove: {
    marginTop: -6,
    padding: 6,
    paddingBottom: 0,
    fontSize: 24,
    color: 'maroon',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  columnRight: {
    alignItems: 'flex-end',
  },
  label: {
    color: '#999',
  },
  controls: {
    flexDirection: 'row',
  },
  qty: {
    padding: 6,
    paddingBottom: 0,
    fontSize: 14,
  },
  minusPlus: {
    paddingHorizontal: 8,
    paddingTop: 4,
    fontSize: 24,
    color: '#999',
  },
  summary: {
    marginTop: 6,
    fontSize: 14,
  },
});