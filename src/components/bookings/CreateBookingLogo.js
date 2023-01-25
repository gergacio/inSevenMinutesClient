import React from "react";
import { motion } from "framer-motion";
import BookingForm from "../../components/bookings/BookingForm";

//destructure motion

const spintransition = {
    loop: Infinity,
    duration: 0.8
}

 const CreateBookingLogo = ({createBooking}) => {
    
    return(
            <motion.div  
            animate={{y:40, scale:0.5}}
            initial={{scale:0.1}}
            transition={spintransition}
            whileInView={{scale:1}}
            >
            {<BookingForm createBooking={createBooking}/>}
            </motion.div>


    );
 };
export default CreateBookingLogo;