import React from "react";
import TimeInput from "./UI/TimeInput";
import { GuestCount } from "../data/GuestCount";
import { SittingTimes } from "../data/SittingTimes";
import Button from "./UI/Button";

const SearchBooking = () => {
  return (
    <>
      <TimeInput header="Guests" content={GuestCount} />
      <TimeInput header="Date" content={[]} />
      <TimeInput header="Time" content={SittingTimes} />
      <Button text="SEARCH BOOKING" />
    </>
  );
};

export default SearchBooking;
