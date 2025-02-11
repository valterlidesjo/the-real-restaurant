import React from "react";
import { NavLink, useLocation } from "react-router"; // Korrekt import
import "./scss/_navbar.scss";

const Navbar = () => {
  const location = useLocation(); // Flytta useLocation direkt in i komponenten

  return (
    <>
      <header>
        <nav className="flex justify-center items-center flex-col w-dvw p-[1rem_2rem_2rem_2rem] gap-2 ">
          <p className="logo text-[3rem] font-bold text-center md:text-[4rem]">
            Terni.
          </p>
          <div className="flex justify-between items-center w-full md:w-[80%] lg:w-[40%] ">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")} // Använd isActive
            >
              <p className="text-[0.65rem] text-center w-[30%] sm:text-[1rem]">
                Home
              </p>
            </NavLink>
            <NavLink
              to="/reservation"
              className={({ isActive }) => (isActive ? "active" : "")} // Använd isActive
            >
              <p className="text-[0.65em] text-center w-[30%] sm:text-[1rem]">
                Reservation
              </p>
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")} // Använd isActive
            >
              <p className="text-[0.65rem] text-center w-[30%] sm:text-[1rem]">
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
