import { IoIosArrowDown } from "react-icons/io";

interface TimeInputProps {
    header: string;
    chosen: string;
}


const TimeInput: React.FC<TimeInputProps> = ({ header, chosen }) => {
  return (
    <>
    <div className="w-4/5 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
            <p>{header}</p>
            <p>{chosen}</p>
        </div>
        <div><IoIosArrowDown/></div>

        {/* <div className="h-0 flex flex-col justify-center items-center p-8">
            <p>Hidden information</p>
        </div> */}
    </div>
    </>
  )
}

export default TimeInput