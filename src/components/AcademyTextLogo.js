import React from "react";
import { motion } from "framer-motion";
import AcademyText from "./AcademyText";



//destructure motion

const spintransition = {
    loop: Infinity,
    duration: 8
}

 const AcademyTextLogo = () => {
    // const [ rotate, setRotate ] = useState(false);
    return(
            <motion.div  
            animate={{y:10,x:-30, scale:1.15}}
            initial={{scale:-11}}
            transition={spintransition}
            >
            {<AcademyText />}
            </motion.div>


    );
 };
export default AcademyTextLogo;