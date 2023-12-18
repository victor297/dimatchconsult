import React from "react";
import Banner from "../components/banner/Banner";
import Container from "../components/Container";
import servicesData from "@/utils/services";
import PreviewCard from "../components/cards/PreviewCard";
import Image from "next/image";

const ServiceContent = () => {
  return (
    <div>
      <Banner
        head="Our Services"
        content="We're Offering"
        paragragh=" Collaboratively administrate empowered markets plug
        and play networks dynamically procrastinated "
        // showButton
        bg="bg-home-texture"
      />
      <Container>
        <div className="flex items-center gap-1 justify-center mt-12">
          <div className="h-2 w-2 bg-green"></div> Our Services
        </div>
        <p className=" text-center font-bold text-2xl p-4">
          We Provide Professional Business Solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6 gap-2  ">
          {servicesData.slice(0, 5).map((service) => (
            <PreviewCard key={service.id} service={service} />
          ))}
          <div className=" flex items-center justify-center  sm:w-auto bg-blue-700 text-center">
            <p className="self-center font-bold text-white text-2xl">
              More Services
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ServiceContent;
