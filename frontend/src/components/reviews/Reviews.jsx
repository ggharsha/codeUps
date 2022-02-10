import React from 'react';

class Reviews extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getReviews(this.props.userId);
        this.props.fetchUser(this.props.userId);
    }

    render() {
        return (
            <div className="reviews-container">
                <h3>Reviews</h3>
                <ul>

                </ul>
            </div>
        )
    }
}

export default Reviews;