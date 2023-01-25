import React,{useState} from "react";
import styled from 'styled-components';
import Learners from "./Learners";

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
const Label = styled.label`
width: 100%;
color: black;
font-size: 2rem;
font-weight: bold;
line-height: 2rem;`

const LearnerList = ({learners, deleteLearner}) => {
    const [searchTerm, setSearchTerm] = useState('');
 
    const LearnersComponentList = learners.filter((learner) => {
        if(searchTerm === ""){
            return  <Learners learner={learner} key={learner.id} deleteLearner={deleteLearner}/>
        }else{
            if(learner.email.toLowerCase().includes(searchTerm.toLowerCase())){
                return  <Learners learner={learner} key={learner.id} deleteLearner={deleteLearner}/>
            }
        }
    }).map((learner) => {
        return (
           <Learners learner={learner} key={learner.id} deleteLearner={deleteLearner}/>
        )
    });
    return(
        <Box>
          
           <UL>
           <Input type="text" name="search" placeholder="Search my email  e.g. mt@gmail.com" onChange={event => {setSearchTerm(event.target.value)}}/>
            {LearnersComponentList}

           </UL>
        </Box>
    );

}
export default LearnerList;