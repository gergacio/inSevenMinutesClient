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
            animate={{y:-20,x:-39, scale:1.2}}
            initial={{scale:-11}}
            transition={spintransition}
            >
            {<AcademyText />}
            </motion.div>


    );
 };
export default AcademyTextLogo;