import { 
    RECEIVE_VIDEOS, 
    RECEIVE_VIDEO 
} from "../actions/video_actions";

const VideoReducer = (state={}, action)=>{
    Object.freeze(state)
    switch(action.type){
        case RECEIVE_VIDEOS:
            return action.videos.data
        case RECEIVE_VIDEO: 
            return action.video.data
        default:
            return state
    }
}

export default VideoReducer