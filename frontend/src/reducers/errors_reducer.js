import { combineReducers } from 'redux';
import reviewErrorsReducer from './review_errors_reducer';

import SessionErrorsReducer from './session_errors_reducer';

export default combineReducers({
  session: SessionErrorsReducer,
  review: reviewErrorsReducer
});
