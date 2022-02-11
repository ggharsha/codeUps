import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import { createReview } from "../../actions/review_actions";
import { fetchUser } from "../../actions/user_actions";
import CreateReview from "./CreateReview";

const mSTP = (state, ownProps) => ({
    profileUser: ownProps.profileUser,
    currentUser: state.session.user,
    errors: Object.values(state.errors.review)
})

const mDTP = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId)),
    createReview: review => dispatch(createReview(review)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(CreateReview);