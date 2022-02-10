import React from "react";
import { Link } from "react-router-dom";

const IndexTutorItem = ({ tutor, fetchUser }) => (
    <li className="tutor-index-item">
        <img className="index-item-image" src="#" />
        <Link to={`/user/${tutor._id}`}>{tutor.username}</Link>
        <ul className="tutor-languages">
            {tutor.languages.map((lang, idx) => (
                <li key={idx}>
                    {lang}
                </li>
            ))}
        </ul>
    </li>
);

export default IndexTutorItem;