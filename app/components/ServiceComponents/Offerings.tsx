import React from "react";
import { CiBank, CiRuler } from "react-icons/ci";

export default function Offerings() {
  return (
    <div className="bg-[#37393F] flex items-center justify-center w-full px-10">
      <div className="text-white w-auto lg:w-[1219px] py-5 grid place-content-center">
        <div className="text-center mb-6 mt-6 md:mx-10 lg:mx-[5rem] flex flex-col md:flex-row items-center justify-center ">
          <div className="text-center md:text-left flex-1">
            <h1 className="text-sm mb-2 md:mb-4">What we&lsquo;re offering</h1>
            <p className="text-lg font-bold">
              Services we are providing to our customers
            </p>
          </div>
          <p className="text-xs md:text-md text-center md:text-right flex-1">
            completely synergize resource taxing relationship via premier niche
            markets. professionally cultivate one-to-one customer service with
            service for state of the art customer service
          </p>
        </div>

        <div className="w-full sm:w-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-[29px] sm:p-4 md:p-8 lg:p-10">
          <div className=" py-4 px-4 md:w-auto md:py-[30px] md:px-[32px] border-[0.5px] text-center bg-transparent hover:bg-gradient-to-br from-[#9ba2e0] to-[#6B77E5] transform transition duration-400 ease-in-out">
            <div className="flex flex-col justify-center items-center gap-[10px] pointer">
              {/*  */}
              <div className="text-3xl md:text-5xl lg:text-6xl text-[#40DDB6]">
                <CiRuler />
              </div>
              {/* Service Meta */}
              <div className="flex flex-col gap-4 md:gap-2">
                <h1 className="text-[14px] font-bold sm:text-[16px] md:text-[20px] lg:text-[22px] md:font-semibold ">
                  Business Strategy
                </h1>
                <p className="text-[10px] sm:text-[14px] md:text-[16px] lg:text-[18px] text-gray-300 p-2 font-normal">
                  I throw myself down among the tall grass
                </p>
              </div>
            </div>
          </div>
          {/* Add more service boxes similarly */}
          <div className=" py-4 px-4 md:w-auto md:py-[30px] md:px-[32px] border-[0.5px] text-center bg-transparent hover:bg-gradient-to-br from-[#9ba2e0] to-[#6B77E5] transform transition duration-400 ease-in-out">
            <div className="flex flex-col justify-center items-center gap-[10px] pointer">
              {/*  */}
              <div className="text-3xl md:text-5xl lg:text-6xl text-[#40DDB6]">
                <CiRuler />
              </div>
              {/* Service Meta */}
              <div className="flex flex-col gap-4 md:gap-2">
                <h1 className="text-[14px] font-bold sm:text-[16px] md:text-[20px] lg:text-[22px] md:font-semibold ">
                  Business Strategy
                </h1>
                <p className="text-[10px] sm:text-[14px] md:text-[16px] lg:text-[18px] text-gray-300 p-2 font-normal">
                  I throw myself down among the tall grass
                </p>
              </div>
            </div>
          </div>
          {/* Add more service boxes similarly */}
          <div className=" py-4 px-4 md:w-auto md:py-[30px] md:px-[32px] border-[0.5px] text-center bg-transparent hover:bg-gradient-to-br from-[#9ba2e0] to-[#6B77E5] transform transition duration-400 ease-in-out">
            <div className="flex flex-col justify-center items-center gap-[10px] pointer">
              {/*  */}
              <div className="text-3xl md:text-5xl lg:text-6xl text-[#40DDB6]">
                <CiRuler />
              </div>
              {/* Service Meta */}
              <div className="flex flex-col gap-4 md:gap-2">
                <h1 className="text-[14px] font-bold sm:text-[16px] md:text-[20px] lg:text-[22px] md:font-semibold ">
                  Business Strategy
                </h1>
                <p className="text-[10px] sm:text-[14px] md:text-[16px] lg:text-[18px] text-gray-300 p-2 font-normal">
                  I throw myself down among the tall grass
                </p>
              </div>
            </div>
          </div>
          {/* Add more service boxes similarly */}
          <div className=" py-4 px-4 md:w-auto md:py-[30px] md:px-[32px] border-[0.5px] text-center bg-transparent hover:bg-gradient-to-br from-[#9ba2e0] to-[#6B77E5] transform transition duration-400 ease-in-out">
            <div className="flex flex-col justify-center items-center gap-[10px] pointer">
              {/*  */}
              <div className="text-3xl md:text-5xl lg:text-6xl text-[#40DDB6]">
                <CiRuler />
              </div>
              {/* Service Meta */}
              <div className="flex flex-col gap-4 md:gap-2">
                <h1 className="text-[14px] font-bold sm:text-[16px] md:text-[20px] lg:text-[22px] md:font-semibold ">
                  Business Strategy
                </h1>
                <p className="text-[10px] sm:text-[14px] md:text-[16px] lg:text-[18px] text-gray-300 p-2 font-normal">
                  I throw myself down among the tall grass
                </p>
              </div>
            </div>
          </div>
          {/* Add more service boxes similarly */}
        </div>
      </div>
    </div>
  );
}
