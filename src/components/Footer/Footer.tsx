import { contact } from "../../data/ContactInfo";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="w-full bg-white p-8">
      <div className="text-center mb-4">
        <h2 className="text-2xl logo text-[3rem] font-bold md:text-[4rem]">
          {contact.name}
        </h2>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between items-start">
        <div className="text-left">
          <p className="font-bold uppercase text-sm">Make Reservation &gt;</p>
          <p className="py-4">{contact.address}</p>
          <p>{contact.location}</p>
        </div>
        <div className="text-left md:text-right mt-4 md:mt-0">
          <p className="font-bold uppercase text-sm">Get in touch</p>
          <a
            href={`mailto:${contact.email}`}
            className="text-black-600 underline inline-block py-4"
          >
            {contact.email}
          </a>
          <p>{contact.phone}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
