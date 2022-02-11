import axios from 'axios';

export const fetchUser = (userId) => {
  return axios.get(`/api/users/${userId}`);
}

export const fetchTutors = () => {
  return axios.get(`/api/users/tutors`);
}

export const fetchStudents = () => {
  return axios.get(`api/users/students`);
}

export const updateUser = user => {
  return axios.patch(`api/users/edit`, user);
}