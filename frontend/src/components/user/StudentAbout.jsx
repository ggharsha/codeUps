import React from 'react';

class StudentAbout extends React.Component {

  render() {
    const { user } = this.props;

    return (
      <div className='about-container'>
        <div className='about-content'>
          <button className='add-about'>Edit About</button>
          <h1 className='about-header'>
            About <span>{user.username}</span>
          </h1>
          <p>
            {user.about}
          </p>
        </div>
      </div>
    )
  }
}

export default StudentAbout;