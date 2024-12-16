"use client";
import Image from "next/image";
import { pjs } from "@/constants";
import { AlignRight, List } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  /* const handleLinkClick = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    handleToggle();
  }; */

  return (
    <>
      <div className="fixed hidden lg:flex w-[250px] h-[100%] flex-col justify-evenly items-center bg-zinc-900 z-50">
        <div>
          <Image
            src={"/avatar.jpg"}
            width={150}
            height={150}
            alt="Logo"
            className="mt-5 rounded-full max-h-[150px] max-w-[150px] object-cover border-4 border-text-gray-400"
          />
        </div>
        <div
          className={`h-full w-full flex flex-col p-10 gap-[30px] ${pjs.className} font-bold text-[20px]`}
        >
          <a href="#">
            <div className="transition ease-in-out delay-50 p-1 border-b-2 border-zinc-900 hover:border-white cursor-pointer">
              Home
            </div>
          </a>
          <a href="#cert">
            <div className="transition ease-in-out delay-50 p-1 border-b-2 border-zinc-900 hover:border-white cursor-pointer">
              Certificates
            </div>
          </a>
          <a href="#projects">
            <div className="transition ease-in-out delay-50 p-1 border-b-2 border-zinc-900 hover:border-white cursor-pointer">
              Projects
            </div>
          </a>
          <a href="#my-cv">
            <div className="transition ease-in-out delay-50 p-1 border-b-2 border-zinc-900 hover:border-white cursor-pointer">
              My CV
            </div>
          </a>
          <a href="#contact">
            <div className="transition ease-in-out delay-50 p-1 border-b-2 border-zinc-900 hover:border-white cursor-pointer">
              Contact
            </div>
          </a>
        </div>
      </div>
      <div className="fixed flex justify-between items-center lg:hidden w-full h-[56px] bg-zinc-900 z-50 top-0 p-4 mb-4">
        <h1 className="text-lg">Tran Vi Hao</h1>
        <AlignRight
          width={30}
          height={30}
          className="cursor-pointer"
          onClick={handleToggle}
        />
      </div>
      <div
        className={`fixed top-[56px] z-50 right-0 w-full bg-zinc-900 text-white transform ${
          toggle ? "translate-y-0 block" : "-translate-y-full hidden"
        } transition-transform duration-300 ease-in-out`}
      >
        <nav className="space-y-6 p-4">
          <a
            href="#"
            className="block hover:text-gray-300 cursor-pointer"
            onClick={handleToggle}
          >
            Home
          </a>
          <a
            href="#cert"
            className="block hover:text-gray-300 cursor-pointer"
            onClick={handleToggle}
          >
            Certificates
          </a>
          <a
            href="#projects"
            className="block hover:text-gray-300 cursor-pointer"
            onClick={handleToggle}
          >
            Projects
          </a>
          <a
            href="#my-cv"
            className="block hover:text-gray-300 cursor-pointer"
            onClick={handleToggle}
          >
            My CV
          </a>
          <a
            href="#contact"
            className="block hover:text-gray-300 cursor-pointer"
            onClick={handleToggle}
          >
            Contact
          </a>
        </nav>
      </div>
    </>
  );
};

export default Header;
