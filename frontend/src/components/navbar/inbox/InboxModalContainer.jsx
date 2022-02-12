import { connect } from "react-redux";
import { fetchAllInboxes, createInbox, updateInbox } from "../../../actions/inbox_actions";
import InboxModal from "./InboxModal";

const mSTP = state => ({
    currentUserId: state.session.user.id,
    messages: Object.values(state.inbox),
    // sentMessages: Object.values(state.inbox).filter(senderId => senderId === currentUserId),
    // receivedMessages: Object.values(state.inbox).filter(receiverId => receiverId === currentUserId)
});

const mDTP = dispatch => ({
    fetchAllInboxes: userId => dispatch(fetchAllInboxes(userId)),
    createInbox: inbox => dispatch(createInbox(inbox)),
    updateInbox: inbox => dispatch(updateInbox(inbox))
});

export default connect(mSTP, mDTP)(InboxModal);