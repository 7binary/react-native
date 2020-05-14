import { combineReducers } from 'redux';

import authReducer from 'modules/auth/store/authReducer';
import profileReducer from 'modules/profile/store/profileReducer';
import mobileReducer from 'modules/mobile/store/mobileReducer';
import prizesReducer from 'modules/prizes/store/prizesReducer';
import ticketsReducer from 'modules/tickets/store/ticketsReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  mobile: mobileReducer,
  prizes: prizesReducer,
  tickets: ticketsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
