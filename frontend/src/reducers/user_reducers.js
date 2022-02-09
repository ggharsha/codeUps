import { combineReducers } from 'redux';
import profileUserReducer from './profile_user_reducer';
import studentsReducer from './student_reducer';
import tutorsReducer from './tutor_reducer';

const UserReducer = combineReducers({
  profileUser: profileUserReducer,
  tutors: tutorsReducer,
  students: studentsReducer
})

export default UserReducer;