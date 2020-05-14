export const SET_NOTIFICATIONS = 'SET_NOTIFICATIONS';
export const SET_PUBLICATIONS = 'SET_PUBLICATIONS';

export interface Notification {
  id: number;
  profile_id: number|null;
  title: string;
  body: string;
  icon_url: string|null;
  fa: string|null;
  created_at: string;
  readed: boolean;
}

export interface Publication {
  id: number;
  title: string;
  anons: string;
  content: string;
  image_preview_url: string;
  webPreviewUrl: string|null;
  mobilePreviewUrl: string|null;
  pdf_file_url: string|null;
  created_at: string;
  readed: boolean;
}

interface SetNotificationsAction {
  type: typeof SET_NOTIFICATIONS;
  payload: Notification[];
}

interface SetPublicationsAction {
  type: typeof SET_PUBLICATIONS;
  payload: Publication[];
}

export interface MobileState {
  notifications: Notification[];
  publications: Publication[];
}

export type MobileActionTypes = SetNotificationsAction | SetPublicationsAction;
