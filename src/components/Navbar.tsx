import React from "react";
import { NavLink, useLocation } from "react-router"; // Korrekt import
import "./scss/_navbar.scss";

const Navbar = () => {
  const location = useLocation(); // Flytta useLocation direkt in i komponenten

  return (
    <>
      <header>
        <nav className="flex justify-center items-center flex-col w-dvw p-4 gap-2 ">
          <p className="logo text-[3rem] font-bold text-center md:text-[4rem]">
            Terni.
          </p>
          <div className="flex justify-between items-center w-full md:w-[80%] lg:w-[60%] ">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")} // Använd isActive
            >
              <p className="text-[0.65rem] text-center w-[3rem] sm:text-[1rem] md:w-[5rem]">
                Home
              </p>
            </NavLink>
            <NavLink
              to="/reservation"
              className={({ isActive }) => (isActive ? "active" : "")} // Använd isActive
            >
              <p className="text-[0.65em] text-center w-[5rem] sm:text-[1rem] md:w-[7rem]">
                Reservation
              </p>
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")} // Använd isActive
            >
              <p className="text-[0.65rem] text-center w-[3rem] sm:text-[1rem] md:w-[5rem]">
                Contact
              </p>
            </NavLink>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
