import { Booking } from "../models/Booking";
import { apiServices } from "./apiServices";

export const postData = async (test: Booking) => {
  try {
    const response = await apiServices.post<Booking>("/booking/create", test);
    console.log(response);
  } catch (error) {
    console.log("TEST ERROR", error);
  }
};

export const fetchData = async (id: string) => {
  try {
    const response = await apiServices.get("/booking/restaurant/", id);
    return response;
  } catch (error) {
    console.log("TEST ERROR", error);
  }
};
