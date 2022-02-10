import {fetchVideos} from '../util/video_api_util'
export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS'


const receiveVideos = (videos)=>({
    type: RECEIVE_VIDEOS,
    videos
})

export const getVideos = ()=> dispatch=>{
    fetchVideos().then(videos=>dispatch(receiveVideos(videos)))
}