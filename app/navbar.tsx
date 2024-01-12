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
  const [isClicked, setIsClicked] = useState(false);

  const pathname = usePathname();

  const handleClick = () => {
    setIsClicked(!isClicked);
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
      name: "Teams",
      link: "/team",
    },
    {
      id: 4,
      name: "Projects",
      link: "/projects",
    },
    {
      id: 5,
      name: "Services",
      link: "/services",
    },
    {
      id: 6,
      name: "Faq",
      link: "/faq",
    },
    {
      id: 7,
      name: "Contact Us",
      link: "/contact",
    },
  ];

  return (
    <header>
      <div className="flex justify-end md:flex-none">
        <button
          className="block md:hidden transition py-4 px-5 md:py-0 cursor-pointer"
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

      <div className="hidden md:block">
        <div className="flex justify-around bg-darkGray">
          <div className="flex items-center gap-20 p-2">
            <div className="flex items-center gap-3">
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
            <div className="flex items-center justify-end gap-3">
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

          <div className="flex items-center gap-20">
            <div className="flex items-center gap-3">
              <div>
                <Image src={timeIcon} alt="time" width={18} height={17} />
              </div>
              <div className=" text-white font-interRegular text-sm tracking-wide">
                <p>Mon-Fri:8:00 am - 5:00 pm</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
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
        <div className="flex flex-row items-center justify-around">
          <div className="p-4">
            <div className="flex justify-center items-center gap-2">
              <div>
                <Image src={trenovaLogo} alt="logo" width={30} />
              </div>
              <div>
                <h2 className="text-darkGray font-poppinsBold text-2xl">
                  WhiteCo<span className="text-blue">ll</span>ar
                </h2>
              </div>
            </div>
          </div>
          <div className="w-auto flex items-center justify-center">
            <nav className="text-center text-base flex p-8 bg-white text-darkGray">
              {menuItems.map(({ id, name, link }) => (
                <Link
                  key={id}
                  href={link}
                  className={`${
                    pathname === link
                      ? "bg-gray-100 font-interSemiBold font-bold text-darkGray py-2 px-4  rounded-t-lg"
                      : "text-darkGray py-2 px-4 rounded-t-lg tracking-tight font-interRegular"
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

      {isClicked && (
        <div className="w-full h-[100vh] bg-darkGray z-10 absolute top-0 transition ease-in-out delay-300 duration-300 ">
          <div className="flex justify-end">
            <button
              className="transition py-4 px-5 absolute top-0 cursor-pointer"
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

          <div>
            <div className="pt-32 pb-10 px-5 bg-darkGray">
              <div>
                <div className="flex items-center justify-center gap-2">
                  <div>
                    <Image
                      src={locationIcon}
                      alt="location"
                      width={16}
                      height={16}
                    />
                  </div>
                  <div className=" text-white font-interRegular text-xs lg:text-sm tracking-wide">
                    <p>24 Olive Street, Prairie, NY 53590</p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2 mb-[2px]">
                  <div>
                    <Link href="">
                      <Image
                        src={messageIcon}
                        alt="message"
                        width={16}
                        height={16}
                      />
                    </Link>
                  </div>
                  <div>
                    <p className=" text-white font-interRegular text-xs lg:text-sm  tracking-wider">
                      whitecollar@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="flex items-center gap-2">
                  <div>
                    <Image src={timeIcon} alt="time" width={16} height={16} />
                  </div>
                  <div className=" text-white font-interRegular text-xs lg:text-sm tracking-wide">
                    <p>Mon-Fri:8:00 am - 5:00 pm</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
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
                    <Image
                      src={twitterIcon}
                      alt="twitter"
                      width={18}
                      height={17}
                    />
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
            <div>
              <div className="absolute top-12 w-[100%] m-auto mt-5 p-4">
                <div className="flex justify-center items-center gap-1">
                  <div>
                    <Image src={trenovaLogo} alt="logo" width={30} />
                  </div>
                  <div>
                    <h2 className="text-white font-poppinsBold text-2xl">
                      WhiteCo<span className="text-blue">ll</span>ar
                    </h2>
                  </div>
                </div>
              </div>
              <div className="w-auto flex flex-col gap-10  items-center">
                <nav className="w-[70%] text-center flex flex-col bg-white rounded-sm  text-darkGray">
                  {menuItems.map(({ id, name, link }) => (
                    <Link
                      key={id}
                      href={link}
                      onClick={handleClick}
                      className={`${
                        pathname === link
                          ? "bg-gray-100 font-interSemiBold font-bold text-darkGray py-1  rounded-t-lg text:sm"
                          : "text-darkGray py-1 rounded-t-lg tracking-tight font-interRegular text-sm"
                      }`}
                    >
                      {name}
                    </Link>
                  ))}
                </nav>
                <div>
                  <button className="bg-blue px-6 py-3 text-white font-cabinRegular text-[16px] tracking-wider rounded-sm hover:bg-lightBlue">
                    Get Consulting
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
