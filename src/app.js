import React from "react";
import Navbar from "./components/navbar";
import CourseCard from "./components/courseCard";
import courses from "./components/course_data";

function App(){
    const course_list = courses.map((course)=>{
        return <CourseCard
                name = {course.name}
            />
    });
    console.log(course_list);
    return(
        <div className="app-container">
            <Navbar />
            {course_list}
        </div>
    );
}

export default App;