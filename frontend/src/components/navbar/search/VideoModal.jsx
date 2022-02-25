import React from 'react';
import { connect } from 'react-redux';

const VideoModal = ({ video, videoId }) => {
    return (
        <div>
            <video className='carousel-video' controls>
                <source src={video.videoUrl} type="video/mp4" />
                <source src={video.videoUrl} type="video/ogg" />
                Your browser does not support HTML video.
            </video>
        </div>
    )
};

const mSTP = (state, ownProps) => {
    return {
        video: state.videos.filter(video => video._id === ownProps.videoId)[0]
    }
};



export default connect(mSTP, null)(VideoModal);