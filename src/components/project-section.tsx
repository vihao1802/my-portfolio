"use client";
import Image from "next/image";
import { CodeIcon, Link } from "lucide-react";
import SlideToTop from "@/components/SlideToTop";
import { getProjects } from "../../sanity/sanity-utils";
import { useEffect, useState } from "react";
import { Project } from "../../types/Project";
import { projectsList } from "@/constants/projects";

const ProjectSection = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const projectsData = await getProjects();
      setProjects(projectsData);
    };

    fetchProjects();
  }, []);

  return (
    <div id="projects" className="pt-14">
      <SlideToTop>
        <h1 className="text-[32px] text-blue-500">PROJECTS</h1>
      </SlideToTop>
      <SlideToTop delay={0.3}>
        {projectsList.map((project) => (
          <div
            className="mt-4 bg-white shadow-lg rounded-xl p-6 border border-gray-200"
            key={project.id}
          >
            <div className="flex flex-col md:flex-row justify-between text-orange-400 mb-4 ">
              <h2 className="text-3xl font-bold text-orange-600 flex flex-col items-start">
                <a
                  href={project.projectLink}
                  target="_blank"
                  className="hover:text-orange-400 flex items-center gap-1"
                >
                  {project.projectName}
                  <Link />
                </a>
                <p className="text-lg font-semibold text-gray-600">
                  ({project.role})
                </p>
              </h2>
              <div>
                <h2>{project.projectDuration}</h2>
              </div>
            </div>
            <div className="text-gray-500 mb-4">
              <h2>"{project.projectDescription}"</h2>
            </div>

            <div className="space-y-3">
              {project.websiteLink !== "" && (
                <div>
                  <div className="before:content-['➡️'] flex flex-row gap-1 text-lg font-semibold">
                    <h3 className=" text-gray-800">Website:</h3>
                    <a href={project.websiteLink} target="_blank">
                      <h3 className=" text-gray-600">{project.websiteLink}</h3>
                    </a>
                  </div>
                </div>
              )}

              <div>
                <div className="before:content-['➡️'] flex flex-row gap-1 text-lg font-semibold">
                  <h3 className=" text-gray-800">Team size:</h3>
                  <h3 className=" text-gray-600">{project.teamSize}</h3>
                </div>
              </div>
              <div>
                <h3 className="before:content-['➡️'] text-lg font-semibold text-gray-800">
                  Technologies
                </h3>
                <ul className="list-inside list-disc text-gray-600">
                  <li>
                    <strong className="text-gray-800">Front-end:</strong>{" "}
                    {project.technologies.frontend}
                  </li>
                  {project.technologies.backend !== "" && (
                    <li>
                      <strong className="text-gray-800">Back-end:</strong>{" "}
                      {project.technologies.backend}
                    </li>
                  )}
                </ul>
              </div>
              {/* <div>
                <h3 className="before:content-['➡️'] text-lg font-semibold text-gray-800">
                  Features
                </h3>
                <ul className="list-inside list-disc text-gray-600">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div> */}
              <div>
                <h3 className="before:content-['🎯'] text-lg font-semibold text-gray-800">
                  Responsibilities
                </h3>
                <ul className="list-inside list-disc text-gray-600">
                  {project.responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}

        {/* <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-[30px]">
          {projects.map((project) => (
            <div
              className="relative w-full h-auto shadow-none sm:shadow-lg rounded-lg flex flex-col "
              key={project._id}
            >
              <div className="relative aspect-video">
                <img
                  src={project.image}
                  className="rounded-t-md object-cover"
                  alt="Banner"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div className="p-3 flex-grow flex flex-col gap-3 bg-zinc-900">
                <div className="flex flex-col justify-start text-left space-y-2">
                  <p className="text-lg font-extrabold line-clamp-2">
                    {project.name}
                  </p>
                  <p className="text-gray-500 text-sm line-clamp-2">
                    {project.content}
                  </p>
                </div>
                <div className="mt-auto">
                  <a
                    href={project.url}
                    className="no-underline flex flex-row ml-auto  justify-between text-gray-600 hover:text-blue-600 w-[135px]"
                    target="_blank"
                  >
                    <CodeIcon /> Source code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </SlideToTop>
    </div>
  );
};

export default ProjectSection;
