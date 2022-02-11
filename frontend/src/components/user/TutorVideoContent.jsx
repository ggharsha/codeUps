import React from 'react';

class TutorVideoContent extends React.Component {

  render() {
    const {user, videos} = this.props;

    return(
      <div>this is video page
        {videos.map(video => (
          <video width="400" key={video._id} controls>
            <source src={video.videoUrl} type="video/mp4"/>
            <source src={video.videoUrl} type="video/ogg"/>
            Your browser does not support HTML video.
          </video>
        ))}
      </div>
    )
  }
}

export default TutorVideoContent;