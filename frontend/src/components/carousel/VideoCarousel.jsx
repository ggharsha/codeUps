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
    if (this.state.currPos === this.props.videos.length-1) {
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
      newPos = this.props.videos.length-1;
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
              <div key={index} className='carousel-item'>
                {index === this.state.currPos && <VideoCarouselItem video={video} key={index} />}
              </div>
              // <div key={index} className={index === this.state.currPos ? `carousel-item active` : `carousel-item`}>
              //   <VideoCarouselItem video={video} key={index} />
              // </div>
            )
          })}
        </div>

        <div className='carousel-buttons'>
          <button className="arrow left-btn" onClick={(e) => this.prevSlide(e)}>
            <i className="fas fa-chevron-left"></i>  
          </button>
          <button className="arrow right-btn" onClick={(e) => this.nextSlide(e)}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        <div className="carousel-tab" >
          {[ ...Array(videos.length).keys()].map( (ele, ind) => {
            return (
            <div 
              key={ind}
              className={ind === this.state.currPos ? 'tab active' : 'tab'}
              onClick={(e) => this.updatePos(e, ele)}>
            </div>
            )
          })}
        </div>
      </div>
    )

  }
}

export default VideoCarousel;