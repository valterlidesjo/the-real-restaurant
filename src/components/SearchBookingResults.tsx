import { useState } from "react";
import { DateResponse } from "../models/DateResponse";
import Button from "./UI/Button";

export const id = "67ac975e21ba0a444fe1f5a8";

interface SearchBookingResultsProps {
  searchedDatesData: DateResponse[];
}

const SearchBookingResults = ({
  searchedDatesData,
}: SearchBookingResultsProps) => {
  const [selectedTime, setSelectedTime] = useState<{ date: string; time: string } | null>(null);

const handleChosen = (date: string, time: string) => {
  setSelectedTime({ date, time });
};

  return (
    <>
    <div className="flex flex-col gap-4 my-12">
      <div className="flex gap-4 justify-start items-center">
        <div className="w-6 h-6 bg-[#780111]"></div>
        <p>availables times</p>
      </div>
      <div className="flex gap-4 justify-start items-center">
        <div className="w-6 h-6 bg-gray-500"></div>
        <p>all tables are booked</p>
      </div>
    </div>
    <div className="flex flex-col justify-center items-center">
      {searchedDatesData.map((s, i) => {
        const dayOfWeek = new Date(s.date)
        .toLocaleDateString("en-US", { weekday: "long" });

      const formattedDay = dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1);
        return (
          <div className="flex justify-center items-start w-full flex-col" key={i}>
            <p className="text-xl mb-2">{formattedDay + " " + s.date}</p>
            <div className="flex w-full justify-center items-center gap-4 mb-4">
              {s.is18Full ? (
                <>
                  <p className="p-4 bg-gray-500 w-full text-center text-white font-bold">18.00</p>
                </>
              ) : (
                <>
                  <button className={`p-4 w-full text-white font-bold transition-all 
                  ${selectedTime?.date === s.date && selectedTime?.time === "18.00" ? "bg-red-600" : "bg-[#780111]"}`} onClick={() => handleChosen(s.date, "18.00")}>18.00</button>
                </>
              )}
              {s.is21Full ? (
                <>
                  <p className="p-4 bg-gray-500 w-full text-center text-white font-bold">21.00</p>
                </>
              ) : (
                <>
                  <button className={`p-4 w-full text-white font-bold transition-all 
                  ${selectedTime?.date === s.date && selectedTime?.time === "21.00" ? "bg-red-600" : "bg-[#780111]"}`} onClick={() => handleChosen(s.date, "21.00")}>21.00</button>
                </>
              )}
            </div>
          </div>
        )
      })}
      </div>
      <div className="w-full flex justify-center items-center mt-12">
        <Button text="CONTINUE WITH CHOSEN TIME"/>
      </div>
    </>
  );
};

export default SearchBookingResults;
