import React from 'react';
import VideoCarouselItem from './VideoCarouselItem';

class VideoCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currPos: 0,
    }
  }

  nextSlide(e) {
    e.preventDefault();
    let newPos;
    if (this.state.currPos === this.props.displayGameId.length-1) {
      newPos = 0;
    } else {
      newPos = this.state.currPos + 1;
    }
    this.setState({currPos: newPos})
  }

  prevSlide(e) {
    e.preventDefault();
    let newPos;
    if (this.state.currPos === 0) {
      newPos = this.props.displayGameId.length-1;
    } else {
      newPos = this.state.currPos - 1
    }
    this.setState({currPos: newPos})
  }

  updatePos(e, pos) {
    this.setState({currPos: pos})
  }

  render() {
    const { videos } = this.props; 

    return (
      <div className='video-carousel'>
        <div className='carousel-item-container'>
          {videos.map((video, index) => {
            return (
              <VideoCarouselItem video={video} key={index} />
            )
          })}
        </div>
        <button className="arrow left-btn" onClick={(e) => this.prevSlide(e)}>
          <i class="fas fa-chevron-left"></i>  
        </button>
        <button className="arrow right-btn" onClick={(e) => this.nextSlide(e)}>
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    )

  }
}

export default VideoCarousel;