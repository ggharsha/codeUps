import { connect } from "react-redux";
import { fetchUser } from "../../../actions/user_actions";
import InboxItem from "./InboxItem";

// selector start
const checkSliceOfState = (state, userId) => {
    return state.user.tutors[userId] ? state.user.tutors[userId] : state.user.students[userId];
}
// selector end

const mSTP = (state, ownProps) => ({
    currentUser: state.session.user,
    otherUser: checkSliceOfState(state, ownProps.message.senderId)
});

const mDTP = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId))
});

export default connect(mSTP, mDTP)(InboxItem);