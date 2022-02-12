import React from 'react';
import VideoCarousel from '../carousel/VideoCarousel'

class TutorVideoContent extends React.Component {

  render() {
    const {user, videos} = this.props;

    return(
      <div>this is video page
        <VideoCarousel videos={videos} />
      </div>
    )
  }
}

export default TutorVideoContent;