import React from 'react';

class ReviewItem extends React.Component {
    super(props) {
        constructor(props);
    }

    render() {
        return (
            <li className="review-item">
                <p className="review-username">{this.props.username}</p>
                <p>{this.props.review.rating}</p>
                <p>{this.props.review.text}</p>
            </li>
        )
    }
}

export default ReviewItem;