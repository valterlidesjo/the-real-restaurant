import React from "react";
import { FiPhone, FiMail } from "react-icons/fi";

const Contact = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center flex-col p-8">
        <div className="Karta">Karta</div>
        <p className="text-2xl mb-1">Fitzgerald Av. 5</p>
        <p className="text-2xl mb-8">Kingston, Jamaica</p>
        <p className="text-2xl mb-1">18.00 - 00.00</p>
        <p className="text-2xl mb-8">Every day</p>

        <div className="flex justity-center items-center w-full">
          <div className="w-[35%] flex justify-evenly items-end flex-col h-32">
            <div className="w-10 h-10 border-solid border-black border-2 flex justify-center items-center">
              <FiPhone className="text-2xl" />
            </div>
            <div className="w-10 h-10 border-solid border-black border-2 flex justify-center items-center">
              <FiMail className="text-2xl" />
            </div>
          </div>
          <div className="w-[65%] flex justify-evenly items-start flex-col h-32">
              <p className="text-[1.35rem] pl-4">+1337 420 420</p>
              <a href="mailto:info@terni.kingston?subject=Contact Terni" className="text-[1.35rem] pl-4">info@terni.kingston</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
