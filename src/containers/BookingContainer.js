import React,{ useState, useEffect } from "react";
import BookingServices from "../services/BookingService";
import BookingList from "../components/bookings/BookingList";
import CreateBookingLogo from "../components/bookings/CreateBookingLogo";
import styled from "styled-components";

const D = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
@media (max-width: 550px) {
  zoom: 0.75;
-moz-transform: scale(0.75);
-moz-transform-origin: 0 0;
-o-transform: scale(0.75);
-o-transform-origin: 0 0;
-webkit-transform: scale(0.75);
-webkit-transform-origin: 0 0; 
}
@media (max-width: 850px) {
  zoom: 0.85;
-moz-transform: scale(0.85);
-moz-transform-origin: 0 0;
-o-transform: scale(0.85);
-o-transform-origin: 0 0;
-webkit-transform: scale(0.85);
-webkit-transform-origin: 0 0; 
}
`


const BookingContainer = () => {
   //state - all courses
   const [ bookings, setBookings ] = useState([]);
   
   //get bookings
   useEffect(() => {
    BookingServices.getBookings()
      .then(b => setBookings(b))
  }, [])
  //create bookings
    const createBooking = (newBooking) => {
      BookingServices.postBooking(newBooking)
        .then(newBooking => setBookings([...bookings, newBooking]))
    }

  //delete bookings
  const deleteBookings = (idToDelete) => {
    BookingServices.deleteBooking(idToDelete)
      .then(() => {
        //update bookings state
        setBookings(bookings.filter(booking => booking.id !== idToDelete))
      })
  }



    return(
        <D>
              <CreateBookingLogo createBooking={createBooking}/>
              <BookingList bookings={bookings} deleteBookings={deleteBookings}/>
            
        </D>
    );
}

export default BookingContainer;