import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import NavBarContainer from '../navbar/NavbarContainer';
import Footer from '../footer/Footer';
import Card from './Card';

class MainPage extends React.Component {


  render() {
    return (
      <>
      <NavBarContainer />
      <div className="main-page-container">
        <div className='main-display'>
          <div className="main-page-left">
            <div className="main-page-tagline">
              <Typewriter className="typewriter"
                options={{
                  strings: ["Grow", "Learn", "Understand", "Guide", "Excel"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <p id="tagline-codeups">with codeUps</p>
            <p className="tagline">A place where students and teachers can connect to code</p>
            <div>
              <Link className="session-buttons joinus" to={'/signup'}>Join Us</Link>
            </div>
          </div>
          <div className="main-page-right">
            <img className='splash-photo' src={require('../../images/splash.jpg')} />
          </div>
        </div>
        <div className='about-site-row'>
          <div className='about-site-container'>
            <div className='about-site-content'>
              <h2 className='about-title'>What we're about</h2>
              <p className='about-body'>At codeUps, we believe that everyone deserves to learn from 
              the best. With our expansive network of tutors from around the globe, 
              you can connect with best of the best and learn with our huge selection 
              of coding languages! Join today to get started and become 
              the best developer you can be!</p>
            </div>
            <div className='cards-container'>
              <Card 
                title={'Collaboration'}
                image={require('../../images/community.png')}
                body={'Get connect with tutors in real time with live video calling.'}
              />
              <Card 
                title={'Learning'}
                image={require('../../images/learning.png')}
                body={'Watch the most up to date videos on coding. We include a variety of languages and cool algorithms to learn from.'}
              />
              <Card 
                title={'Flexibility'}
                image={require('../../images/flexiblility.png')}
                body={'Learn from our vast network of talented tutors from all over the globe to fit your own schedule.'}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
      </>
    );
  }
}

export default MainPage;
