import { StyleSheet } from 'react-native';
import constants from 'assets/styles/constants';

export default styles = StyleSheet.create({
  container: {},
  orderContainer: {
    borderBottomWidth: constants.border.width,
    borderBottomColor: constants.border.color,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'beige',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  orderCards: {
    marginBottom: 15,
  },
  cardContainer: {
    paddingHorizontal: 15,
    marginTop: 15,
  },
  cardRow: {
    flexDirection: 'row',
  },
  cardImage: {
    width: '30%',
    minHeight: 70,
    borderRadius: 5,
  },
  cardInfo: {
    width: '70%',
  },
  cardHeader: {
    flexDirection: 'row',
  },
  cardTitle: {
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 16,
  },
  cardNominal: {
    marginLeft: 10,
    fontWeight: 'bold',
    color: '#999',
    fontSize: 18,
  },
  cardQty: {
    marginLeft: 10,
    lineHeight: 18,
    textAlign: 'right',
    color: '#999',
  },
});