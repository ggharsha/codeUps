import React from 'react';

class TutorAboutContent extends React.Component {

  render() {

    const { user, videos, openModal, onCurrentUserPage} = this.props;
    let featured 
     videos.map(video=>{
       console.log(video)
       if(video.featured) featured = video
     })


    return (
      <div>
        <div className='about-content'>
          {onCurrentUserPage && <button onClick={() => openModal('aboutMe') } className='add-about'>Edit About</button>}
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
              <video width="400" controls>
                <source src={featured.videoUrl} type="video/mp4" />
                <source src={featured.videoUrl} type="video/ogg" />
                Your browser does not support HTML video.
              </video>
              
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TutorAboutContent;