import { createContext, Dispatch, ReactNode, useContext, useEffect, useReducer } from "react";
import { Booking } from "../models/Booking";
import { BookingReducer, IAction } from "../Reducers/BookingReducer";
import { id } from "../components/SearchBookingResults";


interface BookingsContextProps {
    booking: Booking,
    dispatch: Dispatch<IAction>
}

const today = new Date().toISOString().split("T")[0];

export const initialState: Booking = {
    restaurantId: id,
    date: today,
    time: "18.00",
    numberOfGuests: 2,
    customer: {
      name: "",
      lastname: "",
      email: "",
      phone: ""
    }
};

export const BookingsContext = createContext<BookingsContextProps>({
    booking: initialState,
    dispatch: () => {}
});

interface BookingProviderProps {
    children: ReactNode;
}


export const BookingProvider = ({ children } : BookingProviderProps) => {


    const [ booking, dispatch ] = useReducer(BookingReducer, initialState);


    return (
        <>
        <BookingsContext.Provider value={{ booking, dispatch }}>
            {children}
        </BookingsContext.Provider>
        </>
    )
}

export const useBookingContext = () => useContext(BookingsContext);


