import React from 'react';
import UserDisplay from './UserDisplay';
import ReviewContainer from '../reviews/ReviewContainer';

class UserPage extends React.Component {

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId)
    // debugger
    this.props.getVideos()
    // this.props.getReviews(this.props.match.params.userId)
  }

  render() {
    const { user, openModal, videos } = this.props;
    if (!user) {return null}
    return(
      <div className='user-page-content'>
        <UserDisplay 
          user={user}
          openModal={openModal}
          videos={videos}
        />
        <ReviewContainer match={this.props.match} />
      </div>
    )
  }
}

export default UserPage;