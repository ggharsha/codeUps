import React from "react";
import { Link } from "react-router-dom";

const IndexStudentItem = ({ student, fetchUser }) => (
    <li className="student-index-item">
        <img className="index-item-image" src="#"/>
        <Link to={`/user/${student._id}`}>{student.username}</Link>
        <ul className="student-languages">
            {student.languages.map((lang, idx) => (
                <li 
                    key={idx}
                    className="language"
                >{lang}</li>
            ))}
        </ul>
    </li>
);

export default IndexStudentItem;