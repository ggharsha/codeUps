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
      languages: {
        Ruby: false,
        JavaScript: false,
        Python: false,
        Java: false,
        C: false,
        HTML: false,
        CSS: false
      },
      errors: {}
    }

    console.log(this.state)
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
    // this.props.signup(this.state)
    //   .fail(() => this.setState({errors: this.props.errors}))
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
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className='username-container'>
            <div>Username</div>
            <input id='username' type='text' value={this.state.username} onChange={this.update('username')} />
          </div>
          <div className='email-container'>
            <div>Email</div>
            <input id='email' type='text' value={this.state.email} onChange={this.update('email')} />
          </div>
          <div className='password-container'>
            <div>Password</div>
            <input id='password' type='password' value={this.state.password} onChange={this.update('password')} />
          </div>
          <div className='password2-container'>
            <div>Confirm Password</div>
            <input id='password2' type='password' value={this.state.password2} onChange={this.update('password2')} />
          </div>
          <div className='user-type-container'>
            <div>Are you a</div>
            <div className='radio-button-group'>
              <input 
                type='radio'
                value='Student'
                checked={this.state.role === 'Student'}
                onChange={this.update('role')}
              />Student
              <input 
                type='radio'
                value='Tutor'
                checked={this.state.role === 'Tutor'}
                onChange={this.update('role')}
              />Teacher
            </div>
          </div>
          <div className='language-container'>
            <div>Select your language(s)</div>
            <div className='single-checkbox'>
              <input type='checkbox' value='Ruby' onChange={(e) => this.updateCheckbox(e, 'Ruby')} />Ruby
            </div>
            <div className='single-checkbox'>
              <input type='checkbox' value='JavaScript' onChange={(e) => this.updateCheckbox(e, 'JavaScript')} />JavaScript
            </div>
            <div className='single-checkbox'>
              <input type='checkbox' value='Python' onChange={(e) => this.updateCheckbox(e, 'Python')} />Python
            </div>
            <div className='single-checkbox'>
              <input type='checkbox' value='Java' onChange={(e) => this.updateCheckbox(e, 'Java')} />Java
            </div>
            <div className='single-checkbox'>
              <input type='checkbox' value='C' onChange={(e) => this.updateCheckbox(e, 'C')} />C
            </div>
            <div className='single-checkbox'>
              <input type='checkbox' value='HTML' onChange={(e) => this.updateCheckbox(e, 'HTML')} />HTML
            </div>
            <div className='single-checkbox'>
              <input type='checkbox' value='CSS' onChange={(e) => this.updateCheckbox(e, 'CSS')} />CSS
            </div>
          </div>
          <button type='submit'>Sign up</button>
        </form>
        {this.renderErrors()}
      </div>
    )
  }

}

export default SignupForm;