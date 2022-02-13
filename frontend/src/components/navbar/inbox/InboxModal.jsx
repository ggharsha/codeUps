import React from "react";
import InboxItem from "./InboxItem";

export default class InboxModal extends React.Component {
    render() {
        return (
            <div className="inbox-modal-container">
                <div className="message-list-container">
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