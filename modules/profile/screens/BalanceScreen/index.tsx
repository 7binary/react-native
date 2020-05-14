import React, { useEffect } from 'react';
import { Text, SafeAreaView, ScrollView, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import mainStyles from 'assets/styles/mainStyles';
import StatusBarDark from 'components/StatusBarDark';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/rootReducer';
import { getTransactions } from 'modules/profile/store/actions';
import { Transaction } from 'modules/profile/store/types';
import TextHeader from 'components/TextHeader';

const TransactionItem: React.FC<{item: Transaction}> = ({item}) => (
  <View style={styles.transaction}>
    <View style={styles.transactionColumn}>
      <Text style={item.amount > 0 ? styles.transactionIn : styles.transactionOut}>
        {item.amount > 0 ? '+' : item.amount ? '-' : ''}{item.amount}
      </Text>
      <Text style={styles.transactionCreated}>{item.created_at}</Text>
    </View>
    <Text style={styles.transactionTitle}>{item.title}</Text>
  </View>
);

const BalanceScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.profile.user);
  const transactions = useSelector((state: RootState) => state.profile.transactions);

  useEffect(() => {
    dispatch(getTransactions());
  }, []);

  return (
    <SafeAreaView style={{...mainStyles.screen, ...styles.container}}>
      <StatusBarDark/>
      <ScrollView>
      <View style={styles.balanceContainer}>
        <Ionicons name='md-wallet' style={styles.balanceIcon}/>
        <Text style={styles.balanceBonuses}>{user && user.balance}</Text>
        <Text>баллов</Text>
      </View>

      <View>
        <TextHeader>Движение баллов</TextHeader>
        {transactions.map((item) => <TransactionItem item={item} key={`t-${item.id}`}/>)}
      </View>
      </ScrollView>

    </SafeAreaView>
  );
};

export default BalanceScreen;
