import React from 'react';
import StarRating from '../user/StarRating';
import {Link} from 'react-router-dom'

class ReviewItem extends React.Component {
    super(props) {
        constructor(props);
    }

    render() {
        const { student, review } = this.props;
        console.log(student)
        return (
            <li className="review-item">
                <div className='rating-header'>
                    <Link to={`/user/${student._id}`}>
                        <img className='user-pfp' src={student.photoUrl}/>
                        <p className="review-username">{this.props.student.username}</p>
                    </Link>
                    <ul className='stars'>
                        {[...Array(review.rating)].map((_, index) => {
                            return <i className='fa-solid fa-star star' />
                        })}
                    </ul>
                </div>
                <p className='review-body'>{this.props.review.text}</p>
            </li>
        )
    }
}

export default ReviewItem;