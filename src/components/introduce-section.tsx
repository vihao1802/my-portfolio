"use client";
import { motion } from "framer-motion";
import SlideToRight from "@/components/SlideToRight";
import { Fragment } from "react";
import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "sanity";

const IntroduceSection = ({
  occupation,
  yourName,
  introduction,
}: {
  occupation: string;
  yourName: string;
  introduction: string;
}) => {
  const text = `My goal is to become a ${occupation} !`.split(" ");

  return (
    <Fragment>
      <div className="Home text-[50px]">
        {text.map((el, i) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.25,
              delay: i / 10,
            }}
            key={i}
            className={`${i > 5 ? "text-orange-400" : "text-white"} `}
          >
            {el}{" "}
          </motion.span>
        ))}
      </div>
      <SlideToRight>
        <div className="text-[18px] text-gray-400">
          My name is <span className="text-xl text-orange-500">{yourName}</span>{" "}
          {introduction}
        </div>
      </SlideToRight>
    </Fragment>
  );
};
export default IntroduceSection;
