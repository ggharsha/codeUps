import React from 'react'

export default class CreateMessageModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: [""]
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        // check if currentInbox empty, and add state.msg to currentInbox and then create/update
    }

    update() {

    }

    render() {
        return (
            null
        )
    }
}