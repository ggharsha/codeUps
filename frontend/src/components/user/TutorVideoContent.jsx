import React from 'react';
import VideoCarousel from '../carousel/VideoCarousel'

class TutorVideoContent extends React.Component {

  render() {
    const {user, videos} = this.props;

    return(
      <div className='tutor-video-content'>
        <h1 className='video-header'>{`More Videos from ${user.username}`}</h1>
        <VideoCarousel videos={videos} />
      </div>
    )
  }
}

export default TutorVideoContent;