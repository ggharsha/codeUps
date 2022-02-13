import React from 'react';
import StarRating from '../user/StarRating';
import {Link} from 'react-router-dom'

class ReviewItem extends React.Component {
    super(props) {
        constructor(props);
    }

    render() {
        const { student, review, onStudentPage, tutor } = this.props;

        console.log(this.props)
        return (
            <li className="review-item">
                <div className='rating-header'>
                    <Link to={`/user/${student._id}`}>
                        <img className='user-pfp' src={student.photoUrl}/>
                        <p className="review-username">{this.props.student.username}</p>
                    </Link>
                    <ul className='stars'>
                        {[...Array(review.rating)].map((_, index) => {
                            return <i key={index} className='fa-solid fa-star star' />
                        })}
                    </ul>
                </div>
                <div className='review-body-container'>
                    <h3 className='review-relation-title'>
                        <span>{student.username}</span>'s review on {onStudentPage ? 
                            <Link to={`/user/${tutor._id}`}>{tutor.username}</Link> : 
                            <span>{tutor.username}</span>}
                    </h3>
                    <p className='review-body'>{this.props.review.text}</p>
                </div>
            </li>
        )
    }
}

export default ReviewItem;