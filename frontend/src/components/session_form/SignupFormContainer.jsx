import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignupForm from './SignupForm';

const mapStateToProps = (state) => {
  return {
    signedIn: state.session.signedIn,
    errors: state.errors.session
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (user) => dispatch(signup(user))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);