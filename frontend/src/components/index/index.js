import React from "react";

export default class Index extends React.Component {
    componentDidMount() {
        this.props.fetchStudents();
        this.props.fetchTutors();
        //this.props.fetchVideos();
    }

    render() {
        if (!this.props.tutors || !this.props.students) return null;
        return (
            <div className="index-container">
                <div className="index-video-container">
                    <h3>Videos</h3>
                    <ul className="video-carousel">

                    </ul>
                </div>
                <div className="index-tutor-container">
                    <h3>Tutors</h3>
                    <ul className="tutor-carousel">

                    </ul>
                </div>
                <div className="index-student-container">
                    <h3>Students</h3>
                    <ul className="student-carousel">

                    </ul>
                </div>
            </div>
        )
    }
}