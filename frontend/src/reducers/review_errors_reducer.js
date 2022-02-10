import { CLOSE_MODAL } from '../actions/modal_actions';
import { RECEIVE_REVIEW_ERRORS, RECEIVE_REVIEW } from '../actions/review_actions';

const reviewErrorsReducer = (state=[], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_REVIEW_ERRORS:
      return action.errors;
    case RECEIVE_REVIEW:
      return [];
    case CLOSE_MODAL:
      return [];
    default: 
      return state;
  }
}

export default reviewErrorsReducer;