import React,{ useState, useEffect } from "react";
import LessonService from "../services/LessonService";
import LessonList from "../components/lessons/LessonList";
import CourseService from "../services/CourseService";
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



const LessonContainer = () => {
    //set up state
   const [ lessons, setLessons ] = useState([]);
   const [courses, setCourses] = useState([]);

      //get courses
      useEffect(() => {
        CourseService.getCourses()
          .then(c => setCourses(c))
      }, [])
     
   //get lessons
   useEffect(() => {
    LessonService.getLessons()
      .then(les => setLessons(les))
  }, [])
  //create lesson
   const createLessons = (newLesson) => {
    LessonService.postLesson(newLesson)
      .then(newLesson => setLessons([...lessons, newLesson]))
  }
  //delete lesson
  const deleteLesson = (idToDelete) => {
    LessonService.deleteLesson(idToDelete)
      .then(() => {
        //update lerner state
        setLessons(lessons.filter(lesson => lesson.id !== idToDelete))
      })
  }
    return(
        <D>
              {/* <LessonForm createLessons={createLessons} courses={courses}/> */}
              <LessonList lessons={lessons} deleteLesson={deleteLesson}/>
            
         </D>
    );
}

export default LessonContainer;