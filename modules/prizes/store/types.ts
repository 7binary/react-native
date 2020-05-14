export const SET_PAYMENT_SETTINGS = 'SET_PAYMENT_SETTINGS';
export const SET_PAYMENTS = 'SET_PAYMENTS';
export const SET_CATALOG_CARDS = 'SET_CATALOG_CARDS';
export const SET_CATALOG_ORDERS = 'SET_CATALOG_ORDERS';
export const SET_CART = 'SET_CART';

type PaymentType = 'phone' | 'yandex' | 'qiwi' | 'webmoney' | 'card';
type PaymentStatus = 'waiting' | 'new' | 'processing' | 'success' | 'fail' | 'rollback';
type CatalogStatus = 'waiting' | 'new' | 'ordered' | 'partiallyReady' | 'ready'
  | 'rejected' | 'rollback' | 'userCancel';

export interface PaymentParameters {
  phone_mobile?: string;
  first_name?: string;
  last_name?: string;
}

export interface PaymentSettings {
  id: number;
  type: PaymentType;
  profile_commission: number;
  company_commission: number;
  position: number;
  enabled: boolean | number;
  title: string;
}

export interface Payment {
  ms_payment_id: number;
  profile_id: number;
  amount: number;
  type: PaymentType;
  type_label: string;
  status: PaymentStatus;
  status_label: string;
  parameters: PaymentParameters;
  created_at: string;
  updated_at: string;
}

export interface CatalogCard {
  id: number;
  type: string;
  id1c: string;
  title: string;
  name: string;
  nominals: number[];
  image: string;
  is_allow_to_order: number | boolean;
  is_plastic: number | boolean;
  description: string;
  order: null | number;
}

// ms_card_id: 96
// card: "Letoile"
// card_title: "Л'Этуаль"
// card_name: "Электронный подарочный сертификат Л'Этуаль"
// id1c: "МСК00004362; МСК00002632"
// nominal: 500
// qty: 1
// status: "ready"
// status_label: "Полностью выдан"
// image: "https://api-oos.msforyou.ru/media/cards/15.png"
export interface OrderedCard {
  ms_card_id: number;
  card: string;
  card_title: string;
  card_name: string;
  id1c: string;
  nominal: number;
  qty: number;
  status: CatalogStatus;
  status_label: string;
  image: string;
  cards: CardItem[];
}

// ms_card_id: 246
// created_at: "13.03.2020 15:50:20"
// nominal: 500
// type: "Letoile"
export interface CardItem {
  ms_card_id: number;
  card_data: any;
  created_at: string;
  nominal: number;
  type: string;
}

// ms_order_id: 79
// profile_id: 2394
// status: "ready"
// status_label: "Полностью выдан"
// amount: 1500
// delivery_email: "mory0000@gmail.com"
// delivery_phone_mobile: "+79049990000"
// delivery_address: null
// is_allow_cancel: 0
// is_canceled: 0
// can_be_canceled: false
// created_at: "07.03.2020"
// updated_at: "2020-03-07 18:40:02"
export interface CatalogOrder {
  ms_order_id: number;
  profile_id: number;
  status: CatalogStatus;
  status_label: string;
  amount: number;
  delivery_email: string;
  delivery_phone_mobile: string;
  delivery_address: null | string;
  is_allow_cancel: number | boolean;
  is_canceled: number | boolean;
  can_be_canceled: boolean;
  created_at: string;
  updated_at: string;
  items: OrderedCard[];
}

export interface Cart {
  positions: CartPositon[];
  length: number;
  summary: number;
}

export interface CartPositon {
  card: CatalogCard;
  nominal: number;
  qty: number;
}

interface SetCart {
  type: typeof SET_CART;
  payload: Cart;
}

interface SetPaymentSettings {
  type: typeof SET_PAYMENT_SETTINGS;
  payload: PaymentSettings[];
}

interface SetPayments {
  type: typeof SET_PAYMENTS;
  payload: Payment[];
}

interface SetCatalogCards {
  type: typeof SET_CATALOG_CARDS;
  payload: CatalogCard[];
}

interface SetCatalogOrders {
  type: typeof SET_CATALOG_ORDERS;
  payload: CatalogOrder[];
}

export interface PrizesState {
  paymentSettings: PaymentSettings[];
  payments: Payment[];
  catalogCards: CatalogCard[];
  catalogOrders: CatalogOrder[];
  cart: Cart;
}

export type PrizesActionTypes = SetPaymentSettings | SetPayments | SetCatalogCards
  | SetCatalogOrders | SetCart;
