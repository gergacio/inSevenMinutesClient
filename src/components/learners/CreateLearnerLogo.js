import React from "react";
import { motion } from "framer-motion";
import LearnerForm from "../../components/learners/LearnerForm";

//destructure motion

const spintransition = {
    loop: Infinity,
    duration: 0.8
}

 const CreateLearnerLogo = ({createLearner}) => {
    
    return(
            <motion.div  
            animate={{y:40,x:20, scale:0.5}}
            initial={{scale:0.5}}
            transition={spintransition}
            whileInView={{scale:0.9}}
            >
            {<LearnerForm createLearner={createLearner}/>}
            </motion.div>


    );
 };
export default CreateLearnerLogo;