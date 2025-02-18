import { FiPhone, FiMail } from "react-icons/fi";
import ContactMap from "../components/ContactMap/ContactMap";
import { contact } from "../data/ContactInfo";

const Contact = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center flex-col p-8">
        <div className="map test-cursor my-5">
          <ContactMap />
        </div>
        <p className="text-2xl mb-1">{contact.address}</p>
        <p className="text-2xl mb-8">{contact.location}</p>
        <p className="text-2xl mb-1">{contact.hours}</p>
        <p className="text-2xl mb-8">Every day</p>

        <div className="flex flex-col justify-center items-center w-full space-y-4">
          <div className="flex items-center">
            <div className="w-10 h-10 border-2 border-black flex justify-center items-center">
              <FiPhone className="text-2xl" />
            </div>
            <p className="text-[1.35rem] pl-4">{contact.phone}</p>
          </div>
          <div className="flex items-center">
            <div className="w-10 h-10 border-2 border-black flex justify-center items-center">
              <FiMail className="text-2xl" />
            </div>
            <a
              href={`mailto:${contact.email}?subject=Contact ${contact.name}`}
              className="text-[1.35rem] pl-4"
            >
              {contact.email}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
