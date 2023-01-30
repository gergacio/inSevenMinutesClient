import React,{useState} from "react";
import styled from 'styled-components';
import Course from "./Course";


const Box = styled.div`
width: 100%;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

padding: 20px;
margin:120px;
font-family: "Open Sans";
`


const Input = styled.input`
box-sizing: border-box;
height: auto;
width: 80%;
margin-bottom: 40px;
margin-right: 40px;
border: 0.5px solid #3E4163;
border-radius: 8px;
color: #333333;
font-size: 2rem;
font-family: "Open Sans";
`
const UL = styled.ul`
width: 100%;
`

const CourseList = ({courses, deleteCourses}) => {
    const [searchTerm, setSearchTerm] = useState('');
 
    const CoursesComponentList = courses.filter((course) => {
        if(searchTerm === ""){
            return  <Course course={course} key={course.id} deleteCourses={deleteCourses}/>
        }else{
            if(course.name.toLowerCase().includes(searchTerm.toLowerCase())){
                return  <Course course={course} key={course.id} deleteCourses={deleteCourses}/>
            }
        }
    }).map((course) => {
        return (
           <Course course={course} key={course.id} deleteCourses={deleteCourses}/>
        )
    });
    return(
        <Box>
         
         
           <UL>
           <Input type="text" name="search" placeholder="Search by title  e.g. Algorithms" onChange={event => {setSearchTerm(event.target.value)}}/>
            {CoursesComponentList}
           </UL>
        </Box>
    );

}
export default CourseList;