import React from 'react'
import Image from "next/image";
import { SlCalender } from "react-icons/sl";
import { IoIosArrowForward } from "react-icons/io";
import Link from 'next/link';

// {
//     id: 1,
//     projectTitle: "Modern Office Renovation",
//     image: "/project1.jpg",
//     clientName: "ABC Corporation",
//     location: "City Center, New York",
//     date: "2023-05-15",
//     website: "http://www.abccorporation.com",
//     projectDetails: "A comprehensive renovation project focusing on creating a dynamic and collaborative workspace. The design incorporates sleek aesthetics, state-of-the-art technology, and ergonomic furnishings to enhance employee productivity and well-being.",
//     listContent: [
//       "Open workspace layout",
//       "Smart lighting solutions",
//       "Tech-integrated meeting rooms",
//     ],
//     projectDetails2: "Integration of Sustainable Practices",
//     listContent2: [
//       "Energy-efficient HVAC systems",
//       "Recycled and eco-friendly materials",
//       "Green rooftop garden",
//     ],
//   },

interface componentProps {
    key:number;
    project:{
        id:string|number,
        projectTitle: string,
        image: string,
        date:string,
        
    }
    }


const Project:React.FC<componentProps> = ({key, project}) => {

    
    return (
        <div className='rounded p-4 shadow w-full hover:shadow-xl ease-in-out duration-300'>
            <Image src={project.image} alt={project.projectTitle} width={150} height={100} className="w-full object-fit h-32" />
            <h1 className='text-sm font-bold my-2'>{project.projectTitle}</h1>
            <div className='flex justify-between items-center'>
                <span className='flex gap-4' style={{ color: "rgb(3 105 161)" }}>
                <SlCalender  />
                <p className='text-xs'>{project.date}</p>
                </span>
                <Link href={"/projects/"+project.id} className=' rounded-full flex items-center justify-center p-2 hover:text-white text-black bg-slate-100 hover:bg-sky-700 ease-in-out duration-300'>
                    <IoIosArrowForward />
                </Link>
            </div>
        </div>
    )
}

export default Project