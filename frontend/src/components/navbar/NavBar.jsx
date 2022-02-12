import React from 'react';
import { Link } from 'react-router-dom'
import SearchBarContainer from './search/SearchBarContainer';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
      if (this.props.loggedIn) {
        return (
            <div className="nav-bar-links">
              <div className="user-logout-container">
                <Link className="user-profile-container">
                  <i class="fa-solid fa-user"></i>
                </Link>
                <button className="session-buttons logout" onClick={this.logoutUser}>Logout</button>
              </div>
            </div>
        );
      } else {
        
        return (
            <div className="nav-bar-links">
                <Link className="session-buttons signup" to={'/signup'}>Sign Up</Link>
                <Link id="login" className="session-buttons" to={'/login'}>Login</Link>
            </div>
        );
      }
  }

  render() {
      return (
        <div className="nav-bar-container">
          <div className="nav-bar-wrapper">
              <Link to={'/index'}>
                <img className="logo" src={require('../../images/logo.jpg')}/>
              </Link>
          
            {this.props.loggedIn && <SearchBarContainer />}
            {this.getLinks()}
          </div>
        </div>
      );
  }
}

export default NavBar;
