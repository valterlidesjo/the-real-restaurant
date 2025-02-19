import { NavLink } from "react-router";
import "./scss/_navbar.scss";
import michelin from "../assets/michelin-guide-logo 2.png";
import { useEffect, useState } from "react";
import { throttle } from "lodash";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const scrollTop = window.scrollY;
      const threshold = 0;
      setIsScrolled(scrollTop > threshold);
    }, 200);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  return (
    <>
      <div className="w-full h-32 md:h-50"></div>
      <header className="fixed z-50">
        <nav
          className={`flex justify-center items-center flex-col w-dvw p-[1rem_2rem_2rem_2rem] gap-4 transition-colors duration-300 ease-in-out" ${
            isScrolled ? "bg-[#ECE5D6] shadow-lg" : ""
          }`}
        >
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
                    ? "active text-sm text-center sm:text-[1rem] font-bold transition-all duration-300"
                    : "text-sm text-center sm:text-[1rem] hover:font-bold transition-[font-weight] duration-300"
                }
              >
                HOME
              </NavLink>
            </div>
            <div className="w-[30%] flex justify-center items-center">
              <NavLink
                to="/reservation"
                className={({ isActive }) =>
                  isActive
                    ? "active text-sm text-center sm:text-[1rem] font-bold transition-all duration-300"
                    : "text-sm text-center sm:text-[1rem] hover:font-bold transition-[font-weight] duration-300"
                }
              >
                RESERVATION
              </NavLink>
            </div>
            <div className="w-[30%] flex justify-center items-center">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "active text-sm text-center sm:text-[1rem] font-bold transition-all duration-300"
                    : "text-sm text-center sm:text-[1rem] hover:font-bold transition-[font-weight] duration-300"
                }
              >
                CONTACT
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
