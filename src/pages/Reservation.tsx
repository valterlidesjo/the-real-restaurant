import React from "react";
import ReservationText from "../components/ReservationText";
import Button from "../components/UI/Button";
import TegelBooking from "../components/UI/TegelBooking";
import TimeInput from "../components/UI/TimeInput";
import { GuestCount } from "../data/GuestCount";
import { SittingTimes } from "../data/SittingTimes";
import SearchBooking from "../components/SearchBooking";

const Reservation = () => {
  return (
    <>
      <section className="p-[2rem]">
        <ReservationText />
        <SearchBooking />
        <TegelBooking />
      </section>
    </>
  );
};

export default Reservation;
