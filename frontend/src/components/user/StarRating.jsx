import React from 'react'
import { useState } from 'react';

const StarRating = ({ updateStars, numStars }) => {

    const [rating, setRating] = useState(numStars)
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
                        <i className={ratingValue <= (hover || rating) ? "fa-solid fa-star active" : "fa-solid fa-star"}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                            />
                    </label>
                )

            })}
        </div>
    )
}
export default StarRating;