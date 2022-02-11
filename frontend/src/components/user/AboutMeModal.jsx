import React from "react";

export default class AboutMe extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.profileUser;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateUser(this.state)
        .then(() => this.props.closeModal())
    }

    render() {
        return (
            <div className="about-me-form-container">
                <h3>Tell us about yourself</h3>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <textarea 
                        value={this.state.about}
                        onChange={this.update("about")}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}