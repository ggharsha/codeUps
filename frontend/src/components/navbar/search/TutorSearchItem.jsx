import React from "react";
import { Link } from "react-router-dom";

const TutorSearchItem = ({ tutor, fetchUser }) => (
    <Link
        to={`/user/${tutor._id}`}
        onClick={() => fetchUser(tutor._id)}
    >
        <li >{tutor.username}</li>
    </Link>
)    

export default TutorSearchItem;