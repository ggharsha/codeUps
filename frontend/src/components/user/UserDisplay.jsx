import React from 'react';
import UserInfo from './UserInfo';
import TutorAbout from './TutorAbout';
import StudentAbout from './StudentAbout';
import NavBarContainer from '../navbar/NavbarContainer';

class UserDisplay extends React.Component {

  render() {
    const {user, openModal, ownReview, videos, onCurrentUserPage, avgReview} = this.props;
    const isTutor = user.role === 'tutor'

    return (
      <>
      <NavBarContainer />
      <div className='user-display'>
        <div className='image-container'>
          <img className='banner' src="https://wallpaperaccess.com/full/36361.jpg" />
          <img className='profile-pic' src={user.photoUrl}/>
        </div >
        <div className='user-display-info'>
          <UserInfo 
            user={user}
            openModal={openModal}
            ownReview={ownReview}
            avgReview={avgReview}
          />
          {isTutor ? <TutorAbout onCurrentUserPage={onCurrentUserPage} openModal={openModal} user={user} videos={videos} /> : <StudentAbout onCurrentUserPage={onCurrentUserPage} user={user} openModal={openModal} />}
        </div>
      </div>
      </> 
    )
  }
}

export default UserDisplay;