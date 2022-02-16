import React from 'react'
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import { fetchTutors, fetchUser } from '../../../actions/user_actions'
import { getVideo } from '../../../actions/video_actions';
import { openModal } from '../../../actions/modal_actions';

const mapStateToProps = (state) => ({
   tutors: Object.values(state.user.tutors),
   videos: state.videos
});

const mapDispatch = (dispatch)=>({
   fetchTutors: ()=>dispatch(fetchTutors()),
   fetchUser: userId => dispatch(fetchUser(userId)),
   getVideo: videoId => dispatch(getVideo(videoId)),
   openModal: modal => dispatch(openModal(modal))
})

export default connect(mapStateToProps,mapDispatch)(SearchBar);