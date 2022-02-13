import React from "react";
import InboxItem from "./InboxItem";

export default class InboxModal extends React.Component {
    render() {
        return (
            <div className="inbox-modal-container">
                <div className="message-list-container">
                    <h3>Inbox</h3>
                    <ul className="message-list">
                        {this.props.messages.map(msg => (
                            <InboxItem msg={msg} />
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}