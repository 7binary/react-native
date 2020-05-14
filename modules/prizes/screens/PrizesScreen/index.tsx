import React, { useEffect } from 'react';
import { View, SafeAreaView, ScrollView, TouchableOpacity, Text, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';

import styles from './styles';
import mainStyles from 'assets/styles/mainStyles';
import StatusBarDark from 'components/StatusBarDark';
import { RootState } from 'store/rootReducer';
import { getCatalogCards, getPaymentSettings } from 'modules/prizes/store/actions';
import TextHeader from 'components/TextHeader';
import { CatalogCard } from 'modules/prizes/store/types';

const CardItem: React.FC<{item: CatalogCard}> = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('Card', {card: item})}>
      <FastImage
        source={{uri: item.image}}
        style={styles.cardImage}
        resizeMode={FastImage.resizeMode.cover}>
      </FastImage>
    </TouchableOpacity>
  );
};

const PrizesScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.profile.user);
  const paymentSettings = useSelector((state: RootState) => state.prizes.paymentSettings);
  const cards = useSelector((state: RootState) => state.prizes.catalogCards);

  useEffect(() => {
    dispatch(getCatalogCards());
    dispatch(getPaymentSettings());
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
        <TextHeader>Сертификаты</TextHeader>
        <View style={styles.cards}>
          {cards.map((card: CatalogCard) => <CardItem item={card} key={card.id}/>)}
        </View>
      </View>
      </ScrollView>

    </SafeAreaView>
  );
};

export default PrizesScreen;
