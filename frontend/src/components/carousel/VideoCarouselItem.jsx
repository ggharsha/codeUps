import React from 'react';

class VideoCarouselItem extends React.Component {

  render() {
    const { video } = this.props;

    return (
      <div className='carousel-video-container'>
        <h2 className='carousel-video-title'>{video.title}</h2>
        <video className='carousel-video' controls>
          <source src={video.videoUrl} type="video/mp4"/>
          <source src={video.videoUrl} type="video/ogg"/>
          Your browser does not support HTML video.
        </video>
      </div>
    )
  }
}

export default VideoCarouselItem;