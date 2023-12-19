import { trucateText } from "@/utils/truncateText";
import Link from "next/link";
import React from "react";

const PreviewCard = ({ service }: { service: any }) => {
  return (
    <div className="p-4 flex flex-col sm:items-start gap-2  sm:w-auto items-center  bg-slate-100">
      <div className="flex w-auto sm:w-80 items-start gap-4 sm:gap-[50px]">
        <div className="flex w-[163px] flex-col items-start gap-[10px] shrink-0">
          <p className="text-2xl font-bold leading-7">
            {trucateText(service.title)}
          </p>
          <Link href={`/service/${service.id}`} className=" text-blue-600">
            read more
          </Link>
        </div>
        <div className=" w-[72px] h-[72px] shrink-0 bg-green">{"icon"}</div>
      </div>
    </div>
  );
};

export default PreviewCard;
