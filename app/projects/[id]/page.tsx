"use client"
import teams from "@/utils/teams";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Banner from "../../components/banner/Banner";
import Container from "../../components/Container";
import projectsData from "../../../utils/projects";
import ProjectCard from "../ProjectCard";

interface Props{
  params:{
      id:string | undefined
  }
}
const Project = ({params:{id}}:Props) => {
  
  const data= projectsData.find(item=> item.id === Number(id))

  const shuffled = projectsData.filter(item=> item.id !== Number(id)).slice().sort(() => Math.random() - 0.5)
  const related_object = shuffled.slice(0,3)
  
  

  return (
    <div>
    <Banner
        head="The Case Studies"
        content="Our latest projects"
        paragragh=""
        bg="bg-about-texture"
    />
    <Container>
        <div className={`flex flex-col justify-center items-center w-full py-4`}>

          <div className="w-10/12 lg:h-96 h-48 mt-16 mb-8">
            <Image 
            src={data.image}
            alt={data.projectTitle}
            width={700}
            height={300}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            className="rounded"/>
          </div>

          <div className="flex lg:w-10/12 w-full flex-col lg:flex-row lg:justify-between justify-center items-center lg:items-start lg:gap-5 gap-2">

            <div className="bg-gray-100 lg:w-4/12 w-10/12 text-sm" >
              <h1 className="w-full font-bold bg-teal-300 text-white p-2 px-8">Project Details</h1>
              <span className="w-10/12 border-b p-2 mx-8 inline-block">
                <h1 className="font-semibold text-sm">Client:</h1>
                <p className="text-xs opacity-70">{data?.clientName}</p>
              </span>
              <span className="w-10/12 border-b p-2 mx-8 inline-block">
                <h1 className="font-semibold text-sm">Location:</h1>
                <p className="text-xs opacity-70">{data?.location}</p>
              </span>
              <span className="w-10/12 border-b p-2 mx-8 inline-block">
                <h1 className="font-semibold text-sm">Project Date:</h1>
                <p className="text-xs opacity-70">{new Date(data?.date).toLocaleDateString("en-US", {
                    day: "numeric", month: "long", year:"numeric"
                })}</p>
              </span>
              <span className="w-10/12 p-2 mx-8 inline-block">
                <h1 className="font-semibold text-sm">Website:</h1>
                <p className="text-xs opacity-70">{data?.website}</p>
              </span>
            </div>

            <div className="lg:w-8/12 w-10/12" >
                <h1 className="font-bold mb-4 text-center lg:text-start text-xl mt-4 lg:mt-0">Project Information</h1>
                <p className="text-sm opacity-70 text-justify lg:text-left">{data?.projectDetails}</p>
            </div>
          </div>

          <div className="mt-8 lg:w-10/12 w-full text-center">
            <h1 className="text-xl font-bold">Related Project</h1>
            <div className="flex flex-col lg:flex-row items-center lg:justify-between justify-center gap-3">
                {
                  related_object.map(item=>
                    <ProjectCard key={item.id} project={item} />
                  )
                }
            </div>

          </div>

        </div>
    </Container>
    </div>
    
);
};

export default Project;
