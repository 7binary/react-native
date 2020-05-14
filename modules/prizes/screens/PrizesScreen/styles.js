import { StyleSheet, Dimensions } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  cards: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 5,
  },
  card: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    width: Dimensions.get('window').width / 2,
  },
  cardImage: {
    height: 120,
    borderWidth: 0.5,
    borderColor: '#DDD',
    borderRadius: 10,
  },
  balanceContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  balanceColumn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  balanceIcon: {
    fontSize: 30,
    marginRight: 15,
  },
  balanceLabel: {
    fontSize: 20,
  },
  balanceBonuses: {
    fontWeight: 'bold',
    fontSize: 24,
    marginRight: 5,
  },
  balanceForward: {
    fontSize: 20,
    color: '#AAA',
    marginLeft: 10,
  },
});