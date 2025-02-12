import React from "react";

interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  return (
    <>
      <button className="logo text-[white] font-bold w-full bg-[#761D09] p-[1rem] ">
        {text}
      </button>
    </>
  );
};

export default Button;
