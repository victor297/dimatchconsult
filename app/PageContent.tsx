import Image from "next/image";
import Banner from "./components/banner/Banner";
import Link from "next/link";

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

      <div className={`min-h-[90vh] flex`}>
        <div className="w-full lg:w-5/12 bg-opacity-70 bg-slate-100 backdrop-blur-lg inset-0 flex flex-col justify-end gap-6 p-16">
          <div className="w-80 self-end ">
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
        <div className="w-full lg:w-7/12 bg-opacity-70 inset-0 flex flex-col justify-center gap-6 text-start p-16">
          <div className="w-96 ">
            <p>welcom Dima</p>
            <p className="text-start font-bold text-4xl py-2">
              {" "}
              We Care About Your Business Plan
            </p>
            <p className="font-light font-edium text-gray-600">
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
            <div className=" flex gap-2 mb-4">
              <div className="flex-1 border p-3">
                <p className="font-bold text-lg">Experience</p>
                <p>Leverage frameworks toprovidee werment.</p>
              </div>
              <div className="flex-1 border p-3">
                <p className="font-bold text-lg">Award winner</p>
                <p>Leverage frameworks toprovidee werment.</p>
              </div>
            </div>
            <button className="p-3 bg-blue-800 text-white">
              More About Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageContent;
