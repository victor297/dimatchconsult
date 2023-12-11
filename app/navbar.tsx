"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import locationIcon from "@/public/icons/nav-location.svg";
import messageIcon from "@/public/icons/nav-message.svg";
import timeIcon from "@/public/icons/time.svg";
import trenovaLogo from "@/public/icons/trenova-logo.png";
import facebookIcon from "@/public/icons/facebook.svg";
import instagramIcon from "@/public/icons/instagram.svg";
import twitterIcon from "@/public/icons/twitter.svg";
import pintrestIcon from "@/public/icons/pintrest.svg";

const Navbar = () => {
  const pathname = usePathname();

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
    <header>
      <div className="flex justify-around bg-darkGray">
        <div className="flex items-center gap-20 p-2">
          <div className="flex items-center gap-3">
            <div>
              <Image src={locationIcon} alt="location" width={16} height={17} />
            </div>
            <div className=" text-white font-interRegular text-sm tracking-wide">
              <p>24 Olive Street, Prairie, NY 53590</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
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
              <Image src={facebookIcon} alt="facebook" width={18} height={17} />
            </Link>
            <Link href="">
              <Image src={twitterIcon} alt="twitter" width={18} height={17} />
            </Link>
            <Link href="">
              <Image src={pintrestIcon} alt="pintrest" width={18} height={17} />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-center justify-around">
        <div className="flex items-center gap-2">
          <div>
            <Image src={trenovaLogo} alt="logo" width={30} />
          </div>
          <div>
            <h2 className="text-darkGray font-poppinsBold text-2xl">
              WhiteCo<span className="text-blue">ll</span>ar
            </h2>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <nav className="p-10 bg-white text-darkGray">
            {menuItems.map(({ id, name, link }) => (
              <Link
                key={id}
                href={link}
                className={`${
                  pathname === link
                    ? "bg-gray-100 font-interSemiBold font-bold text-darkGray px-4 py-2 rounded-t-lg"
                    : "text-darkGray px-4 py-2 rounded-t-lg tracking-tight font-interRegular"
                }`}
              >
                {name}
              </Link>
            ))}
          </nav>
          <div>
            <button className="bg-blue px-8 py-4 text-white font-cabinRegular text-lg tracking-wider hover:bg-lightBlue">
              Get Consulting
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
