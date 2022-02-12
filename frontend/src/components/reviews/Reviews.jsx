import React from 'react';
import ReviewItem from './ReviewItem';

class Reviews extends React.Component {
    constructor(props) {
        super(props)
        // this.findStudent = this.findStudent.bind(this)
    }

    componentDidMount() {
        this.props.getReviews(this.props.userId);
        this.props.fetchStudents();
        this.props.fetchTutors();
        this.props.fetchUser(this.props.userId);
    }

    // findStudent(studentId) {
    //     return this.props.students.filter(student => student._id === studentId)[0].username
    // }

    
    render() {
        if (!this.props.reviews || !Object.keys(this.props.students).length) return null;

        const { onStudentPage, tutors } = this.props;

        return (
            <div className="reviews-container">
                <h2 className='review-title'>Reviews</h2>
                <ul>
                    {this.props.reviews.map((review, idx) => <ReviewItem 
                        key={idx} 
                        review={review} 
                        student={this.props.students[review.studentId]}
                        tutor={tutors[review.tutorId]}
                        onStudentPage={onStudentPage}
                    />)}
                </ul>
            </div>
        )
    }
}

export default Reviews;