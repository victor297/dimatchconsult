import servicesData from "@/utils/services";
import Offerings from "../components/ServiceComponents/Offerings";
import Testimonials from "../components/ServiceComponents/Testimonials";
import Whychoose from "../components/ServiceComponents/Whychoose";
import ServiceContent from "./ServiceContent";
import ServicesLink from "../components/ServiceComponents/ServicesLink";
const services = () => {
  return (
    <main className="flex flex-col items-center justify-center p-1 w-full mb-5">
      <div className="text-center text-[#37393F] flex flex-col items-center justify-center">
        <h1 className="flex gap-3 items-center justify-center flex-nowrap text-xl font-semibold">
          <div className="h-[15px] w-[15px] bg-emerald-500">{""}</div>
          Our Services
        </h1>
        <p className="text-[25px] md:text-[25px]">
          We Provide Professional Business Solutions.
        </p>
        <div className="grid place-content-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 sm:gap-3 gap-8 p-5 md:px-[100px] lg:px-[200px] mb-6">
          {servicesData.map((service) => {
            return <ServicesLink key={service.id} {...service} />;
          })}
        </div>
      </div>
      <Offerings />
      <Whychoose />
      <Testimonials />
    </main>
  );
};

export default services;
