import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import UserPage from './UserPage';
import { openModal } from '../../actions/modal_actions';
import { getReviews } from '../../actions/review_actions';
import { getVideos, getVideo } from '../../actions/video_actions';

const mapStateToProps = (state, ownProps) => {
  const userId = ownProps.match.params.userId;
  const user = state.user.profileUser[userId];
  // let videos;
  // Object.values(state.videos).length ? 
  //   Object.values(state.videos).filter(video => video.authorId === ownProps.match.params.userId)
  //   : []
  const videos = Object.values(state.videos)
  return {
    userId,
    user,
    videos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    openModal: modal => dispatch(openModal(modal)),
    getReviews: userId => dispatch(getReviews(userId)),
    getVideo: videoId => dispatch(getVideo(videoId)),
    getVideos: () => dispatch(getVideos())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserPage);