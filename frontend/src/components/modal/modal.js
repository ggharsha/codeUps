import React from "react";
import { closeModal } from "../../actions/modal_actions";
import { connect } from "react-redux";

// createReview
// createMessage
// openVideo

function Modal({ modal, closeModal, history }) {
    if (!modal) return null;
    let component;
    switch (modal) {
        // case 'createReview':
        //     component = <CreateReviewContainer history={history} />
        //     break;
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
    modal: state.modal
});

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(Modal);