import React from 'react';
import TutorAboutContent from './TutorAboutContent';
import TutorVideoContent from './TutorVideoContent';

class TutorAbout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onAboutPage: true
    }
  }

  handleAboutTab(e) {
    e.preventDefault();
    this.setState({onAboutPage: true});
  }

  handleVideoTab(e) {
    e.preventDefault();
    this.setState({onAboutPage: false})
  }

  render() {
    const { user, videos, openModal, onCurrentUserPage } = this.props;

    return (
      <div className='about-container'>
        <div className='tabs-container'>
          <button className={this.state.onAboutPage ? 'about-tab active' : 'about-tab'} onClick={(e) => this.handleAboutTab(e)}>About</button>
          <button className={!this.state.onAboutPage ? 'video-tab active' : 'video-tab'} onClick={(e) => this.handleVideoTab(e)}>Video</button>
        </div>
        {this.state.onAboutPage ? 
          <TutorAboutContent user={user} openModal={openModal} onCurrentUserPage={onCurrentUserPage}/> : <TutorVideoContent user={user} videos={videos} />}
      </div>
    )
  }
}

export default TutorAbout;