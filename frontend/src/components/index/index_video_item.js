import React from "react";

const IndexVideoItem = ({ video }) => (
    <li className="video-index-item">
        <video width="400" key={video._id} controls>
            <source src={video.videoUrl} type="video/mp4" />
            <source src={video.videoUrl} type="video/ogg" />
            Your browser does not support HTML video.
        </video>
    </li>
);

export default IndexVideoItem;