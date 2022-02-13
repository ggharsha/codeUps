import {
    RECEIVE_ALL_INBOXES,
    RECEIVE_INBOX
} from '../actions/inbox_actions';

const inboxReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_ALL_INBOXES:
            const inboxObj = {};
            action.inboxes.data.forEach(inbox => {
                inboxObj[inbox._id] = inbox;
            });
            return inboxObj;

        case RECEIVE_INBOX:
            nextState[action.inbox.data._id] = action.inbox.data;
            return nextState;
        default:
            return state;
    }
};

export default inboxReducer;

/*

a ["message1", "message3"] sender x, receiver y
b ["message2", "message4"] sender y, receiver x

a.concat(b).sort .createdAt

*/