import { connect } from "react-redux";
import { fetchAllInboxes, createInbox, updateInbox } from "../../actions/inbox_actions";
import CreateMessageModal from "./CreateMessageModal";

// select inbox
const selectInbox = (inboxes, currentUserId, profileUserId) => {
    const findInbox = Object.values(inboxes).filter(conversation => (
        conversation.senderId === currentUserId && 
        conversation.receiverId === profileUserId
    ));

    return findInbox.length === 1 ? findInbox : null;
};
// end select

const mSTP = (state, ownProps) => ({
    profileUser: ownProps.profileUser,
    currentUser: state.session.user,
    currentInbox: selectInbox(
        state.inboxes, 
        state.session.user._id,
        ownProps.profileUser._id)
});

const mDTP = dispatch => ({
    createInbox: message => dispatch(createInbox(message)),
    updateInbox: message => dispatch(updateInbox(message))
});

export default connect(mSTP, mDTP)(CreateMessageModal)