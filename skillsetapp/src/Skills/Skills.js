import React from "react";
import './Skills.css';
import Footer from "../Footer/Footer";

function Skills() {
    return (
        <>
        <div className="contai">
            <div className="hea">
                <br></br><br></br><br></br><h1>Master In-Demand Skills Today</h1>
                <p>
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                    veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                    voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                    magni dolores eos qui ratione"
                </p>
            </div>

            <div className="table-container">
                <div className="cont">
                    <div className="item">Fundamental of Software Skills</div>
                    <div className="item">Introduction to Trending Technologies</div>
                    <div className="item">Tutorials in Web Development</div>
                </div>
                <div className="buttons">
                    <button className="blue-button">Explore More</button>
                    <button className="blue-button">Beginner's Level</button>
                    <button className="blue-button">Beginner's Level</button>
                </div>
            </div>

            <div className="skillsDiv">
                <h1>Explore Our Courses</h1>
                <p>
                    Discover a variety of courses designed to help you develop essential skills for personal and professional growth. 
                    Whether you're looking to improve your communication, time management, or leadership abilities, we have a course for you.
                </p>
                <div className="results">Results (78)</div>

                <div className="course-grid">
                    {/* Course Cards */}
                    {[
                        {
                            title: "Effective Communication Skills",
                            provider: "SkillUp",
                            duration: "5 hours",
                            rating: "1.2k+",
                            imgSrc: "https://storage.googleapis.com/a1aa/image/ImB3LJ1jT7ZQAFeeyt8Lwf6BTDLE7c6vhbedxwe5ZnQqWPVdC.jpg",
                            level: "Beginner",
                            details: "Learn how to communicate effectively in both personal and professional settings."
                        },
                        {
                            title: "Time Management Mastery",
                            provider: "ProductivityPro",
                            duration: "8 hours",
                            rating: "2.3k+",
                            imgSrc: "https://storage.googleapis.com/a1aa/image/e3wvTJ5luoUCLatWAAWapfXO1zaP5xiLdrEVCnTZqdk36pqTA.jpg",
                            level: "Intermediate",
                            details: "Master the art of time management to increase productivity and achieve your goals."
                        },
                        // Add more courses here...
                    ].map((course, index) => (
                        <div className="course-card" key={index}>
                            <img alt={course.title} height="150" src={course.imgSrc} width="300"/>
                            <div className="course-content">
                                <div>
                                    <span className="course-badge">{course.level}</span>
                                    <span className="course-badge">Soft Skill</span>
                                </div>
                                <div className="course-title">{course.title}</div>
                                <div className="course-provider">{course.provider}</div>
                                <div className="course-meta">
                                    <div>{course.duration}</div>
                                    <div className="rating">
                                        {[...Array(5)].map((_, i) => (
                                            <i className={i < 4 ? "fas fa-star" : "fas fa-star-half-alt"} key={i}></i>
                                        ))}
                                        <span> ({course.rating})</span>
                                    </div>
                                </div>
                                <div className="course-details">{course.details}</div>
                            </div>
                            <div className="course-actions">
                                <div className="wishlist">
                                    <i className="far fa-heart"></i>
                                </div>
                                <button className="view-course">View Course</button>
                                <button className="enroll">Enroll</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="more-courses">
                    <button>More Courses</button>
                </div>
            </div>
        </div>
        <Footer />
        </>
    );
}

export default Skills;
