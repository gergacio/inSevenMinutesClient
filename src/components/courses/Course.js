import React,{useState} from "react";
import styled from 'styled-components';


const Box = styled.div`
margin:0.2rem;
padding:1rem;

width: 80%;
height: auto;
background-color: #38625b;
color: white;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 1px solid black;

font-family: "Open Sans";
border-radius: 6px;
font-size: 1.5rem;
font-weight: bold;
@media (max-width: 550px) {
  zoom: 0.85;
-moz-transform: scale(0.85);
-moz-transform-origin: 0 0;
-o-transform: scale(0.85);
-o-transform-origin: 0 0;
-webkit-transform: scale(0.85);
-webkit-transform-origin: 0 0;
}
`
const Heading = styled.h5`
font-size: 1.8rem;
color:#eee;
font-weight:50;
`
const Btn = styled.button`
font-size: 1.3rem;
font-weight: bold;
color: white;
height: auto;
width: 20%;
border-radius: 6px;
background-color: #38625b;
`
const OpenBtn = styled.button`
font-size: 1.3rem;
font-weight: bold;
color: white;
height: auto;
width: 20%;
border-radius: 5px;
background-color: #38625b;
`
const Course = ({course, deleteCourses}) => {
  const [info, setInfo] = useState(false);

  function handleDelete(){
    const id = course.id;
    deleteCourses(id);
    
}
const handleClickInfo = () => {
  setInfo(!info);
};

// const lessonList = course.lessons.map((lesson) => {
//   return (
//     <li key={lesson.id}> {lesson.title}</li>
//   )
// });


  return(

  
    <Box>
          <Heading>Course name: {course.name}</Heading> 
          <OpenBtn onClick={handleClickInfo}>Course Details</OpenBtn>
          {info ? <div>
            <p>Course Id: {course.id}</p> 
            <p>Course Description: {course.description}</p> 
            <p>Course Type: {course.type}</p> 
            <p>Course Category: {course.category}</p> 
             {/* <p>Lessons {lessonList}</p> */}
        
           
          </div>:<><p></p></> }
       
        
         <Btn onClick={handleDelete}>Remove Course <span>❌</span></Btn>
     
    </Box>
  )
}

export default Course;