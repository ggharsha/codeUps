import React from 'react';
import { Link } from 'react-router-dom';

const VideoSearchItem = ({ video, getVideo }) => (
    <Link
        to={`/user/${video.authorId}`}
        onClick={() => getVideo(video._id)}
    >
        <li className="search-result-item">
            <p>{video.title}</p>
        </li>
    </Link>
)    

export default VideoSearchItem;