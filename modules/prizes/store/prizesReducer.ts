import {
  Cart,
  CatalogCard,
  CatalogOrder,
  Payment,
  PaymentSettings,
  PrizesActionTypes,
  PrizesState,
  SET_CART,
  SET_CATALOG_CARDS,
  SET_CATALOG_ORDERS,
  SET_PAYMENT_SETTINGS,
  SET_PAYMENTS,
} from './types';

const initialState: PrizesState = {
  paymentSettings: [],
  payments: [],
  catalogCards: [],
  catalogOrders: [],
  cart: {
    positions: [],
    length: 0,
    summary: 0,
  }
};

export default function prizesReducer(state = initialState, action: PrizesActionTypes): PrizesState {
  switch (action.type) {

    case SET_PAYMENT_SETTINGS: {
      const paymentSettings: PaymentSettings[] = action.payload;
      return {...state, paymentSettings};
    }

    case SET_PAYMENTS:
      const payments: Payment[] = action.payload;
      return {...state, payments};

    case SET_CATALOG_CARDS: {
      const catalogCards: CatalogCard[] = action.payload;
      return {...state, catalogCards};
    }

    case SET_CATALOG_ORDERS: {
      const catalogOrders: CatalogOrder[] = action.payload;
      return {...state, catalogOrders};
    }

    case SET_CART: {
      const cart: Cart = action.payload;
      calculateCart(cart);
      return {...state, cart};
    }
  }

  return state;
};

function calculateCart(cart: Cart): void {
  let cartLength = 0;
  let cartSummary = 0;

  for (let i = 0; i < cart.positions.length; i++) {
    cartLength += cart.positions[i].qty;
    cartSummary += cart.positions[i].qty * cart.positions[i].nominal;
  }

  cart.length = cartLength;
  cart.summary = cartSummary;
}
