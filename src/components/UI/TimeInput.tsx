import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface TimeInputProps {
  header: string;
  content: string[];
}

const TimeInput: React.FC<TimeInputProps> = ({ header, content }) => {
  const isDatePicker = header.toLowerCase() === "date";
  const today = new Date().toISOString().split("T")[0];

  const [isOpen, setIsOpen] = useState(false);
  const [chosen, setChosen] = useState(
    isDatePicker ? today : content[1] || "Please chose"
  );

  const handleClick = () => {
    if (!isDatePicker) setIsOpen((prev) => !prev);
  };
  const handleSelect = (time: string) => {
    setChosen(time);
    setIsOpen(false);
  };

  return (
    <>
      <div className="w-full flex justify-center items-center">
        <div className="w-4/5 border border-black border-solid mb-4">
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
                  onChange={(e) => setChosen(e.target.value)}
                  className="text-3xl outline-none logo font-bold"
                />
              ) : (
                <p className="text-xl logo font-bold">{chosen}</p>
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
                    <p className="logo font-bold text-xl">
                  {m}
                    </p>
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
