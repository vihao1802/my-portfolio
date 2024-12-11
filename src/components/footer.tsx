"use client";
import { MailIcon, MapPin } from "lucide-react";
import SlideToLeft from "@/components/SlideToLeft";
import { poppins } from "@/constants";

const Footer = ({
  location,
  contactEmail,
}: {
  location: string;
  contactEmail: string;
}) => {
  return (
    <div className="py-[80px] bg-zinc-900">
      <div
        className={`${poppins.className} flex flex-col space-y-[35px] mx-auto max-w-[720px]`}
      >
        <SlideToLeft damping={12}>
          <h1 id="contact" className="text-[23px] font-bold">
            Contact
          </h1>
        </SlideToLeft>
        <div className="flex flex-col space-y-6">
          <SlideToLeft delay={0.3} damping={12}>
            <p className="text-[18px] text-zinc-500">
              It's really a big honor if you are interested in my abilities and
              you can freely reach out me at anytime. Furthermore, I am always
              eager to learn more about latest frontend technologies and make
              progress every single day.
            </p>
          </SlideToLeft>
          <SlideToLeft delay={0.6} damping={12}>
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
          </SlideToLeft>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Footer;
