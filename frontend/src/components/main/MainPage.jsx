import React from 'react';
import { Link } from 'react-router-dom';

class MainPage extends React.Component {

  render() {
    return (
      <div className="main-page-container">
        <div className="main-page-left">
          <div className="main-page-tagline">
            
          </div>
          <Link className="session-buttons joinus" to={'/signup'}>Join Us</Link>
        </div>
        <div className="main-page-right">

        </div>

        <h1>A Twitter Clone</h1>
        <footer>
          Copyright &copy; 2019 Chirper
        </footer>
      </div>
    );
  }
}

export default MainPage;
