import React from "react";

export default class CreateReview extends React.Component {
    render() {
        return (
            <div>
                {this.props.profileUser.username}
            </div>
            // <div className="create-review-container">
            //     <form>

            //         <button type="submit">Submit</button>
            //     </form>
            // </div>
        )
    }
}