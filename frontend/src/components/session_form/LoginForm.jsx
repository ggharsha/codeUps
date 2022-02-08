import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errors: {}
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.errors !== this.props.errors) {
      this.setState({errors: this.props.errors})
    }
  }


  update(field) {
    return (e) => this.setState({ [field] : e.currentTarget.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state)
  }
  
  renderErrors() {
    return(
      <ul className='errors-list'>
        {Object.keys(this.state.errors).map((error, i) => (
          <li className='error-item' key={i}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }


  render() {
    return (
      <div className='login-form-container'>
        <h1 className='login-title'>Login</h1>
        <form onSubmit={(e) => this.handleSubmit(e)}>
        <div className='username-container'>
          <div>Username</div>
          <input id='username' type='text' value={this.state.username} onChange={this.update('username')} />
        </div>
        <div className='password-container'>
          <div>Password</div>
          <input id='password' type='password' value={this.state.password} onChange={this.update('password')} />
        </div>
        <button type='submit'>Login</button>
        </form>
        {this.renderErrors()}
      </div>
    )
  }

}

export default LoginForm;