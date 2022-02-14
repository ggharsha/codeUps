import React from 'react'

export default class FullConversation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            senderId: this.props.currentUser.id,
            receiverId: this.props.otherUser._id,
            messages: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.mergeConversations = this.mergeConversations.bind(this);
        this.merge = this.merge.bind(this);
    }

    update() {
        return e => this.setState({ ["messages"]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateInbox(this.state);
    }

    mergeConversations() {

    }

    merge(arr1, arr2) {

    }

    render() {
        return (
            null
        )
    }
}