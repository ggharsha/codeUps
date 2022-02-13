import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import UserPage from './UserPage';
import { openModal } from '../../actions/modal_actions';
import { getReviews } from '../../actions/review_actions';
import { getVideos, getVideo, getTutorVideos } from '../../actions/video_actions';

const mapStateToProps = (state, ownProps) => {
  const userId = ownProps.match.params.userId;
  const user = state.user.profileUser[userId];
  const reviews = Object.values(state.reviews);
  const videos = Object.values(state.videos)
  return {
    userId,
    user,
    videos,
    reviews,
    currUser: state.session.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    openModal: modal => dispatch(openModal(modal)),
    getReviews: userId => dispatch(getReviews(userId)),
    getTutorVideos: authorId => dispatch(getTutorVideos(authorId)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserPage);