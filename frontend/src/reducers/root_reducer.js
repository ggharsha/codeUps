import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import UserReducer from './user_reducers';

const RootReducer = combineReducers({
    user: UserReducer,
    session,
    errors, 
});

export default RootReducer;
