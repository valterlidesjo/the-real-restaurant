import React from "react";
import ReservationText from "../components/ReservationText";
import Button from "../components/UI/Button";
import TegelBooking from "../components/UI/TegelBooking";

const Reservation = () => {
  return (
    <>
      <section className="p-[2rem]">
        <ReservationText />

        <Button text="SEARCH BOOKING" />
        <TegelBooking />
      </section>
    </>
  );
};

export default Reservation;
