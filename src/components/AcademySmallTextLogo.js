import React from "react";
import { motion } from "framer-motion";
import AcademySmallText from "./AcademySmallText";



//destructure motion

const spintransition = {
    loop: Infinity,
    duration: 8
    
}

 const AcademySmallTextLogo = () => {
    // const [ rotate, setRotate ] = useState(false);
    return(
            <motion.div  
            animate={{x:140,y:40, scale:1}}
            initial={{scale:8}}
            transition={spintransition}
            >
            {<AcademySmallText />}
            </motion.div>


    );
 };
export default AcademySmallTextLogo;