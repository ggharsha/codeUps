import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

import NavBar from './NavBar';

// const parseUrl = window.location.href.split('/')

const mapStateToProps = (state, ownProps) => ({
  loggedIn: state.session.isAuthenticated,
  currentUser: state.session.user,
  // currentUrl: parseUrl
});

export default connect(
  mapStateToProps,
  { logout }
)(NavBar);
