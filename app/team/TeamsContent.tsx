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
        head="Our Team"
        content="Meet Our Experts"
        paragragh=" "
        bg="bg-team-texture"
      />

      <Container>
        <div className={`min-h-[90vh] flex flex-col sm:flex-row`}>
          <div className="w-full lg:w-5/12 bg-opacity-70 bg-slate-100 backdrop-blur-lg inset-0 flex flex-col justify-end gap-6 p-16">
            Our Teams
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutContent;
