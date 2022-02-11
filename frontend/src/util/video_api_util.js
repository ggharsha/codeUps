import axios from 'axios';

export const fetchVideos = () => {
    return axios.get(`/api/videos`);
}

export const fetchVideo = videoId => {
    return axios.get(`/api/videos/${videoId}`);
}