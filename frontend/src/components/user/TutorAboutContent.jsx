import React from 'react';

class TutorAboutContent extends React.Component {

  render() {
    const { user } = this.props;

    return (
      <div>
        <div className='about-content'>
          <h1 className='about-header'>
            About <span>{user.username}</span>
          </h1>
          <p>
            {user.about}
          </p>
        </div>
        <div className='feature-video-content'>
          <h2 className='feature-video-title'>Featured Video</h2>
          <div className='video-container'>
            <div className='video'>
              
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TutorAboutContent;