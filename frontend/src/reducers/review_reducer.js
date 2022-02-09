import{
    RECEIVE_REVIEW,
    RECEIVE_REVIEWS,
    REMOVE_REVIEW
}from "../actions/review_actions"

const reviewReducer = (state={}, action)=>{
    Object.freeze(state)
    let nextState = Object.assign({}, state)
    switch(action.type){
        case RECEIVE_REVIEWS:
            return action.reviews.data
        case RECEIVE_REVIEW:
            nextState[action.review.data.id] = action.review.data
            return nextState
        case REMOVE_REVIEW:
            delete nextState[action.reviewId]
            return nextState
        default:
            return state;
    }


}
export default reviewReducer;