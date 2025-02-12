import React from "react";
import ReservationText from "../components/ReservationText";
import Button from "../components/UI/Button";
import TegelBooking from "../components/UI/TegelBooking";
import TimeInput from "../components/UI/TimeInput";
import { GuestCount } from "../data/GuestCount";
import { SittingTimes } from "../data/SittingTimes";

const Reservation = () => {
  return (
    <>
      <section className="p-[2rem]">
        <ReservationText />

        <Button text="SEARCH BOOKING" />
        <TegelBooking />
      </section>
      <TimeInput header="Guests" content={GuestCount} />
      <TimeInput header="Date" content={[]} />
      <TimeInput header="Time" content={SittingTimes} />
    </>
  );
};

export default Reservation;
