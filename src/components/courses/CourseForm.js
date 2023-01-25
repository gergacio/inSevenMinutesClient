import {useState} from "react";
import CourseService from "../../services/CourseService.js";
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


const CourseForm = ({createCourse}) => {
    //state
    const [formData, setFormData] = useState({
        name: "",
		description: "",
		type: "",
		category: ""
    })


    const onChange = (e) =>{
        const newFormData = Object.assign({}, formData);
        newFormData[e.target.name] = e.target.value;
        setFormData(newFormData);
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        CourseService.postCourse(formData).then((data)=>{
            createCourse(data);
        })
        // Reset the form input values
        setFormData({
            name: "",
		description: "",
		type: "",
		category: ""
          
        });
    }

    return (
        <form onSubmit={onSubmit} id="sightings-form" >
            <Box>
            <h2>Create Course</h2>
            <div>
                <Label htmlFor="name">Name</Label>
                <Input 
                    required
                    onChange={onChange} 
                    type="text" 
                    name="name"
                    placeholder="e.g. Algorithms"
                    value={formData.name} />
            </div>
            <div>
                <Label htmlFor="type">Type</Label>
                <Input 
                    required
                    onChange={onChange} 
                    type="text" 
                    name="type"
                    placeholder="e.g. Short Course"
                    value={formData.type} />
            </div>
            <div>
                <Label htmlFor="description">Description</Label>
                <Input 
                    required
                    onChange={onChange} 
                    type="text" 
                    name="description"
                    placeholder="e.g. Fundamental algorithms ..."
                    value={formData.description} />
            </div>
            <div>
                <Label htmlFor="category">Category</Label>
                <Input 
                    required
                    onChange={onChange} 
                    type="text" 
                    name="category"
                    placeholder="e.g. Software Development"
                    value={formData.category} />
            </div>
            <p></p>

            <InputSubmit type="submit" value="Save" id="save"/>


            </Box>

	    </form>

    );
}

export default CourseForm;