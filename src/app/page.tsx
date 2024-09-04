"use client";
import Image from "next/image";
import { Poppins, Plus_Jakarta_Sans } from "next/font/google";
import { motion } from "framer-motion";
import { CodeIcon, MailIcon } from "lucide-react";
import SlideToLeft from "@/components/SlideToLeft";
import SlideToTop from "@/components/SlideToTop";
import SlideToRight from "@/components/SlideToRight";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});
const pjs = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600"],
});

function downloadPDF() {
  const fileUrl = "/Nodefair_CV.pdf"; // Path to your PDF file in the public folder
  const link = document.createElement("a");
  link.href = fileUrl;
  link.download = "TranViHao_CV.pdf"; // Name of the downloaded file
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export default function Home() {
  const text = "My goal is to become a Frontend Developer !".split(" ");

  return (
    <main>
      <div className="flex justify-evenly items-center bg-zinc-900">
        <div>
          <Image src={"/logo.png"} width={80} height={80} alt="Logo" />
        </div>
        <div
          className={`flex flex-row gap-[70px] ${pjs.className} font-semibold text-[16px]`}
        >
          <div className="transition ease-in-out delay-50 p-1 border-b-2 border-zinc-900 hover:border-white cursor-pointer">
            <p>Home</p>
          </div>
          <div className="transition ease-in-out delay-50 p-1 border-b-2 border-zinc-900 hover:border-white cursor-pointer">
            <p>
              <a href="#projects">Projects</a>
            </p>
          </div>
          <div className="transition ease-in-out delay-50 p-1 border-b-2 border-zinc-900 hover:border-white cursor-pointer">
            <p>
              <a href="#cert">Certificates</a>
            </p>
          </div>
          <div className="transition ease-in-out delay-50 p-1 border-b-2 border-zinc-900 hover:border-white cursor-pointer">
            <p>
              <a href="#contact">Contact</a>
            </p>
          </div>
        </div>
      </div>
      <div>
        <div
          className={`${poppins.className} py-[100px] max-w-[720px] mx-auto text-center space-y-14`}
        >
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
              My name is{" "}
              <span className="text-xl text-orange-500">Tran Vi hao</span> and I
              am currently a fourth-year student at Sai Gon University. After
              working on team and personal projects, I have gained more
              experience in problem-solving skills and team leadership ability.
            </div>
          </SlideToRight>

          <div
            className={`${poppins.className} font-semibold text-[20px] space-x-5`}
          >
            <a
              href="mailto:tranvihao40@gmail.com"
              className="transition ease-in-out delay-50 no-underline px-[24px] py-[12px] bg-white hover:bg-orange-400 hover:text-white text-black rounded-xl"
            >
              Get In Touch
            </a>
            <button
              className="transition ease-in-out delay-50 bg-black border-2 border-white hover:bg-white hover:text-black px-[22px] py-[10px] text-white font-bold rounded-xl inline-flex items-center"
              onClick={downloadPDF}
            >
              <svg
                className="fill-current w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              <span>Download</span>
            </button>
          </div>
          <div id="projects">
            <SlideToTop>
              <h1 className="text-[45px] text-blue-500">PROJECTS</h1>
            </SlideToTop>
            <SlideToTop delay={0.3}>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                <div className="relative w-full h-auto shadow-none sm:shadow-lg rounded-lg flex flex-col ">
                  <div className="relative aspect-video">
                    <Image
                      src={"/course-learning-project.png"}
                      fill
                      priority
                      sizes="(max-width: 600px) 100vw"
                      className="rounded-t-md object-cover"
                      alt="Banner"
                    />
                  </div>
                  <div className="p-3 flex-grow flex flex-col gap-3 bg-zinc-900">
                    <div className="flex flex-col justify-start text-left space-y-2">
                      <p className="text-lg font-extrabold line-clamp-2">
                        Course Learning Website
                      </p>
                      <p className="text-gray-500 text-sm">
                        A fullstack website for creating, enrolling and learning
                        course through uploaded video.
                      </p>
                    </div>
                    <div>
                      <a
                        href="https://github.com/vihao1802/course-learning-website"
                        className="no-underline flex flex-row ml-auto justify-between text-gray-600 hover:text-blue-600 w-[135px]"
                        target="_blank"
                      >
                        <CodeIcon /> Source code
                      </a>
                    </div>
                  </div>
                </div>
                <div className="relative w-full h-auto shadow-none sm:shadow-lg rounded-lg flex flex-col ">
                  <div className="relative aspect-video">
                    <Image
                      src={"/website-classin-project.png"}
                      fill
                      priority
                      sizes="(max-width: 600px) 100vw"
                      className="rounded-t-md object-cover"
                      alt="Banner"
                    />
                  </div>
                  <div className="p-3 flex-grow flex flex-col gap-3 bg-zinc-900">
                    <div className="flex flex-col justify-start text-left space-y-2">
                      <p className="text-lg font-extrabold line-clamp-2">
                        Website ClassIn
                      </p>
                      <p className="text-gray-500 text-sm">
                        A fullstack website for managing classroom and multiple
                        choice test.
                      </p>
                    </div>
                    <div>
                      <a
                        href="https://github.com/vihao1802/Website-ClassIn"
                        className="no-underline flex flex-row ml-auto justify-between text-gray-600 hover:text-blue-600 w-[135px]"
                        target="_blank"
                      >
                        <CodeIcon /> Source code
                      </a>
                    </div>
                  </div>
                </div>
                <div className="relative w-full h-auto shadow-none sm:shadow-lg rounded-lg flex flex-col ">
                  <div className="relative aspect-video">
                    <Image
                      src={"/pick-randomly-an-anime.png"}
                      fill
                      priority
                      sizes="(max-width: 600px) 100vw"
                      className="rounded-t-md object-cover"
                      alt="Banner"
                    />
                  </div>
                  <div className="p-3 flex-grow flex flex-col gap-3 bg-zinc-900">
                    <div className="flex flex-col justify-start text-left space-y-2">
                      <p className="text-lg font-extrabold line-clamp-2">
                        Pick Randomly An Anime
                      </p>
                      <p className="text-gray-500 text-sm">
                        A fullstack website pick for you a random anime to watch
                        in your free time.
                      </p>
                    </div>
                    <div>
                      <a
                        href="https://github.com/vihao1802/pick-randomly-an-anime"
                        className="no-underline flex flex-row ml-auto justify-between text-gray-600 hover:text-blue-600 w-[135px]"
                        target="_blank"
                      >
                        <CodeIcon /> Source code
                      </a>
                    </div>
                  </div>
                </div>
                <div className="relative w-full h-auto shadow-none sm:shadow-lg rounded-lg flex flex-col ">
                  <div className="relative aspect-video">
                    <Image
                      src={"/grammar_ai_checker_project.png"}
                      fill
                      priority
                      sizes="(max-width: 600px) 100vw"
                      className="rounded-t-md object-cover"
                      alt="Banner"
                    />
                  </div>
                  <div className="p-3 flex-grow flex flex-col gap-3 bg-zinc-900">
                    <div className="flex flex-col justify-start text-left space-y-2">
                      <p className="text-lg font-extrabold line-clamp-2">
                        Grammar AI Checker
                      </p>
                      <p className="text-gray-500 text-sm">
                        A website using Gemeni API to check grammar of a given
                        text.
                      </p>
                    </div>
                    <div>
                      <a
                        href="https://github.com/vihao1802/Grammar-AI-Checker"
                        className="no-underline flex flex-row ml-auto justify-between text-gray-600 hover:text-blue-600 w-[135px]"
                        target="_blank"
                      >
                        <CodeIcon /> Source code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SlideToTop>
          </div>
          <div>
            <SlideToLeft>
              <h1 id="cert" className="text-[45px] text-orange-500">
                CERTIFICATES
              </h1>
            </SlideToLeft>
            <SlideToLeft delay={0.3}>
              <div className="mt-4 space-y-2 text-left text-zinc-400">
                <p>
                  TOEIC ETS Listening & Reading:{" "}
                  <strong className="text-white">Pending</strong>
                </p>
                <p>
                  TOEIC ETS Writing & Speaking:{" "}
                  <strong className="text-white">Pending</strong>
                </p>
              </div>
            </SlideToLeft>
          </div>
        </div>
      </div>
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
                It's really a big honor if you are interested in my abilities
                and you can freely reach out me at anytime. Furthermore, I am
                always eager to learn more about latest frontend technologies
                and make progress every single day.
              </p>
            </SlideToLeft>
            <SlideToLeft delay={0.6} damping={12}>
              <a
                href="mailto:tranvihao40@gmail.com"
                className="no-underline text-[18px] text-gray-300"
                target="_blank"
              >
                <p className="flex flex-row gap-2">
                  <MailIcon /> tranvihao40@gmail.com
                </p>
              </a>
            </SlideToLeft>
          </div>

          <div></div>
        </div>
      </div>
    </main>
  );
}
