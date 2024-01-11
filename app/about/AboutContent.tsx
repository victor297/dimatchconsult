import teams from "@/utils/teams";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  MdEditCalendar,
  MdHomeFilled,
  MdLibraryAddCheck,
  MdWhatsapp,
} from "react-icons/md";
import { TiSocialTwitter, TiSocialInstagram } from "react-icons/ti";
import { FaHandsHelping } from "react-icons/fa";
import Banner from "../components/banner/Banner";
import Container from "../components/Container";

const AboutContent = () => {
  return (
    <div>
      <Banner
        head="About us"
        content=" Know More About Us"
        paragragh="Collaboratively administrate empowered markets plug
        and play networks dynamically procrastinated "
        showButton
        bg="bg-home-texture"
      />
      <Container>
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
                level overviews.Iterative approaches to corporate strategy
                foster collaborative thinking to further the overal.{" "}
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
        <div className="my-6">
          <div className="flex items-center gap-1 justify-center">
            <div className="h-2 w-2 bg-green"></div> Work Process
          </div>
          <p className=" text-center font-bold text-4xl p-4">How we Work</p>
          <div className="flex flex-col sm:flex-row gap-6 shrink-0 text-center p-2">
            <div className="flex flex-col bg-slate-100 relative items-center gap-5">
              <MdEditCalendar
                className="absolute top-[-12px] text-white bg-green p-2 rounded-full"
                size={35}
              />

              <p className="mt-4 font-bold">Make Appointment</p>
              <p className="pb-2">
                Leverage agile frameworks provide synopsishigh level overviews
                value proposition.
              </p>
            </div>
            <div className="flex flex-col bg-slate-100 relative items-center gap-5">
              <FaHandsHelping
                className="absolute top-[-12px] rounded-full bg-blue p-2"
                size={35}
              />

              <p className="mt-4 font-bold">Make Appointment </p>
              <p className="pb-2">
                Leverage agile frameworks provide synopsishigh level overviews
                value proposition.
              </p>
            </div>{" "}
            <div className="flex flex-col bg-slate-100 relative items-center gap-5">
              <MdLibraryAddCheck
                className="absolute top-[-12px] rounded-full text-white bg-green p-2"
                size={35}
              />

              <p className="mt-4 font-bold">Make Appointment</p>
              <p className="pb-2">
                Leverage agile frameworks provide synopsishigh level overviews
                value proposition.
              </p>
            </div>
          </div>
        </div>
        <div className="my-6">
          <div className="flex items-center gap-1 justify-center">
            <div className="h-2 w-2 bg-green"></div> Our Team
          </div>
          <p className=" text-center font-bold text-4xl p-2">
            Meet Our Experts
          </p>
          <div className="grid grid-cols sm:grid-cols-3 gap-6 shrink-0 text-center p-2 h-96">
            {teams.map((team) => (
              <div key={team.id} className="group relative ">
                <Image
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top"
                  alt={team.name}
                  // className="w-full object-contain rounded-md"
                  className="rounded-md"
                  src={team.teamLead.image}
                />
                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center sm:justify-end opacity-90 text-white p-4">
                  <div className=" sm:mb-2 bg-white text-black rounded-md p-3 z-20">
                    <h2 className=" font-bold">{team.teamLead.name}</h2>
                    <p> {team.name}</p>
                  </div>
                </div>
                <div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center z-10 items-center bg-sky-500 opacity-0 group-hover:bg-opacity-70 group-hover:h-full group-hover:opacity-100 duration-500">
                  <div className="flex gap-4 text-white">
                    <a className="bg-green rounded-full" href="#">
                      <MdWhatsapp size={35} />
                    </a>
                    <a className="bg-green rounded-full" href="#">
                      <TiSocialInstagram size={35} />
                    </a>
                    <a className="bg-green rounded-full" href="#">
                      <TiSocialTwitter size={35} />
                    </a>
                  </div>
                </div>
              </div>

              // <div key={team.id}>
              //   <h2>{team.name}</h2>
              //   <p>Team Lead: {team.teamLead.name}</p>
              //   <ul>
              //     {team.members.map((member) => (
              //       <li key={member.id}>
              //         {member.name} - {member.position}
              //       </li>
              //     ))}
              //   </ul>
              // </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutContent;
