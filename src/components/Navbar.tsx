import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <>
      <header>
        <nav className="flex justify-center items-center flex-col w-dvw p-8 gap-4">
          <p className="logo text-[3rem] font-bold">Terni.</p>
          <div className="flex justify-evenly items-center w-full">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/reservation"}>Make Reservation</NavLink>
            <NavLink to={"/contact"}>Contact</NavLink>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;

//Slider funktionallitet
// -> när man står över den navigeringen så har den en svart underline
// ->  när en ny navlink väljs så slidar den över till vald navlink
