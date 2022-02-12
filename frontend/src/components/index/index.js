import React from "react";
import IndexTutorItem from "./index_tutor_item";
import IndexStudentItem from "./index_student_item";
import IndexVideoItem from "./index_video_item";
import NavbarContainer from "../navbar/NavbarContainer";
import { Link } from "react-router-dom";

export default class Index extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0);
        this.props.fetchStudents();
        this.props.fetchTutors();
        this.props.getVideos();
    }

    render() {
        if (!this.props.tutors || !this.props.students || !this.props.videos) return null;
        return (
            <div className="index-container">
                <NavbarContainer />
                <div className="index-video-container">
                    <h3>Videos</h3>
                    <ul className="video-carousel">
                        {this.props.videos.map(video => (
                            <IndexVideoItem 
                                video={video}
                                key={video._id}
                                fetchVideo={this.props.fetchVideo}
                            />
                        ))}
                    </ul>
                </div>
                <div className="index-tutor-container">
                    <h3>Tutors</h3>
                    <ul className="carousel">
                        {this.props.tutors.map((tutor, idx) => (
                            <Link 
                                key={tutor._id}
                                to={`/user/${tutor._id}`}>
                                <IndexTutorItem 
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
                            <Link 
                                key={student._id}
                                to={`/user/${student._id}`}>
                                <IndexStudentItem 
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