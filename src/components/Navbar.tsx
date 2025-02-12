import React, { useState } from "react";
import { NavLink, useLocation } from "react-router"; // Korrekt import
import "./scss/_navbar.scss";
import michelin from "../assets/michelin-guide-logo 2.png";

const Navbar = () => {
  const location = useLocation(); // Flytta useLocation direkt in i komponenten

  return (
    <>
      <header>
        <nav className="flex justify-center items-center flex-col w-dvw p-[1rem_2rem_2rem_2rem] gap-4 ">
          <p className="logo text-[3rem] font-bold text-center md:text-[4.5rem]">
            Terni.
          </p>
          <img src={michelin} alt="" />
          <div className="flex justify-between items-center w-full md:w-[80%] lg:w-[40%] ">
            <div className="w-[30%] flex justify-center items-center">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "active text-[0.65rem] text-center sm:text-[1rem]"
                    : "text-[0.65rem] text-center sm:text-[1rem]"
                }
              >
                Home
              </NavLink>
            </div>
            <div className="w-[30%] flex justify-center items-center">
              <NavLink
                to="/reservation"
                className={({ isActive }) =>
                  isActive
                    ? "active text-[0.65rem] text-center sm:text-[1rem]"
                    : "text-[0.65rem] text-center sm:text-[1rem]"
                }
              >
                Reservation
              </NavLink>
            </div>
            <div className="w-[30%] flex justify-center items-center">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "active text-[0.65rem] text-center sm:text-[1rem]"
                    : "text-[0.65rem] text-center sm:text-[1rem]"
                }
              >
                Contact
              </NavLink>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;

//Slider:
//-> lägga till så att man mappar igenom
//-> lägga till animation på slidern
//-> fixa underlinen
//-> fixa michelinbilden -> klar
//-> fixa färgändring på navbar vid scroll
