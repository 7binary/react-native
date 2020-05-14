import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Button, List, TextInput } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { useRoute, useNavigation } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import HTMLView from 'react-native-htmlview';

import styles from './styles';
import stylesHtml from 'assets/styles/stylesHtml';
import mainStyles from 'assets/styles/mainStyles';
import StatusBarDark from 'components/StatusBarDark';
import { CartPositon, CatalogCard } from 'modules/prizes/store/types';
import constants from 'assets/styles/constants';
import DropdownAlertService from 'services/DropdownAlertService';
import { addToCart } from 'modules/prizes/store/actions';

const Nominal = ({nominal, selectedNominal, onChange}: any) => {
  return (
    <Button
      mode={nominal === selectedNominal ? 'contained' : 'outlined'}
      onPress={() => onChange(nominal)}
      style={styles.nominal}
    >
      {nominal}
    </Button>
  );
};

const CardScreen = () => {
  const route = useRoute();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [selectedNonimal, setSelectedNominal] = useState<number>(0);
  const [qty, setQty] = useState<string>('');
  // @ts-ignore
  const {card}: CatalogCard = route.params;
  if (!card) {
    return null;
  }

  const addToCartPressed = () => {
    const quantity = parseInt(qty);
    if (!selectedNonimal) {
      DropdownAlertService.alert('warn', 'Выберите номинал карты');
    } else if (!quantity || quantity < 0) {
      DropdownAlertService.alert('warn', 'Укажите количество карт');
    } else {
      const payload: CartPositon = {
        card: card,
        nominal: selectedNonimal,
        qty: quantity,
      };
      dispatch(addToCart(payload));
      setSelectedNominal(0);
      setQty('');
      navigation.navigate('Cart');
      DropdownAlertService.alert('success', 'Добавлено в корзину');
    }
  };

  return (
    <SafeAreaView style={{...mainStyles.screen, ...styles.container}}>
      <StatusBarDark/>
      <ScrollView keyboardShouldPersistTaps="always">
        <View style={styles.card}>
          <FastImage
            source={{uri: card.image}}
            style={styles.cardImage}
            resizeMode={FastImage.resizeMode.contain}>
          </FastImage>
        </View>

        <List.Accordion title={card.name} titleNumberOfLines={2} titleStyle={styles.title}>
          <View style={styles.description}>
            <HTMLView value={card.description} addLineBreaks={false} stylesheet={stylesHtml}/>
          </View>
        </List.Accordion>

        <View style={styles.nominalsContainer}>
          {card.nominals.map((nominal: number) =>
            <Nominal
              key={nominal}
              nominal={nominal}
              selectedNominal={selectedNonimal}
              onChange={setSelectedNominal}
            />,
          )}
        </View>

        <View style={styles.qtyContainer}>
          <TextInput
            keyboardType="numeric"
            style={styles.qtyInput}
            mode="flat"
            label="Количество карт"
            value={qty}
            onChangeText={(value) => setQty(value)}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            onPress={addToCartPressed}
            style={styles.button}
            color={constants.buttonColor}
          >
            В КОРЗИНУ
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CardScreen;
