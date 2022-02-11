import React from 'react';
import UserDisplay from './UserDisplay';
import ReviewContainer from '../reviews/ReviewContainer';

class UserPage extends React.Component {

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId)
    this.props.getReviews(this.props.match.params.userId)
    this.props.getTutorVideos(this.props.match.params.userId)
  }

  render() {
    const { user, openModal, videos, reviews, currUser } = this.props;
    if (!user) {return null}
    if (user.role === 'tutor' && !videos.length ) return null
    let hasReview = false;
    (currUser && reviews[currUser.id]) ? hasReview = true : hasReview = false;

    console.log("videos", videos)
    return(
      <div className='user-page-content'>
        <UserDisplay 
          user={user}
          openModal={openModal}
          hasReview={hasReview}
          videos={videos}
        />
        <ReviewContainer match={this.props.match} />
      </div>
    )
  }
}

export default UserPage;