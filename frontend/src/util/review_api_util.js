import axios from 'axios';

// export const getStudentReviews = studentId => {
//     return axios.get(`/api/reviews/${studentId}`)
// }

export const getReviews = id => {
    const res = axios.get(`/api/reviews/${id}`)
    // debugger
    return res
}

export const createReview = review => {
    return axios.post(`/api/reviews/new`, review)
}

export const editReview = review => {
    return axios.patch(`/api/reviews/edit`, review)
}

export const deleteReview = reviewId => {
    return axios.delete(`/api/reviews/delete/${reviewId}`)
}