import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { ActionType, IAction } from "../../Reducers/BookingReducer";
import { useBookingContext } from "../../Context/BookingsContext";

interface TimeInputProps {
  header: string;
  content?: string[];
  dispatch: React.Dispatch<IAction>;
  type: ActionType;
}

const TimeInput: React.FC<TimeInputProps> = ({
  header,
  content = [],
  dispatch,
  type,
}) => {
  const isDatePicker = type === ActionType.SET_DATE;
  const today = new Date().toISOString().split("T")[0];
  const guest = type === ActionType.SET_GUESTS;
  const { booking } = useBookingContext();

  const [isOpen, setIsOpen] = useState(false);
  const [chosen, setChosen] = useState(
    isDatePicker ? today : content[1] || "Please chose"
  );

  const handleClick = () => {
    if (!isDatePicker) setIsOpen((prev) => !prev);
  };

  const handleSelect = (value: string) => {
    setChosen(value);
    setIsOpen(false);

    dispatch({
      type: type,
      payload: value,
    });
    
  };

  return (
    <>
      <div className="w-full flex justify-center items-center">
        <div className="w-full border border-black border-solid mb-4">
          <div
            className="flex flex-row justify-between items-center"
            onClick={handleClick}
          >
            <div className="flex flex-col justify-center items-start ml-2 p-2">
              <p className="text-[0.6rem]">{header}</p>
              {isDatePicker ? (
                <input
                  type="date"
                  value={chosen}
                  onChange={(e) => {
                    setChosen(e.target.value);
                    dispatch({ type, payload: e.target.value });
                  }}
                  className="text-3xl outline-none logo font-bold"
                />
              ) : (
                <p className="text-xl logo font-bold">{guest ? `${chosen} Guests` : chosen}</p>
              )}
            </div>
            <div className="m-2" id="arrow-container">
              {!isDatePicker && (
                <IoIosArrowDown
                  className={`m-2 transform transition-transform duration-500 ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              )}
            </div>
          </div>

          <div
            className={
              isOpen && !isDatePicker
                ? "h-auto flex flex-col justify-center items-start pl-2 ml-2"
                : "hidden"
            }
          >
            <ul className="w-full">
              {content.map((m, index) => (
                <li
                  key={index}
                  className="text-sm mb-1 w-full"
                  onClick={() => handleSelect(m)}
                >
                  <p className="logo font-bold text-xl">{guest ? `${m} Guests` : m}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimeInput;
