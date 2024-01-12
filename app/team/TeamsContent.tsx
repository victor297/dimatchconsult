import React from "react";
// import teams from "@/utils/teams";
import teamMembers from "@/utils/teamMembers";
import Image from "next/image";
import { MdWhatsapp } from "react-icons/md";
import { TiSocialTwitter, TiSocialInstagram } from "react-icons/ti";
import Banner from "../components/banner/Banner";
import Container from "../components/Container";

const TeamContent = () => {
  return (
    <main>
      <Banner
        head="Our Team"
        content="Meet Our Experts"
        paragragh=" "
        bg="bg-team-texture"
      />

      <Container>
        <div className="my-28">
          <div className="grid grid-cols sm:grid-cols-3 gap-6 shrink-0 text-center p-2 h-[800px]">
            {teamMembers.map((team) => (
              <div key={team.id} className="group relative">
                <Image
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top"
                  alt={team.name}
                  className="rounded-md"
                  src={team.image}
                />
                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center sm:justify-end opacity-90 text-white p-4">
                  <div className=" sm:mb-2 bg-white text-black rounded-md p-3 z-20">
                    <h2 className=" font-bold">{team.name}</h2>
                    <p className="text-lightGray"> {team.position}</p>
                  </div>
                </div>
                <div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center z-10 items-center bg-sky-500 opacity-0 group-hover:bg-opacity-70 group-hover:h-full group-hover:opacity-100 duration-500">
                  <div className="flex gap-4 text-white">
                    <a className="p-2 bg-green rounded-full" href="#">
                      <MdWhatsapp size={25} />
                    </a>
                    <a className="p-2 bg-green rounded-full" href="#">
                      <TiSocialInstagram size={25} />
                    </a>
                    <a className="p-2 bg-green rounded-full" href="#">
                      <TiSocialTwitter size={25} />
                    </a>
                  </div>

                  <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center sm:justify-end opacity-90 text-white p-4">
                    <div className=" sm:mb-2 bg-white text-black rounded-md p-3 z-20">
                      <h2 className=" font-bold">{team.name}</h2>
                      <p className="text-lightGray"> {team.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative h-[450px] mt-20 flex border border-red-100 bg-darkGray">
            <div className="p-14 basis-[45%] flex justify-center items-center">
              <div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 bg-green"></div>
                  <span className="text-white font-interMedium font-medium text-lg">
                    Dedicated Team
                  </span>
                </div>
                <div>
                  <h1 className="my-3 text-white font-poppinsSemiBold text-2xl font-semibold">
                    Professional Individuals
                  </h1>
                  <div className="text-sm tracking-wider text-white font-interRegular font-normal">
                    Leverage agile frameworks to provided a synopsis for high
                    overviews thinking overall proposition.
                  </div>
                  <div className="flex items-center gap-5 mt-10">
                    <div className="">
                      <div className="relative w-36 h-36 rounded-full">
                        <Image
                          src={"/ellipse.svg"}
                          alt="ellipse"
                          layout="fill"
                          objectFit="cover"
                        />
                        <p className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-white text-xl font-poppinsSemiBold font-semibold flex flex-col items-center">
                          Year of
                          <span>2023</span>
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <p className="text-white text-4xl font-poppinsSemiBold font-semibold">
                        75%
                      </p>
                      <h2 className="mt-2 text-white font-poppinsSemiBold font-semibold text-lg">
                        Income Statement
                      </h2>
                      <p className="text-white text-sm font-interRegular font-normal">
                        Leverage agile frameworks to provide a robust
                        proposition.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative basis-[55%] h-full bg-yellow-600">
              <Image
                src={"/team7.png"}
                alt="a team"
                layout="fill"
                objectFit="cover"
                objectPosition="top"
              />
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default TeamContent;
