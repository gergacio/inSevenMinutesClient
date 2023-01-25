import React,{ useState, useEffect } from "react";
import CourseList from "../components/courses/CourseList";
import CourseService from "../services/CourseService";
import CreateCourseLogo from "../components/courses/CreateCourseLogo";
import styled from "styled-components";



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
        <div>
             {/* <CourseForm createCourse={createCourse}/> */}
             <CreateCourseLogo createCourse={createCourse}/>
              <CourseList courses={courses} deleteCourses={deleteCourses}/>
            
        </div>
    );
}

export default CourseContainer;