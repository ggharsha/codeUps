import React from "react";
import { closeModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import CreateReviewContainer from "../user/CreateReviewContainer";

// createReview
// createMessage
// openVideo

function Modal({ modal, closeModal, history }) {
    if (!modal) return null;
    let component;
    switch (modal) {
        case 'createReview':
            component = <CreateReviewContainer history={history} />
            break;
        // case 'createMessage':
        //     component = <CreateMessageContainer history={history} />
        //     break;
        // case 'openVideo':
        //     component = <OpenVideoContainer />
        //     break;
        default: 
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                { component }
            </div>
        </div>
    )
}

const mSTP = state => ({
    modal: state.modal,
    profileUser: state.user.profileUser
});

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(Modal);