import {
    RECEIVE_ALL_INBOXES,
    RECEIVE_INBOX
} from '../actions/inbox_actions';

const inboxReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ALL_INBOXES:
            return action.inboxes;
        case RECEIVE_INBOX:
            return action.inbox;
        default:
            return state;
    }
};

export default inboxReducer;

/*

["message1", "message3"] sender x, receiver y
["message2", "message4"] sender y, receiver x

*/