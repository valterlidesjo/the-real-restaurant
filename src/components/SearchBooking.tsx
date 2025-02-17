import { useState } from "react";
import TimeInput from "./UI/TimeInput";
import { GuestCount } from "../data/GuestCount";
import { SittingTimes } from "../data/SittingTimes";
import Button from "./UI/Button";
import { ActionType } from "../Reducers/BookingReducer";
import { useBookingContext } from "../Context/BookingsContext";
import SearchBookingResults from "./SearchBookingResults";
import { checkAvailableDate } from "../services/checkAvailableDate";
import { DateResponse } from "../models/DateResponse";

const SearchBooking = () => {
  const { booking, dispatch } = useBookingContext();
  const [haveSearched, isHaveSearched] = useState(false);
  const [searchedDatesData, isSearchedDatesData] = useState<DateResponse[]>([]);

  const handleClick = async () => {
    isHaveSearched(true);
    const numberOfDays = 2;
    const response = await checkAvailableDate({ booking, numberOfDays });
    isSearchedDatesData(response);
  };

  return (
    <>
      <TimeInput
        dispatch={dispatch}
        type={ActionType.SET_GUESTS}
        header="Guests"
        content={GuestCount}
      />
      <TimeInput dispatch={dispatch} type={ActionType.SET_DATE} header="Date" />
      <TimeInput
        dispatch={dispatch}
        type={ActionType.SET_TIME}
        header="Time"
        content={SittingTimes}
      />
      <Button onClick={() => handleClick()} text="SEARCH BOOKING" />

      {haveSearched ? (
        <SearchBookingResults
          searchedDatesData={searchedDatesData}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default SearchBooking;
