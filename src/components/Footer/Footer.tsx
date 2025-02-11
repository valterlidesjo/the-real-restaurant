import { contact } from "../../data/ContactInfo";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="max-w-6xl mx-auto bg-white p-8">
      <div className="text-center mb-4">
        <h2 className="text-2xl italic font-semibold">{contact.name}</h2>
      </div>
      <div className="flex justify-between items-start">
        <div className="text-left">
          <p className="font-bold uppercase text-sm">Make Reservation &gt;</p>
          <p>{contact.address}</p>
          <p>{contact.location}</p>
        </div>
        <div className="text-right">
          <p className="font-bold uppercase text-sm">Get in touch</p>
          <a
            href={`mailto:${contact.email}`}
            className="text-black-600 underline"
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
