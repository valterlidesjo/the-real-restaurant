import React from "react";
import ReservationText from "../components/ReservationText";
import TimeInput from "../components/UI/TimeInput";
import { GuestCount } from "../data/GuestCount";
import { SittingTimes } from "../data/SittingTimes";

const Reservation = () => {
  return (
    <>
      <ReservationText />
      <TimeInput header="Guests" content={GuestCount}/>
      <TimeInput header="Date" content={[]} />
      <TimeInput header="Time" content={SittingTimes}/>
    </>
  );
};

export default Reservation;
