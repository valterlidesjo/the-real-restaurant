import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { ActionType, IAction } from "../../Reducers/BookingReducer";

interface TimeInputProps {
  header: string;
  content?: string[];
  className?: string,
  dispatch: React.Dispatch<IAction>;
  type: ActionType;
}

const TimeInput: React.FC<TimeInputProps> = ({
  header,
  className,
  content = [],
  dispatch,
  type,
}) => {
  const isDatePicker = type === ActionType.SET_DATE;
  const today = new Date().toISOString().split("T")[0];
  const guest = type === ActionType.SET_GUESTS;

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
  
    switch (type) {
      case ActionType.SET_DATE:
      case ActionType.SET_GUESTS:
      case ActionType.SET_TIME:
        dispatch({
          type,
          payload: value,
        });
        break;

      default:
        console.error("Unknown action type:", type);
    }
  };
  

  return (
    <>
      <div className="w-full flex justify-center items-center relative">
        <div className={`w-full min-h-[3rem] border border-black border-solid ${className}`}>
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
                  className="h-full w-full text-xl outline-none logo font-bold appearance-none"
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

          {isOpen && !isDatePicker && (
          <div className="absolute left-0 w-full bg-white border border-black mt-1 z-10">
            <ul className="w-full">
              {content.map((m, index) => (
                <li
                  key={index}
                  className="text-sm p-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleSelect(m)}
                >
                  <p className="logo font-bold text-xl">{guest ? `${m} Guests` : m}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
        </div>
      </div>
    </>
  );
};

export default TimeInput;
