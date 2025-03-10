import { Link } from "react-router";
import { contact } from "../../data/ContactInfo";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="w-full bg-cream p-8 mt-32">
      <div className="text-center mb-2">
        <h2 className="text-2xl logo text-[3rem] font-bold md:text-[4rem]">
          {contact.name}
        </h2>
        <p className="pb-4 italic">{contact.location}</p>
      </div>

      <div className="flex justify-between items-center mt-5 links w-full md:w-[80%] lg:w-[40%] mx-auto">
        <Link to={"/"} className="font-bold uppercase text-sm w-[30%] flex justify-center items-center sm:text-[1rem]">
          Home
        </Link>
        <span className="block">&#x2022;</span>
        <Link to={"/reservation"} className="font-bold uppercase text-sm w-[30%] flex justify-center items-center sm:text-[1rem]">
          Reservation
        </Link>
        <span className="block">&#x2022;</span>
        <Link to={"/contact"} className="font-bold uppercase text-sm w-[30%] flex justify-center items-center sm:text-[1rem]">
          Contact
        </Link>
      </div>
      <p className="small text-center mt-7">
        © 2025 Terni. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
