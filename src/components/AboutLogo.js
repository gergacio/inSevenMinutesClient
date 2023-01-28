import React from "react";
import { motion } from "framer-motion";
import AboutImage from "./AboutImage";

//destructure motion

const spintransition = {
    loop: Infinity,
    duration: 0.5
}

 const AboutLogo = () => {
    
    return(
            <motion.div  
            animate={{x:80, scale:1}}
            initial={{scale:0.6}}
            transition={spintransition}
            >
            {<AboutImage />}
            </motion.div>


    );
 };
export default AboutLogo;