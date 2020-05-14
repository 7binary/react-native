import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/core';
import { Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import { changeCartQty } from 'modules/prizes/store/actions';
import { CartPositon } from 'modules/prizes/store/types';

const CartPositionItem: React.FC<{cartPosition: CartPositon}> = ({cartPosition}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Card', {card: cartPosition.card})}
        style={styles.imageBox}
      >
        <FastImage
          source={{uri: cartPosition.card.image}}
          style={styles.image}
          resizeMode={FastImage.resizeMode.contain}
        />
      </TouchableOpacity>

      <View style={styles.info}>
        <View style={styles.row}>
          <View style={styles.row}>
            <Text style={styles.title}>{cartPosition.card.title}</Text>
            <Text style={styles.nominal}>{cartPosition.nominal}</Text>
          </View>
          <TouchableOpacity onPress={() => dispatch(changeCartQty(cartPosition, -cartPosition.qty))}>
            <Ionicons name="ios-close" style={styles.remove}/>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <View>
            <Text style={styles.label}>Количество</Text>
            <View style={styles.controls}>
              <TouchableOpacity onPress={() => dispatch(changeCartQty(cartPosition, -1))}>
                <Ionicons name="ios-remove" style={styles.minusPlus}/>
              </TouchableOpacity>
              <Text style={styles.qty}>{cartPosition.qty}</Text>
              <TouchableOpacity onPress={() => dispatch(changeCartQty(cartPosition, 1))}>
                <Ionicons name="ios-add" style={styles.minusPlus}/>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.columnRight}>
            <Text style={styles.label}>Итого</Text>
            <Text style={styles.summary}>{cartPosition.qty * cartPosition.nominal}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartPositionItem;