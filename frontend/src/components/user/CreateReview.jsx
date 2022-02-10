import React from "react";
import StarRating from "./StarRating";

export default class CreateReview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            studentId: this.props.currentUser.id,
            tutorId: this.props.profileUser._id,
            text: "",
            rating: null,
            errors: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRating = this.handleRating.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleRating(value) {
        let review = this.state
        review.rating = value
        this.setState(review)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createReview(this.state)
        .then(() => this.props.closeModal())
    }

    render() {
        return (
            <div className="create-review-container">
                <h3>Write a review</h3>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <StarRating 
                        updateStars={this.handleRating}
                    />
                    <textarea
                        className="review-textarea"
                        onChange={this.update("text")}
                        value={this.state.text}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}