import React,{useState} from "react";
import styled from 'styled-components';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


const Box = styled.div`
margin:0.2rem;
padding:1rem;

width: 80%;
height: auto;
background-color: #38625b;
color: black;

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
const P = styled.p`
font-size: 1.5rem;
font-weight: bold;
color: white;
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
const BoxEditor = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

padding: 10px;

font-family: "Open Sans";

`
const Div = styled.div`
padding:10px;
`

const Lessons = ({lesson, deleteLesson}) => {
  const [content, setContent] = useState(false);
  const [info, setInfo] = useState(false);
  const [con, setCon] = useState(lesson.content);


  function handleDelete(){
    const id = lesson.id;
    deleteLesson(id);
  }
  const handleClickContent = () => {
    setContent(!content);
  };
  const handleClickInfo = () => {
    setInfo(!info);
  };

  return(
     <Box>
          <Heading>{lesson.title}</Heading> 
          <OpenBtn onClick={handleClickInfo}>Lesson Details</OpenBtn>
          {info ? <div>
            <P>Id: {lesson.id}</P> 
            <P>Learning Objective: {lesson.learningObjective}</P> 
            <P>Learning Goal: {lesson.learningGoal}</P> 
            <P>Duration: {lesson.duration} minutes</P> 
            <P>Course: {lesson.course.name}</P> 
          </div>:<><p></p></> }

          <OpenBtn onClick={handleClickContent}>Lesson Content</OpenBtn>
          <p></p>
        
          {content ?   <BoxEditor className="editor">
                    <Div>
                        <CKEditor
                        editor={ClassicEditor}
                        data={con}
                        onChange={(event, editor) => {
                            const data = editor.getData()
                            setCon(data)
                            
                        }}
                        />
                    </Div>                   
                </BoxEditor>:<></> }
           
  
          <Btn onClick={handleDelete}>Remove Lesson <span>❌</span></Btn>

         
          
        
     
    </Box>  
    

  
  )
}

export default Lessons;