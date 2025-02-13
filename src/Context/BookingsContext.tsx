import { createContext, Dispatch, ReactNode, useContext, useEffect, useReducer } from "react";
import { Booking } from "../models/Booking";
import { BookingReducer, IAction } from "../Reducers/BookingReducer";


interface BookingsContextProps {
    booking: Booking,
    dispatch: Dispatch<IAction>
}

export const BookingsContext = createContext<BookingsContextProps>({
    booking: {
        restaurantId: "",
        date: "",
        time: "",
        numberOfGuests: 1,
        customer: {
          name: "",
          lastname: "",
          email: "",
          phone: ""
        }
    },
    dispatch: () => {}
});

interface BookingProviderProps {
    children: ReactNode;
}

export const initialState: Booking = {
    restaurantId: "",
    date: "",
    time: "",
    numberOfGuests: 1,
    customer: {
      name: "",
      lastname: "",
      email: "",
      phone: ""
    }
};

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


