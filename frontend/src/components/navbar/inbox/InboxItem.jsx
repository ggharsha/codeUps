import React from 'react';

export default class InboxItem extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.otherUser._id)
    }

    render() {
        if (!this.props.otherUser) return null;
        return (
                <ul className='conversation-list-row'>
                    <li>
                        from: {this.props.otherUser.username}
                    </li>
                    <li>
                        to: {this.props.currentUser.username}
                    </li>
                    <li>
                        body: {this.props.message.messages[this.props.message.messages.length - 1].slice(0, 10)} ...
                    </li>
                </ul>
        )
    }
}
