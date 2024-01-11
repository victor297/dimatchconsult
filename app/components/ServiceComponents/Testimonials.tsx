import React from "react";
import Image from "next/image";
export default function Testimonials() {
  return (
    <div className=" px-3 md:px-[200px]">
      <div className="flex gap-8 flex-col md:flex-row">
        <div>
          <p className="text-[14px]">testimonial</p>
          <p className="text-[20px] font-bold">What Our Client Say&#39;s</p>
          <p className="text-[18px]">
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews.Iterative{" "}
          </p>
        </div>
        <div className="flex flex-wrap gap-6 items-start justify-center">
          <div className="flex-1 bg-[#F6F6F6] px-4 py-5">
            <div className="flex mb-6  gap-3">
              <div className="relative h-[100px] w-[100px] overflow-hidden rounded-[50%]">
                <Image
                  src="/team2.png"
                  alt="project2"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h1>Nattasha Kelvin</h1>
                <p>Designer</p>
              </div>
            </div>
            <p className="text-[16px]">
              “ dd an excerpt from your personal biography, or simply let the
              world know who you are and what you have to offer. Connect with
              your site visitor’s on a personal level and make sure that your
              site.
            </p>
          </div>
          <div className="flex-1 bg-[#F6F6F6] px-4 py-5">
            <div className="flex mb-6 gap-3">
              <div className="relative h-[100px] w-[100px] rounded-[50%] overflow-hidden">
                <Image
                  src="/team2.png"
                  alt="project2"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h1>Nattasha Kelvin</h1>
                <p>Designer</p>
              </div>
            </div>
            <p>
              “ Leverage agile frameworks to provide a robust synopsis for high
              level overviews ”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
