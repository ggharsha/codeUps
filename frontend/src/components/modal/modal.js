import React from "react";
import { closeModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import CreateReviewContainer from "../user/CreateReviewContainer";
import EditReviewContainer from "../user/EditReviewContainer";
import AboutMeModalContainer from "../user/AboutMeModalContainer";
import InboxModalContainer from "../navbar/inbox/InboxModalContainer";
import CreateMessageModalContainer from "../user/CreateMessageModalContainer";
import VideoModal from "../navbar/search/VideoModal";
// import MessageShowContainer from ""

// createMessage

function Modal({ modal, closeModal, history, profileUser, video }) {
    if (!modal) return null;
    let component;
    switch (modal.type) {
        case 'createReview':
            component = <CreateReviewContainer history={history} profileUser={profileUser} />
            break;
        case 'editReview':
            component = <EditReviewContainer profileUser={profileUser} />
            break;
        case 'aboutMe':
            component = <AboutMeModalContainer profileUser={profileUser} />
            break;
        // case 'openInbox':
        //     component = <InboxModalContainer />
        //     break;
        // case 'createMessage':
        //     component = <CreateMessageModalContainer profileUser={profileUser} />
        //     break;
        case 'openVideoRes': 
            component = <VideoModal videoId={modal.videoId} />
            break;
        // case 'openMessage':
        //      component = <MessageShowContainer />
        //      break;
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
    profileUser: Object.values(state.user.profileUser)[0],
});

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(Modal);