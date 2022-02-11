import React from "react";
import { Link } from "react-router-dom";

const TutorSearchItem = ({ tutor, fetchUser }) => (
    <Link
        to={`/user/${tutor._id}`}
        onClick={() => fetchUser(tutor._id)}
    >
        <li className="search-result-item">
            <p>{tutor.username}</p>
        </li>
    </Link>
)    

export default TutorSearchItem;