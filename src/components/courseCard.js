import React from "react";

function CourseCard(courses){
    return(
        <div className="course-container">
            <p className="course-head">{courses.name}</p>
        </div>
    );
}
export default CourseCard;