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
      return {...booking, numberOfGuests: +action.payload};
    case ActionType.SET_DATE:
      return {...booking, date: action.payload};
    case ActionType.SET_TIME:
      return {...booking, time: action.payload};
    default:
      return booking;
  }
};
