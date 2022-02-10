import React from "react";
import IndexTutorItem from "./index_tutor_item";
import IndexStudentItem from "./index_student_item";
import IndexVideoItem from "./index_video_item";
import NavbarContainer from "../navbar/NavbarContainer";
import { Link } from "react-router-dom";

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
                <NavbarContainer />
                <div className="index-video-container">
                    <h3>Videos</h3>
                    <ul className="video-carousel">
                        {/* this.props.videos.map(video => (
                            <IndexVideoItem 
                                video={video}
                                key={video.id}
                                fetchVideo={this.props.fetchVideo}
                            />
                        )) */}
                    </ul>
                </div>
                <div className="index-tutor-container">
                    <h3>Tutors</h3>
                    <ul className="carousel">
                        {this.props.tutors.map((tutor, idx) => (
                            <Link to={`/user/${tutor._id}`}>
                                <IndexTutorItem 
                                    key={tutor._id}
                                    tutor={tutor}
                                    fetchUser={this.props.fetchUser}
                                />
                            </Link>
                        ))}
                    </ul>
                </div>
                <div className="index-student-container">
                    <h3>Students</h3>
                    <ul className="carousel">
                        {this.props.students.map((student, idx) => (
                            <Link to={`/user/${student._id}`}>
                                <IndexStudentItem 
                                    key={student._id}
                                    student={student}
                                    fetchUser={this.props.fetchUser}
                                />
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}