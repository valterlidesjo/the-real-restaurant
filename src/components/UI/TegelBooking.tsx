import React from "react";
import tegelbooking from "../../assets/Group 1.svg";

const TegelBooking = () => {
  return (
    <div className="flex w-full items-center justify-center gap-2 mt-4">
      <img src={tegelbooking} alt="Tegel booking" />
      <p className="text-[0.75rem] text-[#803882] font-bold">
        Powered by TEGELBOOKING
      </p>
    </div>
  );
};

export default TegelBooking;
