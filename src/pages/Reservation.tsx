import React from "react";
import ReservationText from "../components/ReservationText";
import TimeInput from "../components/UI/TimeInput";

const Reservation = () => {
  return (
    <>
      <ReservationText />
      <TimeInput header="Guests" chosen="2 Guests"/>
    </>
  );
};

export default Reservation;
