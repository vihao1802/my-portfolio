"use client";
import { motion } from "framer-motion";
import SlideToRight from "@/components/SlideToRight";
import { Fragment } from "react";
import { Image, Server, Settings } from "lucide-react";

const IntroduceSection = ({
  occupation,
  yourName,
  introduction,
  frontend,
  backend,
  others,
}: {
  occupation: string;
  yourName: string;
  introduction: string;
  frontend: string;
  backend: string;
  others: string;
}) => {
  return (
    <Fragment>
      <div>
        <div className="Home text-[55px] mb-2">
          {yourName.split(" ").map((el, i) => (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: i / 10,
              }}
              key={i}
              className={`${i == 2 ? "text-orange-400" : "text-white"} `}
            >
              {el}{" "}
            </motion.span>
          ))}
        </div>

        <div className="text-[18px] text-gray-400">
          <div>Hi, welcome to see my portfolio!</div>
          <div>
            My goal is to become a{" "}
            <span className="text-xl text-orange-500">{occupation}</span> in the
            future.
          </div>
          <div>{introduction}</div>
        </div>
      </div>

      <div className="pt-14 text-[18px] space-y-4">
        <div className="flex flex-col lg:flex-row gap-2 flex-wrap justify-start">
          <Image className="text-orange-600" />
          <p className="text-gray-400">Frontend</p> {frontend}
        </div>
        <div className="flex flex-col lg:flex-row gap-2 flex-wrap justify-start">
          <Server className="text-blue-600" />
          <p className="text-gray-400">Backend:</p> {backend}
        </div>
        <div className="flex flex-col lg:flex-row gap-2 flex-wrap justify-start">
          <Settings className="text-white" />
          <p className="text-gray-400">Others:</p> {others}
        </div>
      </div>
    </Fragment>
  );
};
export default IntroduceSection;
