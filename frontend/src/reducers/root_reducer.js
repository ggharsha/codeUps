import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import UserReducer from './user_reducers';
import reviewReducer from './review_reducer';
import modalReducer from './modal_reducer';
import VideoReducer from './video_reducer';

const RootReducer = combineReducers({
    user: UserReducer,
    reviews: reviewReducer,
    videos: VideoReducer,
    session,
    errors,
    modal: modalReducer 
});

export default RootReducer;
