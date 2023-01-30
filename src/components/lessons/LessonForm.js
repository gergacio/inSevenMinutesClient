import {useState, useEffect} from "react";
import LessonService from "../../services/LessonService";
import styled from 'styled-components';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CourseService from "../../services/CourseService";


const Box = styled.div`
color: white;
font-size: 1.5rem;
font-weight: bold;
background-color: #38625b;
width: 70%;
height: auto;
margin: 5rem;
padding:1rem;

display: flex;
flex-direction: column;
justify-content: center;
align-items: start;

border-radius: 4px;
font-family: "Open Sans";
`
const Label = styled.label`
width: 100%;
color: white;
font-family: "Open Sans";
font-size: 1.5rem;
line-height: 2rem;
`

const Input = styled.input`
height: 3rem;
width: 100%;
padding: 12px 20px;
margin: 8px 0;
box-sizing: border-box;
font-family: "Open Sans";
font-size: 1.5rem;
`
const TextArea = styled.textarea`
height: 15rem;
width: 100%;
padding: 12px 20px;
margin: 8px 0;
box-sizing: border-box;
font-family: "Open Sans";
font-size: 1.5rem;
`
const TagText = styled.p`
background-color: white;
box-sizing: border-box;
padding: 12px 20px;
margin: 8px 0;
font-size: 1.5rem;
width: 100%;
height: auto;
`
const BoxEditor = styled.div`
color:#676B6E;
background-color: #38625b;
width: 92%;
font-size: 1.2rem;
font-weight: bold;

height: auto;
margin: 5rem;
padding:50px;


display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 1px solid blue;
border-radius: 2px;
font-family: "Open Sans";
`
const BoxMain = styled.div`
width: 100%;
height: auto;
margin-top: 150px;
color: black;

display: flex;
flex-direction: column;
justify-content: start;
align-items: center;

font-family: "Open Sans";
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
const Select = styled.select`
height: 3rem;
width: 100%;
padding: 12px 20px;
margin: 8px 0;
box-sizing: border-box;
font-family: "Open Sans";
font-size: 1.4rem;
`

const H = styled.h2`
color: white;
`
const InputSubmit = styled.input`
height: 3rem;
width: 40%;
padding: 12px 20px;
margin: 8px 0;
box-sizing: border-box;
font-family: "Open Sans";
font-size: 1.5rem;
&:hover,
&:focus{
    color: black;
   
}
&:active{
    color: red;
   
`



const LessonForm = ({createLessons}) => {
    //state
    const [formData, setFormData] = useState({
        title: "",
		learningObjective: "",
		learningGoal: "",
		content: "",
        duration: "",
        course: {
            id: ""
            
        }  
    })
 
  

    // courses state---------------------------------------
    const [ courses, setCourses ] = useState([]);
   
    //get courses
      useEffect(() => {
       CourseService.getCourses()
         .then(c => setCourses(c))  
     }, [])

     //-----------------------------------------------------

    const [text, setText] = useState('');
    
    const onChange = (e) =>{
        console.log("before",e.target);
        const newFormData = Object.assign({}, formData);
     
        
        newFormData[e.target.name] = e.target.value;
           //condition
        if(e.target.name === "course"){
            newFormData.course = {
                id: e.target.value
            }
        }

        setFormData(newFormData);
        console.log("after",e.target);
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        LessonService.postLesson(formData).then((data)=>{
            createLessons(data);
        })
        // Reset the form input values
        setFormData({
            name: "",
            description: "",
            type: "",
            category: "",
            course: {
                id: ""
            }
          
        });
    }

    return (
        <BoxMain>
             <BoxEditor>
                <H>Content Creation Tool</H>
                
                        <CKEditor
                        
                        // config={{ plugins: [ImageResize] }} 
                        editor={ClassicEditor}
                        data={text}
                        onChange={(event, editor) => {
                            const data = editor.getData()
                            setText(data)
                        }}
                        />
                  
                    <H>Tagged Content</H>
                    <div>
                        
                     <TagText>{text}</TagText>

                    </div>
              </BoxEditor>
             <form onSubmit={onSubmit}>

                    <Box>
                        <h2>Create Lesson</h2>
                        <div>
                            <Label htmlFor="title">Title</Label>
                            <Input 
                                required
                                onChange={onChange} 
                                type="text" 
                                name="title"
                                placeholder="e.g. Memory"
                                value={formData.title} />
                        </div>
                        <div>
                            <Label htmlFor="learningObjective">Learning Objective</Label>
                            <Input 
                                required
                                onChange={onChange} 
                                type="text" 
                                name="learningObjective"
                                placeholder="e.g. Learners will be able to describe memory"
                                value={formData.learningObjective} />
                        </div>
                        <div>
                            <Label htmlFor="learningGoal">Learning Goal</Label>
                            <Input 
                                required
                                onChange={onChange} 
                                type="text" 
                                name="learningGoal"
                                placeholder="e.g. Learners to understand memory"
                                value={formData.learningGoal} />
                        </div>
                        <div>
                            <Label htmlFor="duration">Duration</Label>
                            <Input 
                                required
                                onChange={onChange} 
                                type="text" 
                                name="duration"
                                placeholder="e.g. 7"
                                value={formData.duration} />
                        </div>
                        <div>
                            <Label htmlFor="course">Course</Label>
                            
                            <Select  defaultValue="" name="course"  onChange={onChange} required>
                                    <option value = "" disabled > Choose a course</option> 
                                    {
                                          courses.map(course => {
                                            return ( <option key = { course.id }
                                                value = { course.id } > { course.name } </option>
                                            )
                                        }) 
                                    }           
                            </Select>  
                        
                        
                        </div> 
                        <div>
                            <Label htmlFor="content">Tagged Content</Label>

                            <TextArea 
                                required
                                onChange={onChange} 
                                type="text" 
                                name="content"
                                placeholder="e.g. <h2>Memory</h2>"
                                value={formData.content} />
                            
                        </div> 
                       
                        <p></p>
                        <InputSubmit type="submit" value="Save" id="save" />

                      </Box>

            </form>

        </BoxMain>
       

    );
}

export default LessonForm;