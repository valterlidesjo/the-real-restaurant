import { id } from "../components/SearchBookingResults";
import { useBookingContext } from "../Context/BookingsContext";
import { Booking } from "../models/Booking";
import { fetchData } from "./bookingServices";

interface checkAvailableDateProps {
  booking: Booking;
  numberOfDays?: number
}

export const checkAvailableDate = async ({
  booking,
  numberOfDays = 3
}: checkAvailableDateProps) => {
    
    


  const result: Booking[] = await fetchData(id);

  const searchedDate = booking.date;




  const bookingsOnDate = result.filter((b) => b.date === searchedDate);

  if (bookingsOnDate.length >= 30) {
    console.log("Det är fullt på denna dag!");
    return 1;
  } 

  const sitting18 = bookingsOnDate.filter((b) => b.time === "18:00").length;
  const sitting21 = bookingsOnDate.filter((b) => b.time === "21:00").length;

  if (sitting18 >= 15) {
    console.log("Sittningen kl. 18:00 är full!");
    return 2;
  } else {
    console.log("LEDIGT 18:00 BROR");
  }

  if (sitting21 >= 15) {
    console.log("Sittningen kl. 21:00 är full!");
    return 3;
  } else {
    console.log("LEDIGT 21:00 BROR");
  }
  return 4;
};
