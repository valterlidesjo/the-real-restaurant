import { Booking } from "../models/Booking";

export interface IAction {
  type: ActionType;
  payload: string;
}

export enum ActionType {
  SET_GUESTS,
  SET_DATE,
  SET_TIME,
}

export const BookingReducer = (booking: Booking, action: IAction): Booking => {
  switch (action.type) {
    case ActionType.SET_GUESTS:
      booking.numberOfGuests = +action.payload;
      return booking;
    case ActionType.SET_DATE:
      booking.date = action.payload;
      return booking;
    case ActionType.SET_TIME:
      booking.time = action.payload;
      return booking;
    default:
      return booking;
  }
};
