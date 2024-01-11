import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";

export default function Whychoose() {
  return (
    <div className="w-full grid place-content-center md:p-14 lg:p-32 gap-8 p-4">
      <div className="flex flex-col lg:flex-row items-center justify-center ">
        <div className="text-[30px] mb-5">
          <div className="sm:p-4 text-center sm:text-left">
            <p>why choose me</p>
            <p className="text-[16px] font-bold sm:text-[18px] sm:font-semibold">
              we provide solutions to grow your buisness{" "}
            </p>
            <p className="sm:text-[16px] sm:font-medium text-[16px] font-normal">
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews. thinking to further the overall proposition.
            </p>
          </div>
          <div className="grid grid-cols-1 place-content-center sm:grid-cols-2 md:grid-cols-2 ">
            <div className="m-5 flex gap-3">
              <div className="text-20px text-[#40DDB6]">
                <IoCheckmarkCircle />
              </div>
              <div>
                <h1 className="text-[14px] font-bold md:font-bold md:text-[20px]">
                  2,800+ Active clients
                </h1>
                <p className="text-[16px] md:font-normal md:text-[18px]">
                  provide a robust synopsis for high level overviews.
                </p>
              </div>
            </div>
            <div className="m-5 flex gap-3">
              <div className="text-20px text-[#40DDB6]">
                <IoCheckmarkCircle />
              </div>
              <div>
                <h1 className="text-[14px] font-bold md:font-bold md:text-[20px]">
                  106+ Team members
                </h1>
                <p className="text-[16px] md:font-normal md:text-[18px]">
                  provide a robust synopsis for high level overviews.
                </p>
              </div>
            </div>
            <div className="m-5 flex gap-3">
              <div className="text-20px text-[#40DDB6]">
                <IoCheckmarkCircle />
              </div>
              <div>
                <h1 className="text-[14px] font-bold md:font-bold md:text-[20px]">
                  106+ Team members
                </h1>
                <p className="text-[16px] md:font-normal md:text-[18px]">
                  provide a robust synopsis for high level overviews.
                </p>
              </div>
            </div>
            <div className="m-5 flex gap-3">
              <div className="text-20px text-[#40DDB6]">
                <IoCheckmarkCircle />
              </div>
              <div>
                <h1 className="text-[14px] font-bold md:font-bold md:text-[20px]">
                  1,670 + 5 stars reviews
                </h1>
                <p className="text-[16px] md:font-normal md:text-[18px]">
                  provide a robust synopsis for high level overviews.
                </p>
              </div>
            </div>
          </div>
          <button className="ml-4 text-[18px] py-[16px] px-[26px] bg-[#636892]">
            Appointment
          </button>
        </div>
        <div className="flex flex-col gap-[30px]">
          <div className="flex gap-2 items-center justify-center bg-[#F4F4F4] p-2">
            <div className="relative w-40 h-40">
              <svg className="w-full h-full" viewBox="0 0 98 98">
                <circle
                  className="text-gray-200 stroke-current"
                  stroke-width="3"
                  cx="49"
                  cy="49"
                  r="44"
                  fill="transparent"
                ></circle>

                <circle
                  className="text-indigo-500  progress-ring__circle stroke-current"
                  stroke-width="3"
                  stroke-linecap="round"
                  cx="49"
                  cy="49"
                  r="44"
                  fill="transparent"
                  stroke-dasharray="274.889"
                  stroke-dashoffset="27.4889"
                  /* stroke-dashoffset="calc(400 - (400 * 45) / 100)" */
                ></circle>

                <text
                  x="50"
                  y="50"
                  font-family="Verdana"
                  font-size="12"
                  text-anchor="middle"
                  alignment-baseline="middle"
                >
                  95%
                </text>
              </svg>
            </div>
            <div>
              <p className="text-[20px] font-bold">Clients</p>
              <h1 className="text-[16px] font-bold">Quick Response</h1>
              <p className="text-[16px]">
                Objectively products whereas parallel platforms procedures
              </p>
            </div>
          </div>
          <div className="flex gap-2 items-center justify-center bg-[#F4F4F4] p-2">
            <div className="relative w-40 h-40">
              <svg className="w-full h-full" viewBox="0 0 98 98">
                <circle
                  className="text-gray-200 stroke-current"
                  stroke-width="3"
                  cx="49"
                  cy="49"
                  r="44"
                  fill="transparent"
                ></circle>

                <circle
                  className="text-indigo-500  progress-ring__circle stroke-current"
                  stroke-width="3"
                  stroke-linecap="round"
                  cx="49"
                  cy="49"
                  r="44"
                  fill="transparent"
                  stroke-dasharray="274.889"
                  stroke-dashoffset="27.4889"
                  /* stroke-dashoffset="calc(400 - (400 * 45) / 100)" */
                ></circle>

                <text
                  x="50"
                  y="50"
                  font-family="Verdana"
                  font-size="12"
                  text-anchor="middle"
                  alignment-baseline="middle"
                >
                  95%
                </text>
              </svg>
            </div>
            <div>
              <p className="text-[20px] font-bold">Clients</p>
              <h1 className="text-[16px] font-bold">Quick Response</h1>
              <p className="text-[16px]">
                Objectively products whereas parallel platforms procedures
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
