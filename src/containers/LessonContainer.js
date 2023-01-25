import React,{ useState, useEffect } from "react";
import LessonService from "../services/LessonService";
import LessonList from "../components/lessons/LessonList";
import LessonForm from "../components/lessons/LessonForm";
import CourseService from "../services/CourseService";



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
        <div>
              {/* <LessonForm createLessons={createLessons} courses={courses}/> */}
              <LessonList lessons={lessons} deleteLesson={deleteLesson}/>
            
         </div>
    );
}

export default LessonContainer;