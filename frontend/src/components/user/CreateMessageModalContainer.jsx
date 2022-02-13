import { connect } from "react-redux";
import { fetchAllInboxes, createInbox, updateInbox } from "../../actions/inbox_actions";
import CreateMessageModal from "./CreateMessageModal";
import { closeModal } from "../../actions/modal_actions";

// select inbox
const selectInbox = (inboxes, currentUserId, profileUserId) => {
    const findInbox = Object.values(inboxes).filter(conversation => (
        conversation.senderId === currentUserId && 
        conversation.receiverId === profileUserId
    ));

    return findInbox.length && findInbox[0].messages.length > 0 ? findInbox[0].messages : [];
};
// end select

const mSTP = (state, ownProps) => ({
    profileUser: ownProps.profileUser,
    currentUser: state.session.user,
    currentInbox: selectInbox(
        state.inbox, 
        state.session.user.id,
        ownProps.profileUser._id)
});

const mDTP = dispatch => ({
    createInbox: message => dispatch(createInbox(message)),
    updateInbox: message => dispatch(updateInbox(message)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(CreateMessageModal)