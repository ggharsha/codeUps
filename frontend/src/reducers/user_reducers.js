import { combineReducers } from 'redux';
import profileUserReducer from './profile_user_reducer';

const UserReducer = combineReducers({
  profileUser: profileUserReducer,
  
})

export default UserReducer;