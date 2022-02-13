import * as InboxApiUtil from '../util/inbox_api_util';

export const RECEIVE_ALL_INBOXES = 'RECEIVE_ALL_INBOXES';
export const RECEIVE_INBOX = 'RECEIVE_INBOX';

const receiveAllInboxes = inboxes => ({
    type: RECEIVE_ALL_INBOXES,
    inboxes
});

const receiveInbox = inbox => ({
    type: RECEIVE_INBOX,
    inbox
});

export const fetchAllInboxes = userId => dispatch => {
    return InboxApiUtil.fetchAllInboxes(userId)
    .then(inboxes => dispatch(receiveAllInboxes(inboxes)))
};

export const createInbox = inbox => dispatch => {
    return InboxApiUtil.createInbox(inbox)
    .then(inbox => dispatch(receiveInbox(inbox)))
};

export const updateInbox = inbox => dispatch => {
    return InboxApiUtil.updateInbox(inbox)
    .then(inbox => dispatch(receiveInbox(inbox)))
};