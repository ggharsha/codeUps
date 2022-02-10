import React from 'react';
import UserInfo from './UserInfo';
import UserAbout from './UserAbout';
import NavBarContainer from '../navbar/NavbarContainer';

class UserDisplay extends React.Component {

  render() {
    const {user} = this.props;

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
          <UserAbout
            user={user}
          />
        </div>
      </div>
      </> 
    )
  }
}

export default UserDisplay;