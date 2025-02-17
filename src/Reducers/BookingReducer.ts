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
      return {...booking, customer: {...booking.customer}, numberOfGuests: +action.payload};
    case ActionType.SET_DATE:
      return {...booking, customer: {...booking.customer}, date: action.payload};
    case ActionType.SET_TIME:
      return {...booking, customer: {...booking.customer}, time: action.payload};
    default:
      return booking;
  }
};
