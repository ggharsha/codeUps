import React from 'react';
import UserDisplay from './UserDisplay';
import ReviewContainer from '../reviews/ReviewContainer';

class UserPage extends React.Component {

  componentDidMount() {
    window.scrollTo(0,0);
    this.props.fetchUser(this.props.match.params.userId)
    this.props.getReviews(this.props.match.params.userId)
    this.props.getTutorVideos(this.props.match.params.userId)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.userId !== this.props.userId) {
      window.scrollTo(0,0);
      this.props.fetchUser(this.props.match.params.userId)
      this.props.getReviews(this.props.match.params.userId)
      this.props.getTutorVideos(this.props.match.params.userId)
    }
  }

  calculateAvgReview() {
    let sum = 0;
    Object.values(this.props.reviews).forEach(review => {
      sum+=review.rating
    })
    return (sum/Object.values(this.props.reviews).length).toFixed(1);
  }

  render() {
    const { user, openModal, videos, reviews, currUser, userId } = this.props;
    if (!user) {return null}
    if (user.role === 'tutor' && !videos.length ) return null
    let hasReview = false;
    (currUser && reviews[currUser.id]) ? hasReview = true : hasReview = false;

    let onCurrentUserPage = Boolean(userId === currUser.id);

    this.calculateAvgReview()
    return(
      <div className='user-page-content'>
        <UserDisplay 
          user={user}
          openModal={openModal}
          hasReview={hasReview}
          videos={videos}
          onCurrentUserPage={onCurrentUserPage}
          avgReview={this.calculateAvgReview()}
        />
        <ReviewContainer match={this.props.match} onStudentPage={user.role === 'student'}/>
      </div>
    )
  }
}

export default UserPage;