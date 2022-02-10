import React from 'react';

class UserDisplay extends React.Component {

  render() {
    const {user} = this.props;
    return (
      <div>{user.username}</div>
    )
  }
}

export default UserDisplay;