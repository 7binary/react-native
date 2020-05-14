import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { Field, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { RootState } from 'store/rootReducer';
import axl from 'utils/axl';
import ErrorMessage from 'components/form/ErrorMessage';
import constants from 'assets/styles/constants';
import validationSchema from './validationSchema';
import FormInput from 'components/form/FormInput';
import { CartPositon } from 'modules/prizes/store/types';
import { getProfile } from 'modules/profile/store/actions';
import { resetCart, getCatalogOrders } from 'modules/prizes/store/actions';
import DropdownAlertService from 'services/DropdownAlertService';

const CartOrderForm = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const profile_id = useSelector((state: RootState) => state.auth.profile_id);
  const user = useSelector((state: RootState) => state.profile.user);
  const cart = useSelector((state: RootState) => state.prizes.cart);
  if (!user) {
    return null;
  }

  return (
    <Formik
      initialValues={{delivery_email: user.email}}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        const items = cart.positions.map((pos: CartPositon) => ({
          card: pos.card.type,
          nominal: pos.nominal,
          qty: pos.qty,
        }));
        const payload: any = {
          ...values,
          profile_id,
          items,
          is_allow_cancel: false,
        };
        axl(actions).post('catalog/api-v4/orders/create', payload)
          .then(() => {
            dispatch(getProfile());
            dispatch(getCatalogOrders());
            dispatch(resetCart());
            DropdownAlertService.alert('success',
              'В течение 5 дней сертификаты придут на указанную почту');
            navigation.navigate('Orders');
          }).catch(() => {});
      }}>
      {({handleSubmit, isValid, isSubmitting, status}) => (
        <View style={{paddingHorizontal: 20}}>
          <Field
            component={FormInput}
            name="delivery_email"
            label="E-mail адрес доставки"
            iconName="ios-mail"
          />
          <ErrorMessage dot>{status}</ErrorMessage>
          <View>
            <Button
              mode="contained"
              onPress={handleSubmit}
              disabled={!isValid || isSubmitting}
              loading={isSubmitting}
              color={constants.buttonColor}
            >
              Заказать
            </Button>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default CartOrderForm;