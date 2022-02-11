import {fetchVideos, fetchVideo} from '../util/video_api_util'
export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS'
export const RECEIVE_VIDEO = 'RECEIVE_VIDEO'


const receiveVideos = (videos)=>({
    type: RECEIVE_VIDEOS,
    videos
})

const receiveVideo = video => ({
    type: RECEIVE_VIDEOS,
    video
})

export const getVideos = ()=> dispatch=>{
    fetchVideos().then(videos=>dispatch(receiveVideos(videos)))
}

export const getVideo = videoId => dispatch => {
    fetchVideo(videoId).then(video => dispatch(receiveVideo(video)))
}