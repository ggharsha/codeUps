import { combineReducers } from 'redux';
import profileUserReducer from './profile_user_reducer';
import tutorsReducer from './tutor_reducer';

const UserReducer = combineReducers({
  profileUser: profileUserReducer,
  tutors: tutorsReducer.apply,
})

export default UserReducer;