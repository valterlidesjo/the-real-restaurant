import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface TimeInputProps {
  header: string;
  chosen: string;
  
}

const TimeInput: React.FC<TimeInputProps> = ({ header, chosen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className="w-4/5 border border-black border-solid">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col justify-center items-center ml-2 p-2">
            <p className="text-[0.6rem]">{header}</p>
            <p className="text-sm">{chosen}</p>
          </div>
          <div className="mr-2" onClick={handleClick}>
            <IoIosArrowDown />
          </div>
        </div>

        <div
          className={
            isOpen
              ? "h-28 flex flex-col justify-center items-center p-8"
              : "hidden"
          }
        >
          <p>Hidden information</p>
        </div>
      </div>
    </>
  );
};

export default TimeInput;
