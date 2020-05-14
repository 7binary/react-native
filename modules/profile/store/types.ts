export const SET_TRANSACTIONS = 'SET_TRANSACTIONS';
export const SET_USER = 'SET_USER';
export const UNSET_USER = 'UNSET_USER';
export const SET_PASSPORT = 'SET_PASSPORT';

type PassportStatus = 'new' | 'approved';

export interface PassportComment {
  id: number;
  created_at: string;
  status_old: PassportStatus | null;
  status_new: PassportStatus | null;
  comment: string | null;
  note: string | null;
  admin_id: number | null;
}

export interface PassportFile {
  file: string;
}

export interface Passport {
  id: number;
  first_name: string;
  last_name: string;
  middle_name: string;
  birthday_on_local: string;
  inn: string;
  address: string;
  document_series_and_number: string;
  document1_api: PassportFile|null;
  document2_api: PassportFile|null;
  status: PassportStatus;
  status_label: string;
  comments: PassportComment[];
}

interface PassportAccount {
  status: PassportStatus;
  status_label: string;
}

export interface User {
  profile_id: number;
  first_name: string;
  last_name: string;
  middle_name: string | null;
  full_name?: string;
  phone_mobile?: string;
  balance?: number;
  email?: string | null;
  birthday_on?: string | null;
  avatar_url?: string | null;
  role?: string | null;
  specialty?: string | null;
  city_id?: number | null;
  city_local?: string | null;
  blocked_at?: string | null;
  blocked_reason?: string | null;
  banned_at?: string | null;
  banned_reason?: string | null;
  created_at?: string | null;
  registered_at?: string | null;
  checked_at?: string | null;
  pers_at?: string | null;
  account?: PassportAccount | null;
}

export type TransactionType = 'in' | 'out';

export interface Transaction {
  id: number,
  amount: number,
  balance_before: number,
  balance_after: number,
  title: string,
  comment: string | null,
  type: TransactionType,
  created_at: string,
}

interface SetUserAction {
  type: typeof SET_USER;
  payload: User;
}

interface UnsetUserAction {
  type: typeof UNSET_USER;
}

interface SetUserAction {
  type: typeof SET_USER;
  payload: User;
}

interface SetTransactionsAction {
  type: typeof SET_TRANSACTIONS;
  payload: Transaction[];
}

interface SetPassportAction {
  type: typeof SET_PASSPORT;
  payload: Passport;
}

export interface ProfileState {
  user: User | null;
  transactions: Transaction[];
  passport: Passport | null;
}

export type ProfileActionTypes = SetUserAction | UnsetUserAction | SetTransactionsAction | SetPassportAction;
