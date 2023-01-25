import React,{ useState, useEffect } from "react";
import BookingServices from "../services/BookingService";
import BookingList from "../components/bookings/BookingList";
import CreateBookingLogo from "../components/bookings/CreateBookingLogo";


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
        <div>
              {/* <BookingForm createBooking={createBooking}/> */}
              <CreateBookingLogo createBooking={createBooking}/>
              <BookingList bookings={bookings} deleteBookings={deleteBookings}/>
            
        </div>
    );
}

export default BookingContainer;