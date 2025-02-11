import React from "react";

const Homepage = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <img src={pizza} alt="Pizza" className="w-3/4 my-16" />
      <p className="text-3xl mb-2">Fitzgerald Av. 5</p>
      <p className="text-3xl mb-8">Kingston, Jamaica</p>
      <p className="text-3xl mb-2">18.00 - 00.00</p>
      <p className="text-3xl">Every day</p>
    </div>
  );
};

export default Homepage;
