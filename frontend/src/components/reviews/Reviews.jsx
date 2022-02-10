import React from 'react';

class Reviews extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getReviews(this.props.userId);
    }

    render() {
        return (
            <div>Hi
                {this.props.userId}
            </div>
        )
    }
}

export default Reviews;