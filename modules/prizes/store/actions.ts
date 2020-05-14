import { Dispatch } from 'redux';

import ax from 'utils/ax';
import { RootState } from 'store/rootReducer';
import {
  CartPositon,
  Cart,
  CatalogCard,
  CatalogOrder,
  Payment,
  PaymentSettings,
  PrizesActionTypes,
  SET_CART,
  SET_CATALOG_CARDS,
  SET_CATALOG_ORDERS,
  SET_PAYMENT_SETTINGS,
  SET_PAYMENTS,
} from './types';

export function setPaymentSettings(payload: PaymentSettings[]): PrizesActionTypes {
  return {type: SET_PAYMENT_SETTINGS, payload};
}

export function setPayments(payload: Payment[]): PrizesActionTypes {
  return {type: SET_PAYMENTS, payload};
}

export function setCatalogCards(payload: CatalogCard[]): PrizesActionTypes {
  return {type: SET_CATALOG_CARDS, payload};
}

export function setCatalogOrders(payload: CatalogOrder[]): PrizesActionTypes {
  return {type: SET_CATALOG_ORDERS, payload};
}

export function setCart(payload: Cart): PrizesActionTypes {
  return {type: SET_CART, payload};
}

export function addToCart(payload: CartPositon) {
  return (dispatch: Dispatch<PrizesActionTypes>, getState: () => RootState): void => {
    const {card, nominal, qty} = payload;
    const cart: Cart = {...getState().prizes.cart};
    let hasPosition = false;
    for (let i = 0; i < cart.positions.length; i++) {
      if (cart.positions[i].card.type === card.type && cart.positions[i].nominal === nominal) {
        cart.positions[i].qty += qty;
        hasPosition = true;
        break;
      }
    }
    if (!hasPosition) {
      cart.positions.push(payload);
    }
    dispatch(setCart(cart));
  };
}

export function changeCartQty(payload: CartPositon, qty: number) {
  return (dispatch: Dispatch<PrizesActionTypes>, getState: () => RootState): void => {
    const {card, nominal} = payload;
    const cart: Cart = {...getState().prizes.cart};
    for (let i = 0; i < cart.positions.length; i++) {
      if (cart.positions[i].card.type === card.type && cart.positions[i].nominal === nominal) {
        cart.positions[i].qty += qty;
        if (cart.positions[i].qty <= 0) {
          cart.positions = cart.positions.filter((pos: CartPositon) =>
            pos.card.type !== cart.positions[i].card.type || pos.nominal !== cart.positions[i].nominal);
        }
        break;
      }
    }
    dispatch(setCart(cart));
  };
}

export function resetCart() {
  return (dispatch: Dispatch<PrizesActionTypes>): void => {
    const cart: Cart = {
      positions: [],
      length: 0,
      summary: 0,
    };
    dispatch(setCart(cart));
  };
}

export function getPaymentSettings() {
  return (dispatch: Dispatch<PrizesActionTypes>): void => {
    ax().post('payments/api-v4/settings/view')
      .then((response) => {
        dispatch(setPaymentSettings(response.data.settings));
      });
  };
}

export function getPayments() {
  return (dispatch: Dispatch<PrizesActionTypes>, getState: () => RootState): void => {
    const profile_id = getState().auth.profile_id;
    ax().post('payments/api-v4/payments/by-profile', {profile_id})
      .then((response) => {
        dispatch(setPayments(response.data.payments));
      });
  };
}

export function getCatalogCards() {
  return (dispatch: Dispatch<PrizesActionTypes>): void => {
    ax().post('/catalog/api-v4/cards/list')
      .then((response) => {
        dispatch(setCatalogCards(response.data.cards));
      });
  };
}

export function getCatalogOrders() {
  return (dispatch: Dispatch<PrizesActionTypes>, getState: () => RootState): void => {
    const profile_id = getState().auth.profile_id;
    ax().post('catalog/api-v4/users/orders', {profile_id})
      .then((response) => {
        dispatch(setCatalogOrders(response.data.orders));
      });
  };
}