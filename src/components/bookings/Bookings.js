import React,{useState} from "react";

import styled from 'styled-components';

const Box = styled.div`
margin:0.2rem;
padding:1rem;

width: 80%;
height: auto;
background-color: #38625b;
color: white;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 1px solid black;

font-family: "Open Sans";
border-radius: 6px;
font-size: 1.5rem;
font-weight: bold;
`
const Heading = styled.h5`
font-size: 1.8rem;
color:#eee;
font-weight:50;
`
const Btn = styled.button`
font-size: 1.3rem;
font-weight: bold;
color: white;
height: auto;
width: 20%;
border-radius: 6px;
background-color: #38625b;
`
const OpenBtn = styled.button`
font-size: 1.3rem;
font-weight: bold;
color: white;
height: auto;
width: 20%;
border-radius: 5px;
background-color: #38625b;
`

const Bookings = ({booking, deleteBookings}) => {
  const [info, setInfo] = useState(false);

  function handleDelete(){
    const id = booking.id;
    deleteBookings(id);
}
const handleClickInfo = () => {
  setInfo(!info);
};
  return(

  
    <Box>
          <Heading>Booking Date: {booking.date} </Heading>
             
         <OpenBtn onClick={handleClickInfo}>Booking Details</OpenBtn>
          {info ? <div>
            <p>Booking Id: {booking.id}</p>
            <p>Learner: {booking.student.firstName} {booking.student.lastName} </p>
            <p>Course Name: {booking.course.name} </p> 
           
          </div>:<><p></p></> }    
     

         <Btn onClick={handleDelete}>Remove Booking <span>❌</span></Btn>
     
    </Box>
  )
}

export default Bookings;