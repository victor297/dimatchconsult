import Image from "next/image";
import Banner from "./components/banner/Banner";
import Link from "next/link";
import PreviewCard from "./components/cards/PreviewCard";
import Container from "./components/Container";
import projectsData from "@/utils/projects";
import servicesData from "@/utils/services";

const PageContent = () => {
  return (
    <div>
      <Banner
        head="Welcome to Dimatech Solution"
        content=" The Best Value for Business and Corporation"
        paragragh=" Colaboratively administrate empowered markets plug and play networks
          dynamically procastinated"
        showButton
        bg="bg-home-texture"
        height="min-h-[90vh]"
      />

      <div className={`min-h-[90vh] flex flex-col sm:flex-row`}>
        <div className="w-full lg:w-5/12 bg-opacity-70 bg-slate-100 backdrop-blur-lg inset-0 flex flex-col justify-end gap-6 p-16">
          <div className="w-80 sm:self-end  self-center">
            {" "}
            {/* Updated this line */}
            <div className="h-80 w-full aspect-square relative">
              <Image alt="about" src={"/about-home.jpg"} fill />
            </div>
            <p className="text-start font-bold text-2xl py-2">
              {" "}
              we are ready to grow your business with us
            </p>
            <p className="font-normal font-edium text-gray-600">
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews. thinking to further the overall value
              proposition.{" "}
            </p>
            <Link
              className="font-bold underline text-emerald-400"
              href={"/contact"}
            >
              {" "}
              Get in Touch
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-7/12 bg-opacity-70 inset-0 flex flex-col justify-center gap-6 text-start lg:p-16 sm:p-6 ">
          <div className="w-auto max-w-xs sm:max-w-sm lg:max-w-lg self-center sm:self-start ">
            <p>welcom Dima</p>
            <p className="text-start font-bold text-4xl py-2 text-ellipsis">
              {" "}
              We Care About Your Business Plan
            </p>
            <p className="font-light font-edium text-gray-600 text-ellipsis">
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews.Iterative approaches to corporate strategy foster
              collaborative thinking to further the overal.{" "}
            </p>
            <p className=" font-light  text-gray-600 py-2">
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews.Iterative approaches to corporate strategy
            </p>
            <p className="font-medium">Components of a Business Strategy</p>
            <p className=" py-2 font-medium">Business Consulting</p>
            <div className=" flex flex-col sm:flex-row gap-2 mb-4">
              <div className="flex-1 border p-3">
                <p className="font-bold text-lg">Experience</p>
                <p>Leverage frameworks toprovidee werment.</p>
              </div>
              <div className="flex-1 border p-3">
                <p className="font-bold text-lg">Award winner</p>
                <p>Leverage frameworks toprovidee werment.</p>
              </div>
            </div>
            <button className="p-3 bg-blue-800 text-white ">
              More About Us
            </button>
          </div>
        </div>
      </div>

      <Container>
        <div className="h-16 w-full relative my-2">
          <Image alt="client logo" src={"/clientlogo.jpg"} fill />
        </div>
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
      <div className=" h-[25vh] sm:h-[75vh] w-full relative  cursor-pointer my-10">
        <Image alt="client logo" src={"/whychooseme.jpg"} fill />
      </div>
      <div>
        <Container>
          <div className=" flex items-center justify-between max-w-screen-xl p-4 lg:p-0">
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 bg-green"></div> Our project
              </div>
              <p className="font-bold text-2xl">
                You can check our projects as inspiration.
              </p>
            </div>
            <Link href={"/project"} className="text-white p-4 bg-green">
              More Work
            </Link>
          </div>
        </Container>
        <div className="sm:flex gap-4 h-96 w-full overflow-hidden py-4 justify-center mx-auto hidden ">
          {projectsData.slice(0, 5).map((project) => (
            <div
              key={project.id}
              className="relative h-full w-72 aspect-square"
            >
              <Image alt={project.image} src={project.image} fill />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageContent;
