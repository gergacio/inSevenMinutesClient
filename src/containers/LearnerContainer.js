import React,{ useState, useEffect } from "react";
import LearnerService from "../services/LearnerService"
import LearnerList from "../components/learners/LearnerList";
import CreateLearnerLogo from "../components/learners/CreateLearnerLogo";
import styled from "styled-components";



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
        <div>
             {/* <LearnerForm createLearner={createLearner}/> */}
             <CreateLearnerLogo createLearner={createLearner}/>
             <LearnerList learners={learners} deleteLearner={deleteLerner}/>
            
        </div>
    );
}

export default LearnerContainer;