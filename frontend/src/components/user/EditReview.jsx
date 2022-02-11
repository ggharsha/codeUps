import React from 'react';
import StartRating from './StarRating';

export default class EditReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.review;
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
    this.props.updateReview(this.state)
    .then(() => {
        if (Object.keys(this.props.errors).length === 0) {
            this.props.closeModal()
        } else {
            console.log(this.props.errors)
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
    console.log(this.state);
    return (
      <div>this is edit</div>
    )
  }
}