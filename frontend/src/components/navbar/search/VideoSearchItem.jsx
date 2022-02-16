import React from 'react';
import { Link } from 'react-router-dom';

const VideoSearchItem = ({ video, getVideo, openModal }) => (
    <li 
        className='search-result-item'
        onClick={() => getVideo(video._id)
        .then(() => openModal('openVideoRes'))}
    >
        <p>{video.title}</p>
    </li>
)    

export default VideoSearchItem;