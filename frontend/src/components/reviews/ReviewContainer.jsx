import { connect } from 'react-redux';
import { getReviews, createReview, updateReview, deleteReview } from '../../actions/review_actions';
import { fetchUser, fetchStudents } from '../../actions/user_actions';
import Reviews from './Reviews';

const mapStateToProps = (state, ownProps) => {
    const userId = ownProps.match.params.userId;
    return {
        userId: userId, 
        user: state.user.profileUser[userId],
        reviews: Object.values(state.reviews),
        students: Object.values(state.user.students),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getReviews: (id) => dispatch(getReviews(id)),
        createReview: (review) => dispatch(createReview(review)),
        updateReview: (review) => dispatch(updateReview(review)),
        deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
        fetchUser: (id) => dispatch(fetchUser(id)),
        fetchStudents: () => dispatch(fetchStudents())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);