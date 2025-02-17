import { useBookingContext } from "../Context/BookingsContext";
import { DateResponse } from "../models/DateResponse";

export const id = "67ac975e21ba0a444fe1f5a8";

interface SearchBookingResultsProps {
  searchedDatesData: DateResponse[];
}

const SearchBookingResults = ({
  searchedDatesData,
}: SearchBookingResultsProps) => {
  // const { booking } = useBookingContext();

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

      // Capitalize the first letter (just in case)
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
                  <button className="p-4 bg-[#780111] w-full text-white font-bold">18.00</button>
                </>
              )}
              {s.is21Full ? (
                <>
                  <p className="p-4 bg-gray-500 w-full text-center text-white font-bold">21.00</p>
                </>
              ) : (
                <>
                  <button className="p-4 bg-[#780111] w-full text-white font-bold">21.00</button>
                </>
              )}
            </div>
          </div>
        )
      })}
      </div>
    </>
  );
};

export default SearchBookingResults;
