import React from "react";
import { Link } from "react-router-dom";

const IndexStudentItem = ({ student, fetchUser }) => (
    <li className="student-index-item">
        <img className="index-item-image" src={student.photoUrl} />
        <h2>{student.username}</h2>
        <ul className="languages student-languages">
            {student.languages.map((lang, idx) => (
                <li 
                    key={idx}
                    className="student-language"
                >{lang}</li>
            ))}
        </ul>
    </li>
);

export default IndexStudentItem;