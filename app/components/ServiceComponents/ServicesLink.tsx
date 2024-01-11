import React from "react";
import Link from "next/link";
import { CiBank, CiRuler } from "react-icons/ci";
type Service = {
  id?: number;
  title?: string;
  heading1?: string;
  heading2?: string;
  heading3?: string;
  content1?: string;
  content2?: string;
  subheading?: string;
  listContent?: string[];
  content1heading1?: string;
  image?: string;
  image1?: string;
};

const Services: React.FC<Service> = ({
  id,
  title,
  heading1,
  heading2,
  heading3,
  content1,
  content2,
  listContent,
  content1heading1,
  image,
  image1,
}) => {
  const getFontSize = (title: string) => {
    const maxLength = 20;

    return title.length > maxLength
      ? "text-base md:text-sm lg:text-base"
      : "text-lg md:text-xl lg:text-2xl";
  };

  const sanitizedTitle = title ?? "Default Title";

  return (
    <div
      key={id}
      className="flex flex-col justify-between p-4 h-auto bg-gray-200 overflow-hidden"
    >
      <div className="flex justify-between items-center">
        <p
          className={`overflow-hidden text-center ${getFontSize(
            sanitizedTitle
          )}`}
        >
          {sanitizedTitle}
        </p>
        <div className="text-6xl bg-cyan-500 rounded-full p-1 justify-center items-center">
          <CiBank />
        </div>
      </div>
      <Link href="/" className="text-[#6B77E5] text-left p-1 sm:text-justify">
        Read More
      </Link>
    </div>
  );
};

export default Services;
