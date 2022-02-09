import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errors: {}
    }

    this.loginDemoStudent = this.loginDemoStudent.bind(this);
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

  loginDemoStudent(e) {
    e.preventDefault();
    this.handleDemoStudentUsername();
  }

  handleDemoStudentUsername() {
    let demoUsername = "DemoStudent".split("");
    let nextLetters = "";
    const demoUsernameType = setInterval(() => {
        if ("DemoStudent" !== this.state.username) {
            nextLetters += demoUsername.shift();
            this.setState({username: nextLetters})
        } else {
            clearInterval(demoUsernameType);
            this.handleDemoStudentPassword();
        }
    }, 100)
}

  handleDemoStudentPassword() {
    let demoPassword = "password".split("");
    let nextLetters = "";
    const demoPasswordType = setInterval(() => {
        if ("password" !== this.state.password) {
            nextLetters += demoPassword.shift();
            this.setState({password: nextLetters})
        } else {
            clearInterval(demoPasswordType);
            const demoUser = {username: "DemoStudent", password: "password"};
            this.props.login(demoUser);
        }
    }, 100)
  }



  render() {
    return (
      <div className='login-form-container'>
        <h1 className='login-title'>Login</h1>
        <form className='login-container' onSubmit={(e) => this.handleSubmit(e)}>
        <div className='username-container'>
          <div className='input-title'>Username</div>
          <input id='username' type='text' value={this.state.username} onChange={this.update('username')} />
        </div>
        <div className='password-container'>
          <div className='input-title'>Password</div>
          <input id='password' type='password' value={this.state.password} onChange={this.update('password')} />
        </div>
        <button className='login-btn' type='submit'>Login</button>
        </form>
        <button className='demo-btn' type='submit' onClick={this.loginDemoStudent}>Demo Student</button>
        <div id="or-divider">
          <div className="or"></div>
          <p>OR</p>
          <div className="or"></div>
        </div>
        <button className='demo-btn' type='submit' onClick={this.loginDemoStudent}>Demo Tutor</button>
        {this.renderErrors()}
      </div>
    )
  }

}

export default LoginForm;