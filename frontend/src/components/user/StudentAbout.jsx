import React from 'react';

class StudentAbout extends React.Component {

  render() {
    const { user, openModal, onCurrentUserPage } = this.props;

    return (
      <div className='student-about-container'>
        <div className='about-content'>
          {onCurrentUserPage && <button onClick={() => openModal({type: 'aboutMe'}) } className='add-about'>Edit About</button>}
          <h1 className='about-header'>
            About <span>{user.username}</span>
          </h1>
          <p>
            {user.about}
          </p>
        </div>
      </div>
    )
  }
}

export default StudentAbout;