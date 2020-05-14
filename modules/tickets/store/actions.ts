import { Dispatch } from 'redux';

import { SET_COUNTER_PROFILE, SET_TICKETS, SET_TOPIC_OPTIONS, Ticket, TicketsActionTypes, TopicOption } from './types';
import ax from 'utils/ax';
import { RootState } from 'store/rootReducer';

function setCounterProfile(counterProfile: number): TicketsActionTypes {
  return {type: SET_COUNTER_PROFILE, payload: counterProfile};
}

function setTickets(tickets: Ticket[]): TicketsActionTypes {
  return {type: SET_TICKETS, payload: tickets};
}

function setTopicOptions(topicOptions: TopicOption[]): TicketsActionTypes {
  return {type: SET_TOPIC_OPTIONS, payload: topicOptions};
}

export function getTickets() {
  return (dispatch: Dispatch<TicketsActionTypes>, getState: () => RootState): void => {
    const profile_id = getState().auth.profile_id;
    ax().post('tickets/api/no-log/get-my-tickets', {profile_id})
      .then((response) => {
        dispatch(setCounterProfile(response.data.counter_profile));
        dispatch(setTickets(response.data.tickets));
        dispatch(setTopicOptions(response.data.topic_options));
      });
  };
}
