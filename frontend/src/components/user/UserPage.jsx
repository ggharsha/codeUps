import React from 'react';
import UserDisplay from './UserDisplay'

class UserPage extends React.Component {

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }

  render() {
    const { user } = this.props;
    if (!user) {return null}
    return(
      <div className='user-page-content'>
        <UserDisplay 
          user={user}
          openModal={this.props.openModal}
        />
        {/* add review here */}
      </div>
    )
  }
}

export default UserPage;