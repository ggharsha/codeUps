import React from 'react';
import LoginFormContainer from './LoginFormContainer';

class LoginPage extends React.Component {

  render() {
    return (
      <div className='login-page'>
        <div className='login-form-box'>
          <LoginFormContainer />
        </div>
        <img className='login-splash' src={require('../../images/login.jpg')} />
      </div>
    )
  }
}

export default LoginPage;