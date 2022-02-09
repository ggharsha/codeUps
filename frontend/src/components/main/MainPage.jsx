import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';


class MainPage extends React.Component {


  render() {
    return (
      <div className="main-page-container">
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
    );
  }
}

export default MainPage;
