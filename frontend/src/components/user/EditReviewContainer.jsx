import { connect } from 'react-redux'
import { closeModal } from "../../actions/modal_actions";
import { updateReview } from '../../actions/review_actions';
import { fetchUser } from '../../actions/user_actions';
import EditReview from './EditReview';

const mapStateToProps = (state, ownProps) => {

  let currReview = null;
  Object.values(state.reviews).forEach(review => {
    if (review.studentId === state.session.user.id) {
      currReview = review
    }
  })

  return {
    review: currReview,
    profileUser: ownProps.profileUser,
    currentUser: state.session.user,
    errors: Object.values(state.errors.review)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: userId => dispatch(fetchUser(userId)),
    updateReview: review => dispatch(updateReview(review)),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditReview)