import React,{ useState, useEffect } from "react";
import LearnerService from "../services/LearnerService"
import LearnerList from "../components/learners/LearnerList";
import CreateLearnerLogo from "../components/learners/CreateLearnerLogo";
import styled from "styled-components";

const D = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
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

const LearnerContainer = () => {

   const [ learners, setLearners ] = useState([]);

   useEffect(() => {
    LearnerService.getLearners()
      .then(l => setLearners(l))
  }, [])

  const deleteLerner = (idToDelete) => {
    LearnerService.deleteLearner(idToDelete)
      .then(() => {
        //update lerner state
        setLearners(learners.filter(learner => learner.id !== idToDelete))
      })
  }
  //create learner
   const createLearner = (newLearner) => {
    LearnerService.postLearners(newLearner)
      .then(newLearner => setLearners([...learners, newLearner]))
  }


    return(
        <D>
             {/* <LearnerForm createLearner={createLearner}/> */}
             <CreateLearnerLogo createLearner={createLearner}/>
             <LearnerList learners={learners} deleteLearner={deleteLerner}/>
            
        </D>
    );
}

export default LearnerContainer;