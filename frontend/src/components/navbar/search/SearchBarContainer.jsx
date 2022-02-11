import React from 'react'
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import { fetchTutors, fetchUser } from '../../../actions/user_actions'
import { getVideo } from '../../../actions/video_actions';

const mapStateToProps = (state) => ({
   tutors: Object.values(state.user.tutors)
});

const mapDispatch = (dispatch)=>({
   fetchTutors: ()=>dispatch(fetchTutors()),
   fetchUser: userId => dispatch(fetchUser(userId)),
   getVideo: videoId => dispatch(getVideo(videoId))
})

export default connect(mapStateToProps,mapDispatch)(SearchBar);