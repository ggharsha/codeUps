import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import UserPage from './UserPage';
import { openModal } from '../../actions/modal_actions';
import { getReviews } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
  const userId = ownProps.match.params.userId;
  const user = state.user.profileUser[userId];
  return {
    userId,
    user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    openModal: modal => dispatch(openModal(modal)),
    getReviews: userId => dispatch(getReviews(userId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserPage);