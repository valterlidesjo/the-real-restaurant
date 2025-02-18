import { useNavigate } from "react-router";
import { useBookingContext } from "../Context/BookingsContext";
import { GuestCount } from "../data/GuestCount";
import { SittingTimes } from "../data/SittingTimes";
import { DateResponse } from "../models/DateResponse";
import { ActionType } from "../Reducers/BookingReducer";
import { checkAvailableDate } from "../services/checkAvailableDate";
import Button from "./UI/Button";
import TimeInput from "./UI/TimeInput";


const SearchComponent = () => {
  const { booking, dispatch } = useBookingContext();
  const navigate = useNavigate();

  const handleSearch = async () => {
    const numberOfDays = 2;
    const response: DateResponse[] = await checkAvailableDate({
      booking,
      numberOfDays,
    });

    dispatch({ type: ActionType.SET_SEARCH_RESULTS, payload: response });
    navigate("/reservation");
  };

  return (
    <>
    <div className="w-full p-8 md:flex justify-center items-stretch">
      <TimeInput
        dispatch={dispatch}
        type={ActionType.SET_GUESTS}
        header="Guests"
        content={GuestCount}
        className="mb-4 md:m-0"
      />
      <TimeInput dispatch={dispatch} type={ActionType.SET_DATE} header="Date" className="mb-4 md:m-0" />
      <TimeInput
        dispatch={dispatch}
        type={ActionType.SET_TIME}
        header="Time"
        content={SittingTimes}
        className="mb-4 md:m-0"
      />
      <Button onClick={handleSearch} text="SEARCH BOOKING" />
      </div>
    </>
  );
};

export default SearchComponent;
