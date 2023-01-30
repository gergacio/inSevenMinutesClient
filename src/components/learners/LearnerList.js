import React,{useState} from "react";
import styled from 'styled-components';
import Learners from "./Learners";

const Box = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

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
           <Input type="text" name="search" placeholder="Search by email  e.g. m@gmail.com" onChange={event => {setSearchTerm(event.target.value)}}/>
            {LearnersComponentList}

           </UL>
        </Box>
    );

}
export default LearnerList;