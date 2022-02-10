import React from 'react';

class UserInfo extends React.Component {

  render() {
    const {user} = this.props;
    console.log(user)
    return (
      <div className='user-info'>
        <button className='message-user'>Message</button>
        {user.role === 'tutor' && <button className='review-user'>Write a Review</button>}
        <div className='username-container'>
          <div className='tag' >Username: </div>
          <div className='username'>{user.username}</div>
        </div>
        <div className='role-container'>
          <div className='tag' >Role: </div>
          <div className='role'>{user.role}</div>
        </div>
        <ul className='language-list'>
          {user.languages.map((language, index) => {
            return (
              <li key={index} className='language'>
                {language}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default UserInfo;