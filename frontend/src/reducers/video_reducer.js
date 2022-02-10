import { RECEIVE_VIDEOS } from "../actions/video_actions";

const VideoReducer = (state={}, action)=>{
    Object.freeze(state)

    switch(action.type){
        case RECEIVE_VIDEOS:
            return action.videos
        default:
            return state
    }
}

export default VideoReducer