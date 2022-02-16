import axios from 'axios';

export const fetchVideos = () => {
    return axios.get(`/api/videos`);
}

export const fetchVideo = id => {
    return axios.get(`/api/videos/video/${id}`);
}

export const fetchTutorVideos = authorId => {
    return axios.get(`/api/videos/${authorId}`);
}