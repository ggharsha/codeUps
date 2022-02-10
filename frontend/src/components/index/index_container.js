import { connect } from "react-redux";
import { fetchStudents, fetchTutors, fetchUser } from "../../actions/user_actions";
import Index from "./index";

const mSTP = state => ({
    tutors: Object.values(state.user.tutors),
    students: Object.values(state.user.students),
    // videos: Object.values(state.videos)
});

const mDTP = dispatch => ({
    fetchStudents: () => dispatch(fetchStudents()),
    fetchTutors: () => dispatch(fetchTutors()),
    fetchUser: userId => dispatch(fetchUser(userId))
    // fetchVideos: () => dispatch(fetchVideos()),
    // fetchVideo: videoId => dispatch(fetchVideo(videoId))
});

export default connect(mSTP, mDTP)(Index);