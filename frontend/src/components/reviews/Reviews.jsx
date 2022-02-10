import React from 'react';
import ReviewItem from './ReviewItem';

class Reviews extends React.Component {
    constructor(props) {
        super(props)
        this.findStudent = this.findStudent.bind(this)
    }

    componentDidMount() {
        this.props.getReviews(this.props.userId);
        this.props.fetchUser(this.props.userId);
        this.props.fetchStudents();
    }

    findStudent(studentId) {
        return this.props.students.filter(student => student._id === studentId)[0].username
    }

    render() {
        if (!this.props.reviews || !this.props.students) return null;

        return (
            <div className="reviews-container">
                <h3>Reviews</h3>
                <ul>
                    {this.props.reviews.map((review, idx) => <ReviewItem 
                        key={idx} 
                        review={review} 
                        username={this.findStudent}
                        />)}
                </ul>
            </div>
        )
    }
}

export default Reviews;