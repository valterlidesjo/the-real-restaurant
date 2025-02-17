import React from "react";

const ReservationText = () => {
  return (
    <>
      <div className="flex flex-col gap-4 mb-12">
        <p className="text-center text-2xl">+ 1337 420 420</p>
        <p className="leading-loose">
          Reserve your table below for an exquisite dining experience. For
          larger parties or special requests, contact us at the number above or
          info@terni.kingston. We look forward to welcoming you to{" "}
          <span className="logo text-2xl font-bold">Terni.</span> for an
          unforgettable culinary journey.
        </p>
      </div>
    </>
  );
};

export default ReservationText;
