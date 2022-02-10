import React from 'react';

class UserDisplay extends React.Component {

  render() {
    debugger
    const {user} = this.props;
    return (
      <div>{user.username}</div>
    )
  }
}

export default UserDisplay;