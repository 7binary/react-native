import React from 'react';
import { SafeAreaView, View, ScrollView, Text } from 'react-native';
import { useSelector } from 'react-redux';

import styles from './styles';
import mainStyles from 'assets/styles/mainStyles';
import StatusBarDark from 'components/StatusBarDark';
import { RootState } from 'store/rootReducer';
import CartPositionItem from './Components/CartPositionItem';
import CartOrderForm from './Components/CartOrderForm';

const CartScreen = () => {
  const user = useSelector((state: RootState) => state.profile.user);
  const cart = useSelector((state: RootState) => state.prizes.cart);
  const showCart = cart.length > 0;
  if (!user) {
    return null;
  }

  return (
    <SafeAreaView style={{...mainStyles.screen, ...styles.container}}>
      <StatusBarDark/>
      <ScrollView>
        <View style={styles.positions}>
          {cart.positions.map((item) =>
            <CartPositionItem cartPosition={item} key={`${item.card.type}-${item.nominal}`}/>,
          )}
        </View>

        <View style={styles.totalContainer}>
          <View>
            <Text style={styles.totalLabel}>Мой баланс</Text>
            <Text style={styles.totalValue}>{user && user.balance}</Text>
          </View>
          <View>
            <Text style={styles.totalLabel}>{showCart ? 'Общая сумма' : 'Корзина пуста'}</Text>
            <Text style={styles.totalValue}>{showCart ? cart.summary : 'Добавьте сертификат'}</Text>
          </View>
        </View>

        {showCart && <CartOrderForm/>}

      </ScrollView>
    </SafeAreaView>
  );
};

export default CartScreen;
