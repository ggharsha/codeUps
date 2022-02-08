import React from 'react';
import SignupFormContainer from './SignupFormContainer'

class SignupPage extends React.Component {

  render() {
    return (
      <div className='signup-page'>
        <img className='signup-splash' src={require('../../images/signup.jpg')} />
        <div className='signup-form-box'>
          <SignupFormContainer />
        </div>
      </div>
    )
  }
}

export default SignupPage;