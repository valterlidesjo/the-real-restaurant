import { Booking } from "../models/Booking";
import { fetchData } from "./bookingServices";

const id = import.meta.env.VITE_API_ID;

interface CheckAvailableDateProps {
  booking: Booking;
  numberOfDays?: number;
}

export const checkAvailableDate = async ({
  booking,
  numberOfDays = 3,
}: CheckAvailableDateProps) => {
  const result: Booking[] = await fetchData(id);

  const searchedDate = new Date(booking.date);

  const endDate = new Date(searchedDate);
  endDate.setDate(searchedDate.getDate() + numberOfDays);

  const allDates: string[] = [];
  for (let d = new Date(searchedDate); d <= endDate; d.setDate(d.getDate() + 1)) {
    allDates.push(d.toISOString().split("T")[0]); // Omvandla till "YYYY-MM-DD"
  }

  const bookingsInRange = result.filter((b) => {
    const bookingDate = new Date(b.date);
    return bookingDate >= searchedDate && bookingDate <= endDate;
  });

  const dateAvailability: Record<string, { total: number; sitting18: number; sitting21: number }> = {};

  bookingsInRange.forEach((b) => {
    if (!dateAvailability[b.date]) {
      dateAvailability[b.date] = { total: 0, sitting18: 0, sitting21: 0 };
    }
    dateAvailability[b.date].total += 1;
    if (b.time === "18:00") dateAvailability[b.date].sitting18 += 1;
    if (b.time === "21:00") dateAvailability[b.date].sitting21 += 1;
  });


  const availabilityReport = allDates.map((date) => {
    const stats = dateAvailability[date] || { total: 0, sitting18: 0, sitting21: 0 };
    return {
      date,
      isFull: stats.total >= 30,
      is18Full: stats.sitting18 >= 15,
      is21Full: stats.sitting21 >= 15,
    };
  });

  return availabilityReport;
};
