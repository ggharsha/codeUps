import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import { updateUser } from "../../actions/user_actions";
import AboutMe from "./AboutMeModal";

const mSTP = (state, ownProps) => ({
    profileUser: ownProps.profileUser,
    currentUser: state.session.user
});

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    updateUser: user => dispatch(updateUser(user))
});

export default connect(mSTP, mDTP)(AboutMe);