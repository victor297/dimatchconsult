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
        {/* <div className={`min-h-[90vh] flex flex-col sm:flex-row`}> */}
        {/* <div className="w-full lg:w-5/12 bg-opacity-70 bg-slate-100 backdrop-blur-lg inset-0 flex flex-col justify-end gap-6 p-16">
            Our Teams
          </div> */}

        <div className="grid grid-cols sm:grid-cols-3 gap-6 shrink-0 text-center p-2 h-96">
          {teams.map((team) => (
            <div key={team.id} className="group relative ">
              <Image
                layout="fill"
                objectFit="cover"
                objectPosition="top"
                alt={team.name}
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
          ))}
        </div>
        {/* </div> */}
      </Container>
    </main>
  );
};

export default TeamContent;
