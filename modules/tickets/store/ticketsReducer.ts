import {
  SET_TICKETS,
  TicketsActionTypes,
  TicketsState,
  Ticket,
  TopicOption,
  SET_COUNTER_PROFILE,
  SET_TOPIC_OPTIONS,
} from './types';

const initialState: TicketsState = {
  counter_profile: 0,
  tickets: [],
  topic_options: [],
};

export default function ticketsReducer(state = initialState, action: TicketsActionTypes): TicketsState {
  switch (action.type) {

    case SET_COUNTER_PROFILE: {
      const counter_profile: number = action.payload;
      return {...state, counter_profile};
    }

    case SET_TICKETS: {
      const tickets: Ticket[] = action.payload;
      return {...state, tickets};
    }

    case SET_TOPIC_OPTIONS: {
      const topic_options: TopicOption[] = action.payload;
      return {...state, topic_options};
    }
  }

  return state;
};
