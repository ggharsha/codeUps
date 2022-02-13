import React from 'react'

export default class CreateMessageModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            senderId: this.props.currentUser.id,
            receiverId: this.props.profileUser._id,
            messages: [""]
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let action;
        if (this.props.currentInbox.length > 0) action = this.props.updateInbox;
        else action = this.props.createInbox;
        let inbox;
        inbox = this.state;
        inbox.messages = this.props.currentInbox.concat(inbox.messages);
        console.log(inbox)
        console.log(action)
        action(inbox).then(() => this.props.closeModal());
        // check if currentInbox empty, and add state.msg to currentInbox and then create/update
    }

    update() {
        return e => this.setState({ ["messages"]: [e.currentTarget.value] });
    }

    render() {
        return (
            <div className='create-message-container'>
                <div className='create-message-form-container'>
                    <form onSubmit={e => this.handleSubmit(e)} className='create-message-form'>
                        <textarea 
                            value={this.state.messages}
                            onChange={this.update()}
                        />
                        <button type='submit'>Send Message</button>
                    </form>
                </div>
            </div>
        )
    }
}