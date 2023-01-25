import React,{useState} from "react";
import Lessons from "./Lessons";
import styled from 'styled-components';

const Box = styled.div`
width: 100%;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

padding: 20px;
margin:120px;
font-family: "Open Sans";

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

const LessonList = ({lessons, deleteLesson}) => {
    const [searchTerm, setSearchTerm] = useState('');

    const LessonComponentList = lessons.filter((lesson) => {
        if(searchTerm === ""){
            return (
                <Lessons lesson={lesson} key={lesson.id} deleteLesson={deleteLesson}/>
             )
        }else{
            if(lesson.title.toLowerCase().includes(searchTerm.toLowerCase())){
                return (
                    <Lessons lesson={lesson} key={lesson.id} deleteLesson={deleteLesson}/>
                 )
            }
        }
    }).map((lesson) => {
        return (
           <Lessons lesson={lesson} key={lesson.id} deleteLesson={deleteLesson}/>
        )
    });
    return(
        <Box>
               
               <UL>
               <Input type="text" name="search" placeholder="Search by title  e.g. Algorithm Complexity" onChange={event => {setSearchTerm(event.target.value)}}/>
                {LessonComponentList}</UL>
        </Box>
    );

}
export default LessonList;