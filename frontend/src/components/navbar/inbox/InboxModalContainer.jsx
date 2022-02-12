import { connect } from "react-redux";
import { fetchAllInboxes, createInbox, updateInbox } from "../../../actions/inbox_actions";
import InboxModal from "./InboxModal";

const mSTP = state => ({
    currentUserId: state.session.user.id,

});

const mDTP = dispatch => ({
    fetchAllInboxes: userId => dispatch(fetchAllInboxes(userId))
});

export default connect(mSTP, mDTP)(InboxModal);