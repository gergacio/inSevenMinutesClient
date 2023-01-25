import React from "react";
import { motion } from "framer-motion";
import CourseForm from "../../components/courses/CourseForm";

//destructure motion

const spintransition = {
    loop: Infinity,
    duration: 0.8
}

 const CreateCourseLogo = ({createCourse}) => {
    
    return(
            <motion.div  
            animate={{y:40, scale:0.5}}
            initial={{scale:0.1}}
            transition={spintransition}
            whileInView={{scale:1}}
            >
            {<CourseForm createCourse={createCourse}/>}
            </motion.div>


    );
 };
export default CreateCourseLogo;