"use client";
import { MailIcon, MapPin } from "lucide-react";
import SlideToRight from "@/components/SlideToRight";
import { poppins } from "@/constants";
import { Fragment } from "react";

const Footer = ({
  location,
  contactEmail,
}: {
  location: string;
  contactEmail: string;
}) => {
  return (
    <Fragment>
      <div className="py-[80px] mt-14">
        <div className={`${poppins.className} flex flex-col mx-auto`}>
          <SlideToRight>
            <h1 id="contact" className="text-[32px] text-orange-400 mb-4">
              Contact
            </h1>
          </SlideToRight>
          <div className="flex flex-col space-y-6">
            <SlideToRight delay={0.3}>
              <p className="text-[18px] text-zinc-500">
                It's really a big honor if you are interested in my abilities
                and you can freely reach out me at anytime. Furthermore, I am
                always eager to learn more about latest technologies and make
                progress every single day.
              </p>
            </SlideToRight>
            <SlideToRight delay={0.6}>
              <a
                href="mailto:tranvihao40@gmail.com"
                className="no-underline text-[18px] text-gray-300 inline-block"
                target="_blank"
              >
                <p className="flex flex-row gap-2 mb-4 ">
                  <MailIcon /> {contactEmail}
                </p>
              </a>
              <a
                className="no-underline text-[18px] text-gray-300"
                target="_blank"
              >
                <p className="flex flex-row gap-2">
                  <MapPin /> {location}
                </p>
              </a>
            </SlideToRight>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
