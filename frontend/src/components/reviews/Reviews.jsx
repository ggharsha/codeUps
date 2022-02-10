import React from 'react';
import ReviewItem from './ReviewItem';

class Reviews extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getReviews(this.props.userId);
        this.props.fetchUser(this.props.userId);
    }

    render() {
        if (!this.props.getReviews) return null;

        return (
            <div className="reviews-container">
                <h3>Reviews</h3>
                <ul>
                    {this.props.reviews.map((review, idx) => <ReviewItem key={idx} review={review} user={this.props.user}/>)}
                </ul>
            </div>
        )
    }
}

export default Reviews;