import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      password2: '',
      role: '',
      languages: [],
      errors: {}
    }
  }

  update(field) {
    return (e) => this.setState({ [field] : e.currentTarget.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state)
      .fail(() => this.setState({errors: this.props.errors}))
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => {
          return (
            <li key={i}>
              {this.state.errors[error]}
            </li>
          )
        })}
      </ul>
    )
  }

  render() {
    return (
      <div className='signup-form-container'>
        <h1 className='signup-title'>Sign Up</h1>
        <form onSubmit={() => this.handleSubmit()}>
          <div className='username-input'>
            <div>USERNAME</div>
            <input id='username' type='text' value={this.state.username} onChange={this.update('username')} />
          </div>
          <div className='password-input'>
            <div>PASSWORD</div>
            <input id='password' type='password' value={this.state.username} onChange={this.update('password')} />
          </div>

        </form>
      </div>
    )
  }

}

export default SignupForm;