import React from "react";
import FullConversationContainer from "./FullConversationContainer";
import InboxItemContainer from "./InboxItemContainer";

export default class InboxModal extends React.Component {
    constructor(props) {
        super(props);
        this.convertIntoConversations = this.convertIntoConversations.bind(this);
        this.state = {
            display: "inbox"
        }
    }

    convertIntoConversations() {
        // const sentMessages = this.props.messages.filter(message => message.senderId === this.props.currentUserId);
        return this.props.messages.filter(message => message.receiverId === this.props.currentUserId);
        // const messagesObj = {};
        // sentMessages.forEach(message => {
        //     if (messagesObj[message.receiverId]) {
        //         messagesObj[message.receiverId] = Object.assign({}, messagesObj[message.receiverId], message);
        //     } else messagesObj[message.receiverId] = message;
        // });
        // receivedMessages.forEach(message => {
        //     if (messagesObj[message.senderId]) {
        //         const oldMessage = messagesObj[message.senderId].messages;
        //         const newMessage = oldMessage.concat
        //         messagesObj[message.senderId] = Object.assign({}, messagesObj[message.senderId], message);
        //     } else messagesObj[message.senderId] = message;
        // });
        // console.log(messagesObj)
        // return Object.values(messagesObj);
    }

    render() {
        return (
            <div className="inbox-modal-container">
                <div className="message-list-container">
                    <h3>Inbox</h3>
                    {(this.state.display === "inbox") ?
                        <ul className="message-list">
                            {this.convertIntoConversations().map((message, idx) => (
                                <li 
                                    className='conversation-list-item'
                                    onClick={() => this.setState({ ["display"]: message._id })}
                                    key={idx} 
                                >
                                    <InboxItemContainer message={message} />
                                </li>
                            ))}
                        </ul> : 
                        <div>
                            <FullConversationContainer conversationId={this.state.display} />
                            <p onClick={() => this.setState({ ["display"]: "inbox" })}>Back</p>
                        </div>
                    }
                </div>
            </div>
        )
    }
}