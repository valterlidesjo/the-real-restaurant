import React, { useRef, useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { useBookingContext } from "../../Context/BookingsContext";
import { ActionType } from "../../Reducers/BookingReducer";
import { postData } from "../../services/bookingServices";

interface GuestDetailsFormProps {
  onBack: () => void;
}

const GuestDetailsForm: React.FC<GuestDetailsFormProps> = ({ onBack }) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
    const { booking, dispatch } = useBookingContext();
  const formRef = useRef<HTMLFormElement>(null);

  const handleInput = () => {
    if (formRef.current) {
      setFormIsValid(formRef.current.checkValidity());
      if (successMessage) {
        setSuccessMessage("");
      }
    }
  };

  const handleBack = () => {
    onBack();
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formRef.current?.checkValidity()) {
      localStorage.setItem("guestDetails", JSON.stringify(booking.customer));
      console.log(booking);
      
      const bookingData = {...booking};
      delete bookingData.searchResults;
      try {
        await postData(bookingData);
        
        formRef.current.reset();
        setFormIsValid(false);
        setSuccessMessage("We look forward to having you!");
        setTimeout(() => {
          setSuccessMessage("");
        }, 5000);
      } catch (error) {
        
      }
    }
  };

  return (
    <>
    <div className="flex justify-start items-center w-full" onClick={handleBack}>
      <FaChevronLeft className="mr-2"/>
      <p>back</p>
    </div>
    <form
      ref={formRef}
      method="post"
      className="max-w-md mx-auto guest-detail-form my-5 p-4"
      noValidate
      onInput={handleInput}
      onSubmit={handleSubmit}
    >
      <div className="mb-5">
        <label htmlFor="email" className="block mb-5">
          <span className="block text-gray-700">Email address</span>
          <input
            type="email"
            name="email"
            id="email"
            placeholder=" "
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            className="peer block w-full py-2 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 dark:text-gray-900 dark:border-gray-600 dark:focus:border-gray-500"
            onChange={(e) =>{ dispatch({ type: ActionType.SET_EMAIL, payload: e.target.value })}}
          />
          <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
            Please enter a valid email address.
          </span>
        </label>
      </div>

      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="mb-5">
          <label htmlFor="first_name" className="block mb-5">
            <span className="block text-gray-700">First name</span>
            <input
              type="text"
              name="first_name"
              id="first_name"
              placeholder=" "
              required
              className="peer block w-full py-2 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 dark:text-gray-900 dark:border-gray-600 dark:focus:border-gray-500"
              onChange={(e) =>{ dispatch({ type: ActionType.SET_FIRST_NAME, payload: e.target.value })}}
            />
            <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
              First name is required.
            </span>
          </label>
        </div>
        <div className="mb-5">
          <label htmlFor="last_name" className="block mb-5">
            <span className="block text-gray-700">Last name</span>
            <input
              type="text"
              name="last_name"
              id="last_name"
              placeholder=" "
              required
              className="peer block w-full py-2 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 dark:text-gray-900 dark:border-gray-600 dark:focus:border-gray-500"
            onChange={(e) =>{ dispatch({ type: ActionType.SET_LAST_NAME, payload: e.target.value })}}
            />
            <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
              Last name is required.
            </span>
          </label>
        </div>
      </div>

      <div className="mb-5">
        <label htmlFor="phone" className="block mb-5">
          <span className="block text-gray-700">Phone number</span>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder=" "
            required
            inputMode="numeric"
            pattern="[0-9+\-]*"
            className="peer block w-full py-2 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 dark:text-gray-900 dark:border-gray-600 dark:focus:border-gray-500"
          onChange={(e) =>{ dispatch({ type: ActionType.SET_PHONE, payload: e.target.value })}}
          />
          <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
            Please enter a valid phone number (123-456-7890).
          </span>
        </label>
      </div>

      <div className="mb-5">
        <label htmlFor="message" className="block mb-5">
          <span className="block text-gray-700">Special requests</span>
          <textarea
            name="message"
            id="message"
            placeholder=" "
            rows={4}
            className="peer block w-full py-2 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 dark:text-gray-900 dark:border-gray-600 dark:focus:border-gray-500"
          />
          <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
            Please enter your special requests.
          </span>
        </label>
      </div>

      <button
        type="submit"
        disabled={!formIsValid}
        className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
      >
        Confirm reservation
      </button>

      {successMessage && (
        <div className="mt-4 text-green-600 text-sm">{successMessage}</div>
      )}
    </form>
    </>
  );
};

export default GuestDetailsForm;
