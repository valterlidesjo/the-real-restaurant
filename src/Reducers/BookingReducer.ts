import { Booking } from "../models/Booking";
import { DateResponse } from "../models/DateResponse";

export type IAction =
  | { type: ActionType.SET_DATE; payload: string }
  | { type: ActionType.SET_GUESTS; payload: string }
  | { type: ActionType.SET_TIME; payload: string }
  | { type: ActionType.SET_SEARCH_RESULTS; payload: DateResponse[] };

export enum ActionType {
  SET_GUESTS,
  SET_DATE,
  SET_TIME,
  SET_SEARCH_RESULTS,
}

export const BookingReducer = (booking: Booking, action: IAction): Booking => {
  switch (action.type) {
    case ActionType.SET_GUESTS:
      return {...booking, customer: {...booking.customer}, numberOfGuests: +action.payload};
    case ActionType.SET_DATE:
      return {...booking, customer: {...booking.customer}, date: action.payload};
    case ActionType.SET_TIME:
      return {...booking, customer: {...booking.customer}, time: action.payload};
      case ActionType.SET_SEARCH_RESULTS:
      return {...booking, customer: {...booking.customer}, searchResults: action.payload};
    default:
      return booking;
  }
};
