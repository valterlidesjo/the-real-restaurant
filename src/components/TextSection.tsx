import React from "react";
import { Link } from "react-router";

interface TextSectionProps {
  header: string;
  text: string;
  link?: string;
  linkText?: string;
}

const TextSection = ({ header, text, link, linkText }: TextSectionProps) => {
  return (
    <>
      <div className="flex flex-col gap-3">
        <p className="text-3xl font-bold ">{header}</p>
        <Link to={`/${link}`} className="text-[1.25rem] underline">
          {linkText}
        </Link>
        <p>{text}</p>
      </div>
    </>
  );
};

export default TextSection;
