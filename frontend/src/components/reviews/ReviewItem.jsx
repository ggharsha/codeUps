import React from 'react';
import StarRating from '../user/StarRating';

class ReviewItem extends React.Component {
    super(props) {
        constructor(props);
    }

    render() {
        return (
            <li className="review-item">
                <p className="review-username">{this.props.student.username}</p>
                <p>{this.props.review.rating}</p>
                <p>{this.props.review.text}</p>
            </li>
        )
    }
}

export default ReviewItem;