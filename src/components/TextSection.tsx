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
        <p className="text-3xl font-bold md:text-5xl">{header}</p>
        <Link
          to={`/${link}`}
          className="text-[1.25rem] font-semibold underline md:text-2xl"
        >
          {linkText}
        </Link>
        <p className="md:text-[1.25rem]">{text}</p>
      </div>
    </>
  );
};

export default TextSection;
