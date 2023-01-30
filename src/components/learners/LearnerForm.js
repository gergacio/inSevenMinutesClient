import {useState} from "react";
import LearnerService from "../../services/LearnerService.js";
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
align-items: start;
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


const LearnerForm = ({createLearner}) => {
    //state
    const [formData, setFormData] = useState({
            firstName: "",
            lastName: "",
            userName: "",
            email: "",
            age: "",
            wallet: ""   
    })


    const onChange = (e) =>{
        const newFormData = Object.assign({}, formData);
        newFormData[e.target.name] = e.target.value;
        setFormData(newFormData);
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        LearnerService.postLearners(formData).then((data)=>{
            createLearner(data);
        })
        // Reset the form input values
        setFormData({
            firstName: "",
            lastName: "",
            userName: "",
            email: "",
            age: "",
            wallet: ""   
          
        });
    }

    return (
        <form onSubmit={onSubmit} id="sightings-form" >
            <Box>
            <h2>Create Learner</h2>
            <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input 
                    required
                    onChange={onChange} 
                    type="text" 
                    name="firstName"
                    placeholder="e.g. Mike"
                    value={formData.firstName} />
            </div>
            <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input 
                    required
                    onChange={onChange} 
                    type="text" 
                    name="lastName"
                    placeholder="e.g. Tyson"
                    value={formData.lastName} />
            </div>
            <div>
                <Label htmlFor="userName">Username</Label>
                <Input 
                    required
                    onChange={onChange} 
                    type="text" 
                    name="userName"
                    placeholder="e.g. Iron Mike"
                    value={formData.userName} />
            </div>
            <div>
                <Label htmlFor="email">Email</Label>
                <Input 
                    required
                    onChange={onChange} 
                    type="text" 
                    name="email"
                    placeholder="e.g. mt@example.com"
                    value={formData.email} />
            </div>
            <div>
                <Label htmlFor="age">Age</Label>
                <Input 
                    required
                    onChange={onChange} 
                    type="text" 
                    name="age"
                    placeholder="e.g. 54"
                    value={formData.age} />
            </div>
            {/* <div>
                <Label htmlFor="wallet">Wallet</Label>
                <Input 
                    onChange={onChange} 
                    type="text" 
                    name="wallet"
                    value={formData.wallet} />
            </div> */}
            <p></p>
            <InputSubmit type="submit" value="Save" id="save"/>

            </Box>

	    </form>

    );
}

export default LearnerForm;