import React,{ useState, useEffect } from "react";
import CourseList from "../components/courses/CourseList";
import CourseService from "../services/CourseService";
import CreateCourseLogo from "../components/courses/CreateCourseLogo";
import styled from "styled-components";

const D = styled.div`
display:flex;
flex-direction: column;
justify-content: center;

@media (max-width: 550px) {
  zoom: 0.75;
-moz-transform: scale(0.75);
-moz-transform-origin: 0 0;
-o-transform: scale(0.75);
-o-transform-origin: 0 0;
-webkit-transform: scale(0.75);
-webkit-transform-origin: 0 0; 
}
@media (max-width: 850px) {
  zoom: 0.85;
-moz-transform: scale(0.85);
-moz-transform-origin: 0 0;
-o-transform: scale(0.85);
-o-transform-origin: 0 0;
-webkit-transform: scale(0.85);
-webkit-transform-origin: 0 0; 
}
`



const CourseContainer = () => {
   //state - all courses
   const [ courses, setCourses ] = useState([]);
   
 //get courses
   useEffect(() => {
    CourseService.getCourses()
      .then(c => setCourses(c))
  }, [])
  //create courses
    const createCourse = (newCourse) => {
      CourseService.postCourse(newCourse)
        .then(newCourse => setCourses([...courses, newCourse]))
    }
 //delete courses
  const deleteCourses = (idToDelete) => {
    CourseService.deleteCourse(idToDelete)
      .then(() => {
      
        setCourses(courses.filter(course => course.id !== idToDelete))
      })
  }

    return(
        <D>
             <CreateCourseLogo createCourse={createCourse}/>
              <CourseList courses={courses} deleteCourses={deleteCourses}/>  
        </D>
    );
}

export default CourseContainer;