import React, { useReducer } from "react";
import TimeInput from "./UI/TimeInput";
import { GuestCount } from "../data/GuestCount";
import { SittingTimes } from "../data/SittingTimes";
import Button from "./UI/Button";
import { ActionType, BookingReducer } from "../Reducers/BookingReducer";
import { initialState } from "../Context/BookingsContext";

const SearchBooking = () => {
  const [ booking, dispatch] = useReducer(BookingReducer, initialState);
  return (
    <>
      <TimeInput dispatch={dispatch} type={ActionType.SET_GUESTS} header="Guests" content={GuestCount} />
      <TimeInput dispatch={dispatch} type={ActionType.SET_DATE} header="Date" content={[]} />
      <TimeInput dispatch={dispatch} type={ActionType.SET_TIME} header="Time" content={SittingTimes} />
      <Button text="SEARCH BOOKING" />
    </>
  );
};

export default SearchBooking;
