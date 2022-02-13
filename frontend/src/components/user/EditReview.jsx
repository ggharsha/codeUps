import React from 'react';
import StarRating from './StarRating';

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

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteReview(this.props.review._id);
    this.props.closeModal();
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
    console.log(this.props.review)
    return (
      <div className='edit-review-container'>
        <h2 className='review-title'>Edit Review</h2>
        <form onSubmit={e => this.handleSubmit(e)}>
          <h3 className='rating-title'>Rate your tutor</h3>
          <StarRating numStars={this.state.rating} updateStars={this.handleRating} />
          <textarea
              className="review-textarea"
              onChange={this.update("text")}
              value={this.state.text}
          />
          {this.renderErrors()}

          <div className='button-container'>
            <button className='delete-button' onClick={(e) => this.handleDelete(e)}>Delete Review</button>
            <button className="submit-button" type="submit">Submit</button>
          </div>

        </form>
      </div>
    )
  }
}