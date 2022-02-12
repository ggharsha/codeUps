import React from "react";

const IndexTutorItem = ({ tutor, fetchUser }) => (
    <li className="tutor-index-item">
        <img className="index-item-image" src={tutor.photoUrl} />
        <h2>{tutor.username}</h2>
        <ul className="languages tutor-languages">
            {tutor.languages.map((lang, idx) => (
                <li className='tutor-language' key={idx}>
                    {lang}
                </li>
            ))}
        </ul>
    </li>
);

export default IndexTutorItem;