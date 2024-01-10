"use client"
import React from 'react'
import Image from "next/image";
import { SlCalender } from "react-icons/sl";
import { IoIosArrowForward } from "react-icons/io";
import Link from 'next/link';

interface componentProps {
    key:number;
    project:{
        id:string|number,
        projectTitle: string,
        image: string,
        date:string,
        
    }
    }


const ProjectCard:React.FC<componentProps> = ({project}) => {

    
    return (
        <div className='rounded p-4 shadow w-full hover:shadow-2xl ease-in-out duration-300'>
            <Image src={project.image} alt={project.projectTitle} width={150} height={100} className="w-full object-fit h-32" />
            <h1 className='text-sm font-bold my-2'>{project.projectTitle}</h1>
            <div className='flex justify-between items-center'>
                <span className='flex gap-4' style={{ color: "rgb(3 105 161)" }}>
                <SlCalender  />
                <p className='text-xs'>{new Date(project.date).toLocaleDateString("en-US", {
                    day: "numeric", month: "long", year:"numeric"
                })}</p>
                </span>
                <Link href={"/projects/"+project.id} className=' rounded-full flex items-center justify-center p-2 hover:text-white text-black bg-slate-100 hover:bg-sky-700 ease-in-out duration-300'>
                    <IoIosArrowForward />
                </Link>
                
            </div>
        </div>
    )
}

export default ProjectCard