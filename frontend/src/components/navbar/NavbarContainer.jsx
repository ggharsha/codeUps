import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import { fetchAllInboxes } from '../../actions/inbox_actions';

import NavBar from './NavBar';

// const parseUrl = window.location.href.split('/')

const mapStateToProps = (state, ownProps) => ({
  loggedIn: state.session.isAuthenticated,
  currentUser: state.session.user,
  inbox: state.inbox
  // currentUrl: parseUrl
});

const mDTP = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal)),
  fetchAllInboxes: userId => dispatch(fetchAllInboxes(userId))
})

export default connect(
  mapStateToProps,
  mDTP
)(NavBar);
