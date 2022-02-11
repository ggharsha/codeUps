import axios from 'axios';

export const fetchVideos = () => {
    return axios.get(`/api/videos`);
}

export const fetchVideo = id => {
    return axios.get(`/api/videos/${id}`);
}