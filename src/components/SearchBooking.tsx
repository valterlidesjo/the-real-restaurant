import { useBookingContext } from "../Context/BookingsContext";
import SearchBookingResults from "./SearchBookingResults";
import SearchComponent from "./SearchComponent";

const SearchBooking = () => {
  const { booking } = useBookingContext();

  return (
    <>
      <SearchComponent />
      {booking.searchResults.length > 0 && (
        <SearchBookingResults searchedDatesData={booking.searchResults} />
      )}
    </>
  );
};

export default SearchBooking;
