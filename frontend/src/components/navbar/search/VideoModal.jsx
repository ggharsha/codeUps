import React from 'react';

const VideoModal = ({ video }) => (
    <div>
        <video className='carousel-video' controls>
            <source src={video.videoUrl} type="video/mp4" />
            <source src={video.videoUrl} type="video/ogg" />
            Your browser does not support HTML video.
        </video>
    </div>
);

export default VideoModal;