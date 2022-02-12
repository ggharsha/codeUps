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
        .then(() => {
            if (Object.keys(this.props.errors).length === 0) {
                this.props.closeModal()
            } else {
            //   this.props.errors
            }
        })
    }

    renderErrors() {
        return(
            <ul className="errors-list">
                {Object.keys(this.props.errors).map((error, index) => {
                    return (
                        <li className="error-item" key={index}>
                            {this.props.errors[error]}
                        </li>
                    )
                })}
            </ul>
        )
    }

    render() {
        return (
            <div className="create-review-container">
                <h2 className="review-title">Write a review</h2>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <h3 className="rating-title">Rate your tutor</h3>
                    <StarRating updateStars={this.handleRating} numStars={0}/>
                    <h3 className="review-body-title">Write a review</h3>
                    <textarea
                        className="review-textarea"
                        onChange={this.update("text")}
                        value={this.state.text}
                    />
                    {this.renderErrors()}
                    <button className="submit-button" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}