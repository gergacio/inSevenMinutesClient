import React,{useState} from "react";
import styled from 'styled-components';
import Booking from "./Bookings";

const Box = styled.div`
width: 100%;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

padding: 20px;
margin:120px;
font-family: "Open Sans";

@media (max-width: 550px) {
    zoom: 0.85;
  -moz-transform: scale(0.85);
  -moz-transform-origin: 0 0;
  -o-transform: scale(0.85);
  -o-transform-origin: 0 0;
  -webkit-transform: scale(0.85);
  -webkit-transform-origin: 0 0;
  }
`
const UL = styled.ul`
width: 100%;
`


const Input = styled.input`
box-sizing: border-box;
height: auto;
width: 80%;
margin-bottom: 40px;
margin-right: 40px;
border: 0.5px solid #3E4163;
border-radius: 8px;
color: #333333;
font-size: 2rem;
font-family: "Open Sans";
`



const BookingList = ({bookings, deleteBookings}) => {
    const [searchTerm, setSearchTerm] = useState('');
    //turn arr of obj into arr of Booking component
    const BookingsComponentList = bookings.filter((booking) => {
        if(searchTerm === ""){
            return (
                <Booking booking={booking} key={booking.id} deleteBookings={deleteBookings}/>
             )

        }else{
            if(booking.date.toLowerCase().includes(searchTerm.toLowerCase())){
                return (
                    <Booking booking={booking} key={booking.id} deleteBookings={deleteBookings}/>
                 )
            }

        }
    }).map((booking) => {
        return (
           <Booking booking={booking} key={booking.id} deleteBookings={deleteBookings}/>
        )
    });
    return(
        <Box>
            
           <UL>
           <Input type="text" name="search" placeholder="Search by date  e.g. 22-12-18" onChange={event => {setSearchTerm(event.target.value)}}/>
            {BookingsComponentList}</UL>
        </Box>
    );

}
export default BookingList;