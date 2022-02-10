import React from 'react';
import UserInfo from './UserInfo';
import TutorAbout from './TutorAbout';
import StudentAbout from './StudentAbout';
import NavBarContainer from '../navbar/NavbarContainer';

class UserDisplay extends React.Component {

  render() {
    const {user} = this.props;
    const isTutor = user.role === 'tutor'

    return (
      <>
      <NavBarContainer />
      <div className='user-display'>
        <div className='image-container'>
          <img className='banner' src="https://wallpaperaccess.com/full/36361.jpg" />
          <img className='profile-pic' src={require('../../images/logo.jpg')}/>
        </div >
        <div className='user-display-info'>
          <UserInfo 
            user={user}
          />
          {isTutor ? <TutorAbout user={user} /> : <StudentAbout user={user} />}
        </div>
      </div>
      </> 
    )
  }
}

export default UserDisplay;