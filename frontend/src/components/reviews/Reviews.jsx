import React from 'react';

class Reviews extends React.Component {
    constructor(props) {
        super(props)
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