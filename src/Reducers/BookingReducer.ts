import { Booking } from "../models/Booking";
import { DateResponse } from "../models/DateResponse";

export type IAction =
  | { type: ActionType.SET_DATE; payload: string }
  | { type: ActionType.SET_GUESTS; payload: string }
  | { type: ActionType.SET_TIME; payload: string }
  | { type: ActionType.SET_SEARCH_RESULTS; payload: DateResponse[] }
  | { type: ActionType.SET_FIRST_NAME; payload: string }
  | { type: ActionType.SET_LAST_NAME; payload: string }
  | { type: ActionType.SET_EMAIL; payload: string }
  | { type: ActionType.SET_PHONE; payload: string };

export enum ActionType {
  SET_GUESTS,
  SET_DATE,
  SET_TIME,
  SET_SEARCH_RESULTS,
  SET_FIRST_NAME,
  SET_LAST_NAME,
  SET_PHONE,
  SET_EMAIL,
}

export const BookingReducer = (booking: Booking, action: IAction): Booking => {
  switch (action.type) {
    case ActionType.SET_GUESTS:
      return {
        ...booking,
        customer: { ...booking.customer },
        numberOfGuests: +action.payload,
      };
    case ActionType.SET_DATE:
      return {
        ...booking,
        customer: { ...booking.customer },
        date: action.payload,
      };
    case ActionType.SET_TIME:
      return {
        ...booking,
        customer: { ...booking.customer },
        time: action.payload,
      };
    case ActionType.SET_SEARCH_RESULTS:
      return {
        ...booking,
        customer: { ...booking.customer },
        searchResults: action.payload,
      };

    case ActionType.SET_FIRST_NAME:
      return {
        ...booking,
        customer: { ...booking.customer, name: action.payload },
      };
    case ActionType.SET_LAST_NAME:
      return {
        ...booking,
        customer: { ...booking.customer, lastname: action.payload },
      };
    case ActionType.SET_PHONE:
      return {
        ...booking,
        customer: { ...booking.customer, phone: action.payload },
      };
    case ActionType.SET_EMAIL:
      return {
        ...booking,
        customer: { ...booking.customer, email: action.payload },
      };
    default:
      return booking;
  }
};
