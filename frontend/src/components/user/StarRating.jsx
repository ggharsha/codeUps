import React from 'react'
import { useState } from 'react';

const StarRating = ({ updateStars }) => {

    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(null)
    const updateRating = (ratingValue) => {
        setRating(ratingValue);
        updateStars(ratingValue);
    }

    return (
        <div className='rating-stars'>
            {[...Array(5)].map((star, idx) => {
                const ratingValue = idx + 1;
                return (
                    <label key={idx}>
                        <input type='radio' name='rating' value={ratingValue}
                            onClick={() => updateRating(ratingValue)}
                        />
                        <i className="fa-solid fa-star"
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                            color={ratingValue <= (hover || rating) ? "#fea41d" : "rgb(234,237,237)"} />
                    </label>
                )

            })}
        </div>
    )
}
export default StarRating;