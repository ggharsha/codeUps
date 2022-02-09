import axios from 'axios';

export const fetchUser = (userId) => {
  return axios.get(`/api/user/${userId}`);
}

export const fetchTutors = () => {
  return axios.get(`/api/users/tutors`);
}

export const fetchStudents = () => {
  return axios.get(`api/users/students`);
}