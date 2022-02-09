import { combineReducers } from 'redux';
import currentUserReducer from './current_user_reducer';

const UserReducer = combineReducers({
  currentUser: currentUserReducer
})

export default UserReducer;