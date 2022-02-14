import { connect } from "react-redux";
import { fetchUser } from "../../../actions/user_actions";
import { createInbox, updateInbox } from "../../../actions/inbox_actions";
import FullConversation from "./FullConversation";

// selector start
const checkSliceOfState = (state, userId) => {
    return state.user.tutors[userId] ? state.user.tutors[userId] : state.user.students[userId];
}

const parseSentMessages = (state, otherUserId) => {
    return Object.values(state.inbox).filter(conversation => (
        conversation.senderId === state.session.user.id
        && conversation.receiverId === otherUserId
    ))[0]
}

const parseReceivedMessages = (state, otherUserId) => {
    return Object.values(state.inbox).filter(conversation => (
        conversation.receiverId === state.session.user.id
            && conversation.senderId === otherUserId
    ))[0]
}
// selector end

const mSTP = (state, ownProps) => ({
    currentUser: state.session.user,
    otherUser: checkSliceOfState(state, state.inbox[ownProps.conversationId].senderId),
    sentMessages: parseSentMessages(state, state.inbox[ownProps.conversationId].receiverId),
    receivedMessages: parseReceivedMessages(state, state.inbox[ownProps.conversationId].senderId)
});


const mDTP = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId)),
    createInbox: inbox => dispatch(createInbox(inbox)),
    updateInbox: inbox => dispatch(updateInbox(inbox))
});

export default connect(mSTP, mDTP)(FullConversation)