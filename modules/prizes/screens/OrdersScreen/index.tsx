import React, { useEffect } from 'react';
import { Text, SafeAreaView, View, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import FastImage from 'react-native-fast-image';

import { RootState } from 'store/rootReducer';
import styles from './styles';
import mainStyles from 'assets/styles/mainStyles';
import StatusBarDark from 'components/StatusBarDark';
import { getCatalogOrders } from 'modules/prizes/store/actions';
import { CatalogOrder, OrderedCard } from 'modules/prizes/store/types';

const OrderedCardItem: React.FC<{orderedCard: OrderedCard}> = ({orderedCard}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardRow}>
        <FastImage
          source={{uri: orderedCard.image}}
          style={styles.cardImage}
          resizeMode={FastImage.resizeMode.cover}/>

        <View style={styles.cardInfo}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>{orderedCard.card_title}</Text>
            <Text style={styles.cardQty}>x {orderedCard.qty}</Text>
          </View>
          <View>
            <Text style={styles.cardNominal}>{orderedCard.nominal}</Text>
          </View>
        </View>

      </View>
    </View>
  );
};

const CatalogOrderItem: React.FC<{catalogOrder: CatalogOrder}> = ({catalogOrder}) => {
  return (
    <View style={styles.orderContainer}>
      <View style={styles.orderHeader}>
        <Text>Заказ №{catalogOrder.ms_order_id}</Text>
        <Text>{catalogOrder.amount}</Text>
        <Text>{catalogOrder.created_at}</Text>
      </View>
      <View style={styles.orderCards}>
        {catalogOrder.items.map((orderedCard: OrderedCard) => (
          <OrderedCardItem orderedCard={orderedCard} key={`oc-${orderedCard.ms_card_id}`}/>
        ))}
      </View>
    </View>
  );
};

const OrdersScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCatalogOrders());
  }, []);

  const catalogOrders = useSelector((state: RootState) => state.prizes.catalogOrders);

  return (
    <SafeAreaView style={{...mainStyles.screen, ...styles.container}}>
      <StatusBarDark/>
      <FlatList
        data={catalogOrders}
        renderItem={({item}) => <CatalogOrderItem catalogOrder={item}/>}
        keyExtractor={(item) => `order-${item.ms_order_id}`}
      />
    </SafeAreaView>
  );
};

export default OrdersScreen;
