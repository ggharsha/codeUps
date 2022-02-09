import { RECEIVE_ALL_TUTORS } from "../actions/user_actions";

const tutorsReducer = (state={}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_TUTORS: 
      const tutorObj = {};
      action.tutors.data.map((tutor) => {
        tutorObj[tutor._id] = tutor
      });
      return tutorObj;
    default:
      return state;
  }
}

export default tutorsReducer;