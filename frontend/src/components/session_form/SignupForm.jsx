import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      password2: '',
      role: '',
      languages: {
        Ruby: false,
        JavaScript: false,
        Python: false,
        Java: false,
        C: false,
        R: false,
        HTML: false,
        CSS: false
      },
      errors: {}
    }
  }

  componentDidUpdate(prevProps) {

    if (this.props.signedIn) {
      let language = Object.keys(this.state.languages).filter(lang => this.state.languages[lang])

      const user = {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        password2: this.state.password2,
        role: this.state.role,
        languages: language
      }
      this.props.login(user)
    } else if (prevProps.errors !== this.props.errors) {
      this.setState({errors: this.props.errors})
    }
  }

  update(field) {
    return (e) => this.setState({ [field] : e.currentTarget.value })
  }

  updateCheckbox(e, language) {
    this.setState({languages : {
      ...this.state.languages,
      [language]: (!this.state.languages[language])
      }
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    let language = Object.keys(this.state.languages).filter(lang => this.state.languages[lang])
    const user = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      role: this.state.role,
      languages: language
    }

    this.props.signup(user)
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
      <div className='signup-form-container'>
        <h1 className='signup-title'>Sign Up</h1>
        <p className='signup-description'>Start learning today</p>
        <form className='signup-form' onSubmit={(e) => this.handleSubmit(e)}>
          <div className='username-container'>
            <div className='input-title'>Username</div>
            <input id='username' type='text' value={this.state.username} onChange={this.update('username')} />
          </div>
          <div className='email-container'>
            <div className='input-title'>Email</div>
            <input id='email' type='text' value={this.state.email} onChange={this.update('email')} />
          </div>
          <div className='password-container'>
            <div className='input-title'>Password</div>
            <input id='password' type='password' value={this.state.password} onChange={this.update('password')} />
          </div>
          <div className='password2-container'>
            <div className='input-title'>Confirm Password</div>
            <input id='password2' type='password' value={this.state.password2} onChange={this.update('password2')} />
          </div>
          <div className='user-type-container'>
            <div className='input-title'>Are you a</div>
            <div className='radio-button-group'>
              <label>
                <input 
                  type='radio'
                  value='Student'
                  checked={this.state.role === 'Student'}
                  onChange={this.update('role')}
                />Student
              </label>
              <label>
                <input 
                  type='radio'
                  value='Tutor'
                  checked={this.state.role === 'Tutor'}
                  onChange={this.update('role')}
                />Teacher
              </label>
            </div>
          </div>
          <div className='input-title'>Select your language(s)</div>
          <div className='language-container'>
            <div className='single-checkbox'>
              <label>
                <input type='checkbox' value='Ruby' onChange={(e) => this.updateCheckbox(e, 'Ruby')} />Ruby
              </label>
            </div>
            <div className='single-checkbox'>
              <label>
                <input type='checkbox' value='JavaScript' onChange={(e) => this.updateCheckbox(e, 'JavaScript')} />
                JavaScript
              </label>
            </div>
            <div className='single-checkbox'>
              <label>
                <input type='checkbox' value='Python' onChange={(e) => this.updateCheckbox(e, 'Python')} />Python
              </label>
            </div>
            <div className='single-checkbox'>
              <label>
                <input type='checkbox' value='Java' onChange={(e) => this.updateCheckbox(e, 'Java')} />Java
              </label>
            </div>
            <div className='single-checkbox'>
              <label>
                <input type='checkbox' value='C' onChange={(e) => this.updateCheckbox(e, 'C')} />C
              </label>
            </div>
            <div className='single-checkbox'>
              <label>
                <input type='checkbox' value='R' onChange={(e) => this.updateCheckbox(e, 'R')} />R
              </label>
            </div>
            <div className='single-checkbox'>
              <label>
                <input type='checkbox' value='HTML' onChange={(e) => this.updateCheckbox(e, 'HTML')} />HTML
              </label>
            </div>
            <div className='single-checkbox'>
              <label>
                <input type='checkbox' value='CSS' onChange={(e) => this.updateCheckbox(e, 'CSS')} />CSS
              </label>
            </div>
          </div>
          <button className='signup-btn' type='submit'>Sign up</button>
        </form>
        {this.renderErrors()}
      </div>
    )
  }

}

export default SignupForm;