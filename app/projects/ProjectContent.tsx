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
import projectData from "../../utils/projects"
import Project from "./Project";

const ProjectContent = () => {
  
  return (
    <div>
      <Banner
        head="The Case Studies"
        content="Our latest projects"
        paragragh=""
        bg="bg-project-texture"
      />
      <Container>
        <div className={`flex flex-col sm:flex-row`}>
          <div className="flex flex-col justify-center items-center w-full py-8">
            <div className="lg:w-8/12 w-11/12 py-4 text-center">
              <span className="flex items-center justify-center gap-4"><div className="h-2 w-2 bg-green "></div><h1>Latest Projects</h1></span>
              <h1 className="font-bold text-3xl my-2 text-center">Discover our latest client projects</h1>
              <p className="opacity-80 text-sm ">Leverage agile framework to provide a robust synopsis for high level overviews. Iterative approach to corporate strategy foster collaborative thinking to further the overall.</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-3 lg:w-11/12 w-10/12">
              {
                projectData.map(project=>{
                  return <Project key={project.id} project={project} />
                })
              }
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProjectContent;
