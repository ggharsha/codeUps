import React from 'react';
import UserDisplay from './UserDisplay';
import ReviewContainer from '../reviews/ReviewContainer';

class UserPage extends React.Component {

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId)
    this.props.getReviews(this.props.match.params.userId)
  }

  render() {
    const { user, openModal, reviews, currUser } = this.props;
    if (!user) {return null}

    let hasReview = false;
    (currUser && reviews[currUser.id]) ? hasReview = true : hasReview = false;

    console.log(reviews)
    return(
      <div className='user-page-content'>
        <UserDisplay 
          user={user}
          openModal={openModal}
          hasReview={hasReview}
        />
        <ReviewContainer match={this.props.match} />
      </div>
    )
  }
}

export default UserPage;