import React from "react";
import { motion } from "framer-motion";
import AcademyNavbarText from "./AcademyNavbarText";



//destructure motion

const spintransition = {
    loop: Infinity,
    duration: 5
}

 const AcademyNavbarTextLogo = () => {
    // const [ rotate, setRotate ] = useState(false);
    return(
            <motion.div  
            animate={{x:-10,scale:1}}
            initial={{scale:0}}
            transition={spintransition}
            >
            {<AcademyNavbarText />}
            </motion.div>


    );
 };
export default AcademyNavbarTextLogo;