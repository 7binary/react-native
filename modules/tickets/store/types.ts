export const SET_COUNTER_PROFILE = 'SET_COUNTER_PROFILE';
export const SET_TICKETS = 'SET_TICKETS';
export const SET_TOPIC_OPTIONS = 'SET_TICKET_OPTIONS';

// id: 40
// ticket_id: 13
// ticket_profile_id: 1943
// ticket_title: "Тест 1"
// ticket_topic: "Вопросы по продукции"
// profile_id: 1943
// admin_id: null
// message: "В рамках спецификации современных стандартов, тщательные исследования конкурентов ассоциативно распределены по отраслям. С другой стороны, курс на ↵социально-ориентированный национальный проект требует от нас анализа своевременного выполнения сверхзадачи.↵"
// readed: 0
// removed: 0
// checked: false
// file_url: "https://api-showcase.msforyou.ru/data/tickets/document_5d7f8f3f727d3.png"
// created_at: "2019-09-16 16:33:51"
// created: "16:33, 16 сен"
// userFromName: "Иван Иванов"
// userFromAvatar: "https://api-showcase.msforyou.ru/tickets/avatar_blank.png?v=2"
export interface Message {
  id: number;
  ticket_id: number;
  ticket_title: string;
  ticket_topic: string | null;
  profile_id: number | null;
  admin_id: number | null;
  message: string;
  readed: number | boolean;
  removed: number | boolean;
  checked: number | boolean;
  file_url: string | null;
  created_at: string;
  created: string;
  userFromName: string;
  userFromAvatar: string | null;
}

export type TicketStatus = 'new' | 'closed_by' | 'closed_auto';
export type TicketContact = 'chat' | 'email' | 'phone';

export interface Ticket {
  id: number;
  title: string;
  counter_profile: number;
  counter_admin: number;
  profile_id: number;
  topic_id: number;
  topic_name: string;
  lastMessage: Message|null;
  messages: Message[];
  status: TicketStatus;
  contact: TicketContact | null;
}

export interface TopicOption {
  id: number;
  name: string;
}

interface SetCounterProfileAction {
  type: typeof SET_COUNTER_PROFILE;
  payload: number;
}

interface SetTopicOptionsAction {
  type: typeof SET_TOPIC_OPTIONS;
  payload: TopicOption[];
}

interface SetTicketsAction {
  type: typeof SET_TICKETS;
  payload: Ticket[];
}

export interface TicketsState {
  counter_profile: number;
  tickets: Ticket[];
  topic_options: TopicOption[];
}

export type TicketsActionTypes = SetTicketsAction | SetTopicOptionsAction | SetCounterProfileAction;
