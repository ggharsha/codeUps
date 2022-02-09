import * as UserApiUtil from '../util/user_util';

export const RECEIVE_USER = 'RECEIVE_USER'
export const RECEIVE_ALL_TUTORS = 'RECEIVE_ALL_TUTORS';
export const RECEIVE_ALL_STUDENTS = 'RECEIVE_ALL_STUDENTS';
export const RECEIVE_CURRENT = 'RECEIVE_CURRENT'

const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user
  }
}

const receiveAllTutors = (tutors) => {
  return {
    type: RECEIVE_ALL_TUTORS,
    tutors
  }
}

const receiveAllStudents = (students) => {
  return {
    type: RECEIVE_ALL_STUDENTS,
    students
  }
}

export const fetchUser = (userId) => (dispatch) => {
  return UserApiUtil.fetchUser(userId)
    .then((user) => dispatch(receiveUser(user)));
}

export const fetchTutors = () => (dispatch) => {
  return UserApiUtil.fetchTutors() 
    .then((tutors) => dispatch(receiveAllTutors(tutors)));
}

export const fetchStudents = () => (dispatch) => {
  return UserApiUtil.fetchStudents()
    .then((students) => dispatch(receiveAllStudents(students)));
}