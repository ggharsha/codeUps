import React from 'react';

class UserAbout extends React.Component {

  render() {
    const { user } = this.props;
    return (
      <div className='about-container'>
        <h1 className='about-header'>
          About <span>{user.username}</span>
        </h1>
        <p>
          {user.about}
        </p>
      </div>
    )
  }
}

export default UserAbout;