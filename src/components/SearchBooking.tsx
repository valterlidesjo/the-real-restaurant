import React, { useEffect, useReducer } from "react";
import TimeInput from "./UI/TimeInput";
import { GuestCount } from "../data/GuestCount";
import { SittingTimes } from "../data/SittingTimes";
import Button from "./UI/Button";
import { ActionType, BookingReducer } from "../Reducers/BookingReducer";
import { initialState } from "../Context/BookingsContext";
import { apiServices } from "../services/apiServices";
import { Booking } from "../models/Booking";
import { fetchData } from "../services/bookingServices";

const SearchBooking = () => {
  const [booking, dispatch] = useReducer(BookingReducer, initialState);
  const id = "67ac975e21ba0a444fe1f5a8";
  const test = {
    restaurantId: id,
    date: "2025-02-15",
    time: "21:00",
    numberOfGuests: 6,
    customer: {
      name: "BOB",
      lastname: "MÖRLEY",
      email: "someone@somedomain.com",
      phone: "070-1112233",
    },
  };

  return (
    <>
      <TimeInput
        dispatch={dispatch}
        type={ActionType.SET_GUESTS}
        header="Guests"
        content={GuestCount}
      />
      <TimeInput
        dispatch={dispatch}
        type={ActionType.SET_DATE}
        header="Date"
        content={[]}
      />
      <TimeInput
        dispatch={dispatch}
        type={ActionType.SET_TIME}
        header="Time"
        content={SittingTimes}
      />
      <Button onClick={() => fetchData(id)} text="SEARCH BOOKING" />
    </>
  );
};

export default SearchBooking;
