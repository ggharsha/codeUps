import * as ReviewApiUtil from '../util/review_api_util';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
// export const CREATE_REVIEW = 'CREATE_REVIEW';
// export const UPDATE_REVIEW = 'UPDATE_REVIEW';
export const RECEIVE_REVIEW = "RECEIVE_REVIEW"
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';

const receiveReviews = reviews =>{

    return{
        type: RECEIVE_REVIEWS,
        reviews
    }
}

const receiveReview = review => {
    return {
        type: RECEIVE_REVIEW,
        review
    }
}

const removeReview = reviewId =>{
    return{
        type: REMOVE_REVIEW,
        reviewId
    }
}

const receiveReviewErrors = (errors) => {
    return {
        type: RECEIVE_REVIEW_ERRORS,
        errors
    }
}

export const getReviews = (id)=> dispatch =>{
    return ReviewApiUtil.getReviews(id)
        .then(reviews => dispatch(receiveReviews(reviews)))
        .catch(err=>console.log(err))
}

export const createReview = (review) => dispatch => {
    return ReviewApiUtil.createReview(review)
        .then((review) => {
            dispatch(receiveReview(review))
        }, (errors) => {
            dispatch(receiveReviewErrors(errors.response.data))
        })
}

export const updateReview = (review) => dispatch => {
    
    return ReviewApiUtil.editReview(review)
        .then((review) => {
            dispatch(receiveReview(review))
        }, (errors) => {
            dispatch(receiveReviewErrors(errors.response.data))
        })
}

export const deleteReview = (reviewId) => dispatch => {
    return ReviewApiUtil.deleteReview(reviewId)
        .then(() => dispatch(removeReview(reviewId)))
}