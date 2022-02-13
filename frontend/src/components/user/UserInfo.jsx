import React from 'react';

class UserInfo extends React.Component {

  render() {
    const {user, openModal, ownReview, avgReview} = this.props;
    return (
      <div className='user-info'>
        <button className='message-user'>Message</button>
        {user.role === 'tutor' && 
          <div>
            {!Boolean(ownReview) ? 
            <button className='review-user' onClick={() => openModal('createReview')}>
              Write a Review
            </button> :
            <button className='edit-review' onClick={() => openModal('editReview')}>Edit Review</button>
            }
          </div>
        }
        <div className='username-container'>
          <div className='tag' >Username: </div>
          <div className='username'>{user.username}</div>
        </div>
        <div className='role-container'>
          <div className='tag' >Role: </div>
          <div className='role'>{user.role}</div>
        </div>
        {user.role === 'tutor' && 
        <div className='avg-review-container'>
          <div className='tag'>Average Review:</div>
          <div className='review'>{`${avgReview}/5`}</div>
        </div>}
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