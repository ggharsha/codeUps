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
            // this.props.errors
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
    // console.log(this.state);
    return (
      <div className='edit-review-container'>
        <h2 className='review-title'>Edit Review</h2>
        <form onSubmit={e => this.handleSubmit(e)}>
          <h3 className='rating-title'>Rate your tutor</h3>
          <StartRating startingStarts={this.state.rating} updateStars={this.handleRating} />
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