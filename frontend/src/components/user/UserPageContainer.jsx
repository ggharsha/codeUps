import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import UserPage from './UserPage';

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
    fetchUser: (userId) => dispatch(fetchUser(userId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserPage);