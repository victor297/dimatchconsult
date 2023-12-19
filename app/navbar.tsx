"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconContext } from "react-icons";
import { IoClose } from "react-icons/io5";
import { HiMenuAlt2 } from "react-icons/hi";

import locationIcon from "@/public/icons/nav-location.svg";
import messageIcon from "@/public/icons/nav-message.svg";
import timeIcon from "@/public/icons/time.svg";
import trenovaLogo from "@/public/icons/trenova-logo.png";
import facebookIcon from "@/public/icons/facebook.svg";
import instagramIcon from "@/public/icons/instagram.svg";
import twitterIcon from "@/public/icons/twitter.svg";
import pintrestIcon from "@/public/icons/pintrest.svg";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const pathname = usePathname();

  const handleClick = () => {
    setClicked(!clicked);
  };

  const menuItems = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "About Us",
      link: "/about",
    },
    {
      id: 3,
      name: `Pages`,
      link: "/pages",
    },
    {
      id: 4,
      name: "Services",
      link: "/services",
    },
    {
      id: 5,
      name: "Blog",
      link: "/blogs",
    },
    {
      id: 6,
      name: "Contact Us",
      link: "/contact",
    },
  ];

  return (
    // <header className="bg-darkGray py-2 w-full lg:px-12 lg:py-3 text-white">
    <header className="">
      <div className="flex justify-end md:flex-none">
        <button
          className="block sm:hidden transition py-4 px-5 sm:py-0"
          onClick={handleClick}
        >
          <IconContext.Provider
            value={{
              color: "black",
              className: "global-class-name text-darkGray text-lg",
              size: "30",
            }}
          >
            <div>
              <HiMenuAlt2 />
            </div>
          </IconContext.Provider>
        </button>
      </div>

      <div
        className={`${
          clicked
            ? "block w-[100%] h-[100vh] bg-darkGray z-10 absolute top-0 transition ease-in-out delay-300 duration-300 "
            : "hidden "
        } md:block`}
      >
        <div className="flex justify-end md:flex-none">
          <button
            className="block sm:hidden transition py-4 px-5 sm:py-0 absolute top-0"
            onClick={handleClick}
          >
            <IconContext.Provider
              value={{
                color: "white",
                className: "global-class-name text-white text-lg",
                size: "30",
              }}
            >
              <div>
                <IoClose />
              </div>
            </IconContext.Provider>
          </button>
        </div>

        <div className="pt-32 pb-10 lg:pt-0 lg:pb-0 px-5 lg:px-0 lg:flex lg:justify-around bg-darkGray">
          <div className="lg:flex lg:items-center lg:gap-20 p-2">
            <div className="flex items-center justify-center lg:justify-start gap-2 lg:gap-3">
              <div>
                <Image
                  src={locationIcon}
                  alt="location"
                  width={16}
                  height={17}
                />
              </div>
              <div className=" text-white font-interRegular text-sm tracking-wide">
                <p>24 Olive Street, Prairie, NY 53590</p>
              </div>
            </div>
            <div className="flex items-center justify-center lg:justify-end gap-2 lg:gap-3">
              <Link href="">
                <Image src={messageIcon} alt="message" width={18} height={17} />
              </Link>
              <div>
                <p className=" text-white font-interRegular text-sm tracking-wider">
                  whitecollar@gmail.com
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-20">
            <div className="flex items-center gap-2 lg:gap-3">
              <div>
                <Image src={timeIcon} alt="time" width={18} height={17} />
              </div>
              <div className=" text-white font-interRegular text-sm tracking-wide">
                <p>Mon-Fri:8:00 am - 5:00 pm</p>
              </div>
            </div>
            <div className="flex items-center gap-2 lg:gap-3">
              <Link href="">
                <Image
                  src={instagramIcon}
                  alt="instagram"
                  width={18}
                  height={17}
                />
              </Link>
              <Link href="">
                <Image
                  src={facebookIcon}
                  alt="facebook"
                  width={18}
                  height={17}
                />
              </Link>
              <Link href="">
                <Image src={twitterIcon} alt="twitter" width={18} height={17} />
              </Link>
              <Link href="">
                <Image
                  src={pintrestIcon}
                  alt="pintrest"
                  width={18}
                  height={17}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:flex lg:flex-row lg:items-center lg:justify-around">
          <div className="absolute top-12 lg:relative lg:top-0 w-[100%] lg:w-auto m-auto mt-5 lg:m-0 p-4 lg:p-0">
            <div className="  flex justify-center items-center gap-1 lg:gap-2">
              <div>
                <Image src={trenovaLogo} alt="logo" width={30} />
              </div>
              <div>
                <h2 className="text-white lg:text-darkGray font-poppinsBold text-2xl">
                  WhiteCo<span className="text-blue">ll</span>ar
                </h2>
              </div>
            </div>
          </div>
          <div className="w-auto flex flex-col gap-10 lg:gap-0 lg:flex-row items-center lg:justify-center">
            <nav className="w-[80%] lg:w-auto text-center lg:text-base flex flex-col lg:flex-row lg:p-8 bg-white rounded-sm lg:rounded-none text-darkGray">
              {menuItems.map(({ id, name, link }) => (
                <Link
                  key={id}
                  href={link}
                  onClick={handleClick}
                  className={`${
                    pathname === link
                      ? "bg-gray-100 font-interSemiBold font-bold text-darkGray py-2 lg:px-4 lg:py-2 rounded-t-lg"
                      : "text-darkGray py-2 lg:px-4 lg:py-2 rounded-t-lg tracking-tight font-interRegular"
                  }`}
                >
                  {name}
                </Link>
              ))}
            </nav>
            <div>
              <button className="bg-blue px-8 py-4 text-white font-cabinRegular text-lg tracking-wider rounded-sm hover:bg-lightBlue">
                Get Consulting
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
