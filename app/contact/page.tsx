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
    <div>
      <Banner
        head="Contact Us"
        content="Feel Free To Reach Us"
        paragragh=" "
        bg="bg-contact-texture"
      />

      <Container>
        <div className={`min-h-[90vh] flex flex-col sm:flex-row`}>
          {/* <div className="w-full lg:w-5/12 bg-opacity-70 bg-slate-100 backdrop-blur-lg inset-0 flex flex-col justify-end gap-6 p-16">
            Contact us
          </div> */}

          <div>
            <Image
              src={"/contact1.jpg"}
              alt="edit icon"
              width={400}
              height={400}
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 bg-green"></div>
              <span>Let’s Talk</span>
            </div>
            <h2 className="font-poppinsBold text-4xl">Get in touch with us</h2>
            <p>
              Completely synergize resource taxing relationships via premier
              niche ynamically innovate state of the art customer service.
            </p>
          </div>

          <div>
            <div className="flex gap-5">
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

          <div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 bg-green"></div>
              <span>Contact Us</span>
            </div>

            <div>
              <h1 className="font-poppinsBold text-4xl text-darkGray">
                Request A Call Back !
              </h1>
            </div>
          </div>
        </div>
        <form>
          <div>
            <div>
              <input type="text" placeholder="Your Name" />
              <input type="text" placeholder="Phone Number" />
            </div>
            <div>
              <input type="text" placeholder="Email Address" />
              <input type="text" placeholder="Subject" />
            </div>
          </div>
          <div>
            <textarea
              className="w-300 h-300"
              placeholder="Message..."
            ></textarea>
          </div>
          <button type="submit" className="p-5 bg-blue">
            Submit
          </button>
        </form>
      </Container>
    </div>
  );
};

export default Contact;
