import React from 'react';

class ReviewItem extends React.Component {
    super(props) {
        constructor(props);
    }

    render() {
        return (
            <li>
                <p>{this.props.user.username}</p>
                <p>{this.props.review.text}</p>
            </li>
        )
    }
}

export default ReviewItem;