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
          <div>
            <Link className="session-buttons joinus" to={'/signup'}>Join Us</Link>
          </div>
        </div>
        <div className="main-page-right">
          <img className='splash-photo' src={require('../../images/splash.png')} />
        </div>
        {/* <h1>A Twitter Clone</h1>
        <footer>
          Copyright &copy; 2019 Chirper
        </footer> */}
      </div>
    );
  }
}

export default MainPage;
