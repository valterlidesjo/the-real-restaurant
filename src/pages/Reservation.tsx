import ReservationText from "../components/ReservationText";
import TegelBooking from "../components/UI/TegelBooking";
import GuestDetailsForm from "../components/GuestDetailsForm/GuestDetailsForm";
import { useState } from "react";
import SearchComponent from "../components/SearchComponent";
import SearchBookingResults from "../components/SearchBookingResults";
import { useBookingContext } from "../Context/BookingsContext";

const Reservation = () => {
  const [selectedTime, setSelectedTime] = useState<{
    date: string;
    time: string;
  } | null>(null);
  const { booking } = useBookingContext();

  return (
    <>
      <section className="p-[2rem]">
        <ReservationText />
        {!selectedTime && (
          <>
            <SearchComponent />
            {booking.searchResults && booking.searchResults.length > 0 && (
              <SearchBookingResults
                setSelectedTime={setSelectedTime}
                searchedDatesData={booking.searchResults || []}
              />
            )}
          </>
        )}
        {selectedTime && <GuestDetailsForm onBack={() => setSelectedTime(null)} />}
        <TegelBooking />
        <div className="flex justify-center items-center w-full h-20">
          <p className="text-[0.6rem]">We value your privacy and handle your personal information with the utmost care, following GDPR guidelines to ensure your data is protected and used responsibly.</p>
        </div>
      </section>
    </>
  );
};

export default Reservation;
