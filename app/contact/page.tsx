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

const Contact = () => {
  return (
    <div className="mb-20">
      <Banner
        head="Contact Us"
        content="Feel Free To Reach Us"
        paragragh=" "
        bg="bg-contact-texture"
      />

      <Container>
        {/* <div className={`min-h-[90vh] flex flex-col sm:flex-row`}> */}
        {/* <div className="w-full lg:w-5/12 bg-opacity-70 bg-slate-100 backdrop-blur-lg inset-0 flex flex-col justify-end gap-6 p-16">
            Contact us
          </div> */}
        <div className="flex gap-20 mt-40 mb-20">
          <div className="basis-1/2 relative">
            <Image
              src={"/contact1.jpg"}
              alt="edit icon"
              // width={400}
              // height={400}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div>
            <div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 bg-green"></div>
                <span>Let’s Talk</span>
              </div>
              <h2 className="py-5 font-poppinsBold text-4xl font-bold text-darkGray">
                Get in touch with us
              </h2>
              <p className="w-[500px]">
                Completely synergize resource taxing relationships via premier
                niche dynamically innovate state of the art customer service.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex gap-5 mt-10">
                <div>
                  <Image
                    src={"/icons/contact-phone.svg"}
                    alt="edit icon"
                    width={50}
                    height={50}
                  />
                </div>
                <div>
                  <p>Have any question?</p>
                  <h2 className="text-lg font-poppinsBold">
                    Free +01 569 896 654
                  </h2>
                </div>
              </div>

              <div className="flex gap-5">
                <div>
                  <Image
                    src={"/icons/contact-msg.svg"}
                    alt="edit icon"
                    width={50}
                    height={50}
                  />
                </div>
                <div>
                  <p>Write email</p>
                  <h2 className="text-lg font-poppinsBold">
                    Info@whitecollar.com
                  </h2>
                </div>
              </div>

              <div className="flex gap-5">
                <div>
                  <Image
                    src={"/icons/contact-location.svg"}
                    alt="edit icon"
                    width={50}
                    height={50}
                  />
                </div>
                <div>
                  <p>Visit anytime</p>
                  <h2 className="text-lg font-poppinsBold">
                    King Street, Prior Lake, New York
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center mb-10">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-3 w-3 bg-green"></div>
            <span>Contact Us</span>
          </div>

          <div>
            <h1 className="font-poppinsBold text-4xl text-darkGray font-bold">
              Request A Call Back !
            </h1>
          </div>
        </div>

        {/* </div> */}
        <form>
          <div className="flex flex-col gap-10">
            <div className="flex justify-between">
              <input
                type="text"
                placeholder="Your Name"
                className="p-4 bg-gray-100 sm:rounded-[4px] basis-[48%]"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="p-4 bg-gray-100 sm:rounded-[4px] basis-[48%]"
              />
            </div>
            <div className="flex justify-between">
              <input
                type="text"
                placeholder="Email Address"
                className="p-4 bg-gray-100 sm:rounded-[4px] basis-[48%]"
              />
              <input
                type="text"
                placeholder="Subject"
                className="p-4 bg-gray-100 sm:rounded-[4px] basis-[48%]"
              />
            </div>

            <div>
              <textarea
                className="w-[100%] h-48 p-4 bg-gray-100 sm:rounded-[4px] resize-none"
                placeholder="Message..."
              ></textarea>
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="py-4 px-20 mx-auto text-white bg-blue mt-10"
            >
              Submit
            </button>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Contact;
