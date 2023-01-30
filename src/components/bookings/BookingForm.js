import {useState, useEffect} from "react";
import BookingService from "../../services/BookingService";
import CourseService from "../../services/CourseService";
import LearnerService from "../../services/LearnerService";

import styled from 'styled-components';


const Box = styled.div`
color: white;
font-size: 1.5rem;
font-weight: bold;
background-color: #38625b;
width: 70%;
height: auto;
margin: 10rem;
padding:1rem;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 1px solid black;

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
const Select = styled.select`
height: 3rem;
width: 100%;
padding: 12px 20px;
margin: 8px 0;
box-sizing: border-box;
font-family: "Open Sans";
font-size: 1.4rem;
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


const BookingForm = ({createBooking}) => {
    //state
    const [formData, setFormData] = useState({
 
      date: "",
      course: {
          id: ""  
      },
      student: {
        id: ""
      }
     
  })
    //get courses and learners..create obj with data,course,learner
    const [courses, setCourses] = useState([]);
    const [students, setStudents] = useState([]);
    //get courses ----------
    useEffect(() => {
        CourseService.getCourses()
          .then(c => setCourses(c))
      }, [])
      //get learners------------
      useEffect(() => {
        LearnerService.getLearners()
          .then(s => setStudents(s))
      }, [])

    
      const onChange = (e) =>{
          // console.log("before",e.target);
          const newFormData = Object.assign({}, formData);

          newFormData[e.target.name] = e.target.value;
             //condition
          if(e.target.name === "course"){
              newFormData.course = {
                  id: e.target.value
              }
          }
          if(e.target.name === "student"){
            newFormData.student = {
                id: e.target.value
            }
        }
  
          setFormData(newFormData);
          // console.log("after",e.target);
      }
  
      const onSubmit = (e) =>{
          e.preventDefault();
          BookingService.postBooking(formData).then((data)=>{
              createBooking(data);
          })
          // Reset the form input values
          setFormData({
              date: "",
              course: {
                  id: ""
              },
              student: {
                id: ""
              }
            
          });
      }
  

    return (
        <form onSubmit={onSubmit}>
            <Box>
            <h2>Create Booking</h2>
            <div>
              <Label htmlFor="date">Date</Label>
               <Input required 
               type="text" 
               name="date"
               placeholder="year-month-day  e.g. 23-05-06"
               value={formData.date} onChange={onChange} />
            </div>
            <div>
                <Label htmlFor="course">Course</Label>
                
                <Select  defaultValue="" name="course"  onChange={onChange} required>
                        <option value = "" disabled > Choose a course</option> 
                        {
                              courses.map(course => {
                                return (
                                   <option 
                                      key = { course.id }
                                      value = { course.id } > 
                                      { course.name } 
                                    </option>
                                )
                            }) 
                        }           
                </Select>               
            </div> 
            <div>
                <Label htmlFor="learner">Learner</Label>
                
                <Select  defaultValue="" name="student"  onChange={onChange} required>
                        <option value = "" disabled > Choose a student</option> 
                        {
                              students.map(student => {
                                return ( 
                                <option 
                                    key = { student.id }
                                    value = { student.id } >
                                       { student.userName } 
                                    </option>
                                )
                            }) 
                        }           
                </Select>               
            </div> 
  
            <p></p>
            <InputSubmit type="submit" name="submit" value="Save" />
            </Box>

	    </form>

    );
}

export default BookingForm;