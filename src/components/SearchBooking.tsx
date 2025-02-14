import React, { useEffect, useReducer, useState } from "react";
import TimeInput from "./UI/TimeInput";
import { GuestCount } from "../data/GuestCount";
import { SittingTimes } from "../data/SittingTimes";
import Button from "./UI/Button";
import { ActionType} from "../Reducers/BookingReducer";
import {useBookingContext } from "../Context/BookingsContext";
import SearchBookingResults from "./SearchBookingResults";
import { checkAvailableDate } from "../services/checkAvailableDate";

const SearchBooking = () => {
  const [isDateFull, setIsDateFull] = useState(false);
  const [isTime18Full, setIsTime18Full] = useState(false);
  const [isTime21Full, setIsTime21Full] = useState(false);
  const { booking, dispatch } = useBookingContext();
  const [haveSearched, isHaveSearched] = useState(false);
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

const handleClick = async () => {
    const response = await checkAvailableDate({ booking });
    console.log(response);
    if (response === 1) {
      setIsDateFull(true);
      setIsTime18Full(true);
      setIsTime21Full(true);
    } else if (response === 2) {
      setIsDateFull(false);
      setIsTime18Full(true);
      setIsTime21Full(false);
    } else if (response === 3) {
      setIsDateFull(false);
      setIsTime18Full(false);
      setIsTime21Full(true);
    } else if(response === 4) {
      setIsDateFull(false);
      setIsTime18Full(false);
      setIsTime21Full(false);
    }
    isHaveSearched(true);
  };

  return (
    <>
      <TimeInput
        dispatch={dispatch}
        type={ActionType.SET_GUESTS}
        header="Guests"
        content={GuestCount}
      />
      <TimeInput dispatch={dispatch} type={ActionType.SET_DATE} header="Date" />
      <TimeInput
        dispatch={dispatch}
        type={ActionType.SET_TIME}
        header="Time"
        content={SittingTimes}
      />
      <Button onClick={() => handleClick()} text="SEARCH BOOKING" />

      {haveSearched ? <SearchBookingResults isDateFull={isDateFull} isTime18Full={isTime18Full} isTime21Full={isTime21Full} /> : <></>}
    </>
  );
};

export default SearchBooking;
