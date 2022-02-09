import { RECEIVE_ALL_STUDENTS } from "../actions/user_actions";

const studentsReducer = (state={}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_STUDENTS:
      const studentObj = {};
      action.students.data.map((student) => {
        studentObj[student._id] = student
      });
      return studentObj;
    default:
      return state;
  }
}

export default studentsReducer;