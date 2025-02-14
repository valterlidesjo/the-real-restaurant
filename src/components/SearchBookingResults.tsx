import { fetchData } from "../services/bookingServices";
import { useBookingContext } from "../Context/BookingsContext";
import { Booking } from "../models/Booking";
import { useEffect, useState } from "react";
import { checkAvailableDate } from "../services/checkAvailableDate";
import Button from "./UI/Button";

export const id = "67ac975e21ba0a444fe1f5a8";

interface SearchBookingResultsProps {
  isDateFull: boolean;
  isTime18Full: boolean;
  isTime21Full: boolean;

}

const SearchBookingResults = ({ isDateFull, isTime18Full, isTime21Full } : SearchBookingResultsProps) => {
  const { booking } = useBookingContext();
  

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full">
        {isDateFull ? (
          <>
            <p>There are no available tables this day</p>
          </>
        ) : (
          <>
            <p>Available tables</p>
          </>
        )}
        <div className="flex flex-col justify-center items-center w-full">
          <p>{booking.date}</p>
          <div className="flex justify-center items-center">
            {isTime18Full ? (
              <>
                <button className="bg-gray-500">Full</button>
              </>
            ) : (
              <>
                <button className="bg-red-900">18.00</button>
              </>
            )}
          </div>
          <div>
            {isTime21Full ? (
              <>
                <button className="bg-gray-500">Full</button>
              </>
            ) : (
              <>
                <button className="bg-red-900">21.00</button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBookingResults;
