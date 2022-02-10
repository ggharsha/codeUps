import axios from 'axios';

export const fetchVideos = () => {
    return axios.get(`/api/videos`);
}