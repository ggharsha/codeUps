import { connect } from "react-redux";
import { fetchStudents, fetchTutors, fetchUser} from "../../actions/user_actions";
import { getVideos } from "../../actions/video_actions";
import Index from "./index";

// selector

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
}

// end selector

const mSTP = state => ({
    tutors: shuffleArray(Object.values(state.user.tutors)).slice(0, 5),
    students: shuffleArray(Object.values(state.user.students)).slice(0, 5),
    videos: Object.values(state.videos)
});

const mDTP = dispatch => ({
    fetchStudents: () => dispatch(fetchStudents()),
    fetchTutors: () => dispatch(fetchTutors()),
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchVideos: () => dispatch(getVideos()),
    // fetchVideo: videoId => dispatch(fetchVideo(videoId))
});

export default connect(mSTP, mDTP)(Index);