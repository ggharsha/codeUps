import React from 'react';

const VideoSearchItem = ({ video, getVideo, openModal }) => (
    <li 
        className='search-result-item'
        onClick={() => openModal({
            type: 'openVideoRes', 
            videoId: video._id
        })}
    >
        <p>{video.title}</p>
    </li>
)    

export default VideoSearchItem;