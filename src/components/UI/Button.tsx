import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <>
      <button
        onClick={onClick}
        className="logo text-[white] font-bold w-full bg-[#780111] p-[1rem] "
      >
        {text}
      </button>
    </>
  );
};

export default Button;
